import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyparser from "body-parser";
import multer from "multer";
import path from "path";
import jwt from 'jsonwebtoken';


const app = express();
app.use(cors());
//use express static folder
app.use(express.static("./uploads"));

// body-parser middleware use
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "product_management",
});
db.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database');
});
//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./uploads/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});
app.get("/", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "error inside server" });
    return res.json(result);
  });
});
app.delete("/product/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE from products where id =${id}`;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "error inside server" });
    return res.status(200).json({
      data: id,
      message: "Product deleted sucessfully",
    });
  });
});

app.post("/products", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({
        message: "no image found",
      });
    }

    const sql =
      "INSERT INTO products (title,description,price,image) VALUES (?,?,?,?)";

    const values = [
      req.body.title,
      req.body.description,
      parseInt(req.body.price),
      req.file.filename,
    ];

    db.query(sql, values, (err, result) => {
      if (err) return res.json(err);
      return res.status(201).json({
        data: values,
        message: "Product Created Sucessfully",
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// Create a new user register
app.post('/register',(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  db.query("INSERT INTO users (email,password) VALUES (?,?)",
  [email,password],
  (err,result)=>{
    console.log(err);
  }
  )
})
app.post('/login',(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email,password],
    (err,result)=>{
      if(err){
        res.status(500).json({
          message:"Invalid Credintals"
        })
      }
      const verify = jwt.sign(
        {
          email: email,
          password:password
        },
        'thisissecretcode',
        { expiresIn: "7d" },
        (err, token) => {
          res.status(200).json({
            message: "Login succcessful!",
            token: token,
          });
        })
        

     
      
     
    }
  )

})

// app.get('/user', (req, res) => {
//   const userId = req.user.id;

//   connection.query('SELECT id, email FROM users WHERE id = ?', userId, (error, results) => {
//     if (error) {
//       console.error('Error retrieving user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }

//     if (results.length === 0) {
//       res.status(404).json({ error: 'User not found' });
//       return;
//     }

//     const user = results[0];
//     res.json(user);
//   });
// });
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});




app.listen(8000, () => {
  console.log("hello backend");
});
