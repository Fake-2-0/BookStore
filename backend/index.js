import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Riyal#3105",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.json("Hello this is the backend")
})

app.get('/books', (req,res)=>{
    const q = 'SELECT * FROM books';
    db.query(q,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/books', (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUES(?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ];

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Book has been created sucessfully");
    })
})

app.delete("/books/:id", (req,res)=>{
    const bookID = req.params.id;
    const q = "DELETE FROM books WHERE id=?";

    db.query(q, [bookID], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted sucessfully");
    })
})

app.put("/books/:id", (req,res)=>{
    const bookID = req.params.id;
    const q = "UPDATE books SET `title`=?, `desc`=?, `cover`=?, `price`=? WHERE id=?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ];

    db.query(q, [...values,bookID], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Book has been updated sucessfully");
    })
})

app.listen(8800, ()=>{
    console.log('Connected to backend')
})