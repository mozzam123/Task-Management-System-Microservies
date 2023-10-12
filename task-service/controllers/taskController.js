const taskModel = require("./../models/taskModel");
const { Kafka } = require("kafkajs");

// Create Kafka consumer instance
const kafka = new Kafka({
  clientId: "task-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
  groupId: "task-group",
  maxWaitTimeInMs: 50,
});

consumer.connect();
console.log("Connected to consumer");

consumer.subscribe({ topic: "user-credentials" });
console.log(`Subscribed to topic`);

let latestUsername;

consumer.run({
  eachMessage: async ({ message }) => {
    const { username } = JSON.parse(message.value.toString());
    latestUsername = username;
    console.log(`Received message with username: ${username}`);
  },
});

exports.GetTask = async (req, res) => {
  res.render("task", { currentUser: latestUsername });
};

exports.CreateTask = async (req, res) => {
  try {
    const task = req.body.task;
    if (task.length <= 0) {
      console.log("Please Enter a task...this cant be null");
      return res.render("task", { blankError: "Please Enter a task...this cant be null" });
    }
    const newTask = new taskModel({
      username: latestUsername,
      task: task,
    });
    const savedTask = await newTask.save();
    console.log(`Username: ${savedTask.username} and Task: ${savedTask.task}`);
    res.render("task");
  } catch (error) {
    console.log("*******error: ", error);
    res.render("task", { error: error });
  }
};


exports.GetAllTask = async (req, res) => {
  const allTask = await taskModel.find({ username: latestUsername })
  res.render('alltask', { allTask, latestUsername })
}



exports.DeleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId
    await taskModel.findByIdAndDelete(taskId)
    res.status(200).render('alltask')

  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting task")
  }
}

exports.UpdateTask = async(req,res) =>{
  try {
    console.log(req.params);
    const taskId = req.params.taskId
    const task = await taskModel.findByIdAndUpdate(taskId)
    console.log('***********task updated****************');
    console.log(task);
    res.status(200)
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting task")
  }
}