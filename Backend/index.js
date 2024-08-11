const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");

const employeeModel = require('./model');
//Write missing code here //done?

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await employeeModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
//GET Code
app.get('/get', async (req, res) => {
  console.log('Fetching all employees');
  try {
      const data = await employeeModel.find();
      res.json(data);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
