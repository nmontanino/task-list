const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/task-list')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback) {
    console.log("Connection Succeeded")
})

const Task = require("../models/task")

// Get all tasks
app.get('/tasks', (req, res) => {
    Task.find({}, 'name description', function (error, tasks) {
        if (error) { console.error(error); }
        res.send({
            tasks: tasks
        })
    }).sort({_id:-1})
})

// Post new task
app.post('/tasks', (req, res) => {
    const db = req.db
    const name = req.body.name
    const description = req.body.description
    const new_task = new Task({
        name: name,
        description: description
    })

    new_task.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Successfully added a new task.'
        })
    })
})

app.listen(process.env.PORT || 8081)