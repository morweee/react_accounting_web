const mysql = require("mysql2");
const express =require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const db = mysql.createConnection(
  {
    user: "root",
    host: "localhost",
    password: "morrisA131408582",
    database: "accounting_web_test"
  }
)

app.post('/register', (req, res)=>{

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const sql = "INSERT INTO Users (username, email, password) VALUES (?,?,?)"

    db.query(sql, [username, email, password], (err, result) => {
        if(result)
        {
            res.send(result);
        }
        else{
            res.send("ENTER THE CORRECT DETAILS");
        }      
      } 
    )
    

})

app.listen(3001, ()=>{
    console.log("server is running");
  })

