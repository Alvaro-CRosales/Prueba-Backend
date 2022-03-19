import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { adnRouter } from './adn/adn.router';

export const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));

app.use(cors());

app.use("/", (req,res)=>{
    res.send("Hola")
})

app.use("/mutation", adnRouter);