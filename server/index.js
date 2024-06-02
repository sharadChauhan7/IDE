import express from 'express';
import dotenv from 'dotenv';
import playground from './Routes/playground.js';
import cors from 'cors';
import Problem from './model/problem.model.js';
dotenv.config();
const app = express();
const corsOptions={
    origin:'http://localhost:5173',
    methods:['GET','POST'],
    allowedHeaders:['Content-Type']

}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
    });

app.get('/',(req,res)=>{
    res.send(`${process.env.PORT }`);
});

app.post('/',(req,res)=>{
    // print the request body
    console.log(req);
    res.send('Post request');
});

app.use('/playground',playground);