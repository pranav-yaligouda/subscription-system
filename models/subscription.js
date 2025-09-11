import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription Name is required'],
        trim: true,
        minLength: 3,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscription Price is required'],
        min: [0, 'Price cannot be negative must be greater than zero'],
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD'],
        default: 'INR',
    },
    frequency: {
        type: String,
        enum: ['Monthly', 'Yearly', 'Weekly', 'Daily'],
    },
    category: {
        type: String,
        enum: ['Entertainment', 'Productivity', 'Education', 'Health', 'Other'],
        required: true,
    },
    payementMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Cancelled', 'Expired'],
        default: 'Active',
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: 'Start Date cannot be in the future it should be in the must be in the past',
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return value > this.startDate;
            },
            message: 'Renewal Date must be after Start Date',
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }
})

//Auto-calculate renewal date if missing.
subscriptionSchema.pre('save', function (next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            'Daily': 1,
            'Weekly': 7,
            'Monthly': 30,
            'Yearly': 365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
    }

    //Auto-update status if renewal date has passed
    if(this.renewalDate < new Date()) {
        this.status = 'Expired';
    }
    next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;