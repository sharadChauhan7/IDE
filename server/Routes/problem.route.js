import express from 'express';
import axios from 'axios';
import{setProblem,getProblem,getProblems,updateProblem,deleteProblem} from '../Controllers/problem.controller.js';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router({mergeParams:true});


router.route('/').get(getProblems).post(setProblem);

router.route('/:id').get(getProblem).put(updateProblem).delete(deleteProblem);

export default router;