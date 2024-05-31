import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

let languageMap = {
    "javascript": ["",""],
    "cpp": ["cpp", 3],
    "c": ["c", 3],
    "python": ["python3", 3],
    "java": ["java", 3]
}

router.post('/run', async (req, res) => {
    // print the request body
    try {


        let data = {
            "clientId": process.env.CLIENT_ID,
            "clientSecret": process.env.CLIENT_SECRET,
            "script": req.body.code,
            "stdin": "",
            "language": languageMap[req.body.language][0],
            "versionIndex": languageMap[req.body.language][1],
            "compileOnly": false
        };
        var config = {
            method: 'post',
            url: 'https://api.jdoodle.com/v1/execute',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        let response = await axios(config);
        console.log(response.data);
        res.status(200).send(response.data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }

});

export default router;