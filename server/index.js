import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

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