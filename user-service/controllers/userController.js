const userModel = require("./../models/userModel");
const { Kafka, Partitioners } = require("kafkajs");

// Create Kafka producer instance
const kafka = new Kafka({ brokers: ["localhost:9092"] });
const producer = kafka.producer();

exports.GetRegisterUser = (req, res) => {
  res.render("registration");
};

exports.RegisterUser = async (req, res) => {
  try {
    const username = req.body.username;
    const existingUser = await userModel.findOne({ username: username });
    const alreadyEmail = await userModel.findOne({ email: req.body.email });
    if (existingUser || alreadyEmail) {
      return res.render("registration", {
        message: "Username or email already exists",
      });
    } else {
      const userData = new userModel({
        username: username,
        email: req.body.email,
        password: req.body.password,
      });

      const savedData = await userData.save();
      console.log(
        `New user saved with usename: ${savedData.username} and password: ${savedData.password}`
      );
      res.render("login");
    }
  } catch (error) {
    console.log("*****errors*****", error);
    return res.render("registration", { error: error.message });
  }
};

exports.GetLoginPage = async (req, res) => {
  res.render("login");
};

exports.LoginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await userModel.findOne({
      username: username,
      password: password,
    });

    if (!existingUser) {
      return res.render("login", { error: "Invalid credentials" });
    }
    // Create message to be sent to Kafka topic
    const message = {
      username: username,
      loggedIn: true,
    };
    console.log('Created Message');

    // Send message to Kafka topic
    await producer.connect();
    console.log('Producer connected');

    await producer.send({
      topic: 'user-credentials',
      messages: [{ value: JSON.stringify(message) }],
    });

    console.log(`Sent message to Kafka topic 'user-credentials': ${JSON.stringify(message)}`);
    await producer.disconnect();
    console.log('Disconnected Producer');

    res.redirect("http://localhost:9000/");
    console.log('Redirected');
  } catch (error) {
    console.log("**********", error);
    return res.render("login");
  }
};
