const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController')
const taskMiddleware = require('../middlewares/tasksMiddleWares')


router.get('/tasks', taskController.getAll)
router.post('/tasks', taskMiddleware.validateTitle, taskController.createTask)
router.delete('/tasks/:id', taskController.deleteTask)
router.put('/tasks/:id',
 taskMiddleware.validateTitle,
 taskMiddleware.validateStatus,
 taskController.updateTask)


module.exports = router;