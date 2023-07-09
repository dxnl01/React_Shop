import Express  from "express";
import { getAllUsers, createUser, updateUser,getUser } from "../controllers/userControllers";
const Router = Express.Router();

Router.get('/', getAllUsers);
Router.get('/:id', getUser);
Router.post('/', createUser);
Router.put('/:id', updateUser);

export default Router;