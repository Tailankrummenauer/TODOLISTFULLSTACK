const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks   
};

const createTask = async (task)=>{
    const {title} = task
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (titulo, status, created_at) VALUES (?, ?, ?)'
    const [createdTask] = await connection.execute(query, [title,'Pendente', dateUTC])
    return {insertId: createdTask.insertId}
}

const deleteTask = async (idTask) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id= ?', [idTask]);
    return removedTask;
} 

const updateTask = async (id, task)=>{
    const {titulo, status} = task
    console.log(titulo, status)
    const query = 'UPDATE tasks SET titulo = ?, status = ? WHERE id = ?';
    const [updatedTask] = await connection.execute(query, [titulo, status, id]);
    return updatedTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};