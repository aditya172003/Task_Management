

const express    = require('express');
const userRoutes = express();
const { addTask, getTask, updateTask, setStatus, deleteTask } = require('../Controllers/TaskManageController');



userRoutes.post('/addTask',addTask);
userRoutes.get('/todays',getTask);
userRoutes.patch('/update',updateTask);
userRoutes.patch('/complete',setStatus);
userRoutes.delete('/deleteTask',deleteTask);
module.exports = userRoutes;