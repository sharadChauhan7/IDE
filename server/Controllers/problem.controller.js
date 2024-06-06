import e from 'express';
import Problem from '../Model/problem.model.js';

export const setProblem= async (req,res)=>{
    try{
        let problem = req.body;
        problem = new Problem(problem);
        await problem.save();
        res.send('Problem added successfully');
        // res.send('Problem route');
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

export const getProblem = async (req,res)=>{
    try{
        let {id} = req.params;
        let problem = await Problem.findById(id);
        res.status(200).send(problem);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

export const getProblems = async (req,res)=>{
    try{
        let problems = await Problem.find();
        res.status(200).send(problems);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

export const updateProblem = async (req,res)=>{
    try{
        let {id} = req.params;
        let problem = req.body;
        await Problem.findByIdAndUpdate(id,problem);
        res.send('Problem updated successfully');
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

export const deleteProblem = async (req,res)=>{
    try{
        let {id} = req.params;
        await Problem.findByIdAndDelete(id);
        res.send('Problem deleted successfully');
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
