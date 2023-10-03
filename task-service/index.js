const mongoose = require('mongoose');
const app = require("./app")
const dotenv = require('dotenv');
dotenv.config()
const DB = process.env.DATABASE
const PORT = process.env.PORT || 9000


mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection established for Task service'));

app.listen(PORT, () => {
    console.log(`app listenting on port ${PORT}`);
})