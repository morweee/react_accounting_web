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
    password: "Sss@768349251",
    database: "accounts"

  }
)

app.post('/register', (req, res)=>{

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users (username, email, password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
        if(result)
        {
          res.send(result);
        }
        else{
          res.send({message: "ENTER THE CORRECT DETAILS"});
        }
       
    } 
    )

})

app.listen(3001, ()=>{
    console.log("server is running");})