import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'GET subscriptions by id'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'POST create new subscription'}));

subscriptionRouter.put('/:id', (req, res) => res.send({title: 'PUT UPDATE a subscription by id'}));

subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'DELETE subscription by id'}));

subscriptionRouter.get('/users/:id', (req, res) => res.send({title: 'GET all user subscriptions'}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'PUT CANCEL subscription by id'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals'}));

export default subscriptionRouter;