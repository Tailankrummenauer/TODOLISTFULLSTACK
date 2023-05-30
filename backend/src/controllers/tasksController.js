const tasksModels = require('../models/tasksModel');

const getAll = async (_req, resp)=>{

    const tasks = await tasksModels.getAll();

    return resp.status(200).json(tasks) 
};

const createTask = async (req, res) => {
    const createdTask = await tasksModels.createTask(req.body)
    return res.status(201).json(createdTask)

}

const deleteTask = async (req, res) => {
    const {id} = req.params
    await tasksModels.deleteTask(id)
    return res.status(204).json();
}

const updateTask = async (req, res) => {
    const { id } = req.params
    await tasksModels.updateTask(id, req.body)
    return res.status(204).end();
}


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}