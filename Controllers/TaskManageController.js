
const TaskList = require('../schema/ListSchema');

exports.addTask = async(req,res)=>{
    console.log(req.body)
    const {TaskTitle,TaskBody} = req.body.data;
    
    if(!TaskTitle||!TaskBody)
    {
       return res.status(400).send('missing information')
    }

    const newTask = await new TaskList({TaskTitle,TaskBody});

    newTask.save()
    .then((data)=>{
        res.status(200).send("task added ");
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send('Internal server error');
    })

}





exports.getTask = async(req,res)=>{
    
   
//   //  const date  =    req.query.date;
//     const status=    req.query.status;
   
  //  console.log(date);
    TaskList.find({})
    .then((resp)=>{
        res.status(200).send(resp);

    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send('Internal server error');
    })

}


exports.updateTask = async(req,res)=>{
    const id = req.query.id;
    const {TaskTitle,TaskBody} = req.body.data;



    TaskList.findOneAndUpdate({_id:id},{$set:{TaskTitle,TaskBody}})
    .then((resp)=>{
        res.status(200).send("task updated");

    })
    .catch((err)=>{
        res.status(500).send('Internal server error');
    })

}

exports.setStatus = async(req,res)=>{

    const id    = req.query.id;
    const status=req.query.status;
    TaskList.findOneAndUpdate({_id:id},{$set:{TaskStatus:status}})
    .then((resp)=>{
        res.status(200).send("task completed");

    })
    .catch((err)=>{
        res.status(500).send('Internal server error');
    })

}

exports.deleteTask = async(req,res)=>{
    const id = req.query.id;

    TaskList.findOneAndDelete({_id:id})
    .then((resp)=>{
        res.status(200).send("task Deleated");

    })
    .catch((err)=>{
        res.status(500).send('Internal server error');
    })
}