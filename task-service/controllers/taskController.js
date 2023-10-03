const Task = require("./../models/taskModel");
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
    res.render("task", {currentUser: latestUsername});
};

exports.CreateTask = async (req, res) => {
  const task = req.body;
  console.log("Task: ", task);
  return res.render("task", {currentUser: latestUsername});
};
