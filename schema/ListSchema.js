const mongoose = require('mongoose')


const List = new mongoose.Schema({


    TaskTitle:
    {
        type:String ,
        required:true
    },
    TaskBody:
    {
        type:String ,
        required:true
    },
    date:
    {
        type:Date,
        require:Date.now
    },
    TaskStatus:
    {
        type:Boolean,
        default:false
    }

})

const TaskList=mongoose.model('TASKLIST',List);
module.exports=TaskList;