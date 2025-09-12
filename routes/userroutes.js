import { Router } from "express";
import authorize from "../middlewares/authmiddleware.js";
import { getUsers, getUser } from '../controllers/usercontroller.js';


const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({ title: 'POST Create new user'}));

userRouter.put('/:id', (req, res) => res.send({ title: 'PUT update user'}));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user using id'}))

export default userRouter;