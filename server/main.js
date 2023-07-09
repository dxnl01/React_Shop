import { Express } from "express";
import cors from 'cors';
import dataBase from "./database/database";
import productRoutes from './routers/routersProducts'
import userRoutes from './routers/routersUser'
import ProductModel from "./Models/ProductModel";
import {pay} from './routers/pay.js'
const app= Express();

