import mongoose from 'mongoose';
main().then((res)=>{
    console.log("Connected to database");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/IDE');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const ProblemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    constraints:{
        type:[String],
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        enum:['Easy', 'Medium', 'Hard']
    },
    topics: {
        type: [String],
        required: true
    },
    examples:{
        type:[{
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            },
            explaination:{
                type:String,
                required:true
            }
        }],
        required: true
    },
    follow_up:{
        type: String,
        required: true
    }
});
const Problem = mongoose.model('Problem',ProblemSchema);

export default Problem;