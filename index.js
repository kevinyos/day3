const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');
// app.use(bodyParser())
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json()); 


app.get('/',(req,res)=>{
    res.status(200).send('<h1>Welcome to Japari Park</h1>')
})
app.post('/post',(req,res)=>{
    console.log(req.body)
    //Axios.post(APIURL,data){}
    //req.body => ambil data dari front (parameter kedua axios.post)
    //req.params => data dari url endpoint /patch/:id
    //req.query => search => url
    if(req.body.username==='lian'){
        res.status(200).send('<h1>Lanjut</h1>')
    }else{
        res.status(500).send('<h1>Ga boleh lanjut</h1>')
    }
    
})
app.patch('/patch/:id',(req,res)=>{
    console.log(req.params)
    res.status(200).send('<h1>Patch</h1>')
})
app.put('/put',(req,res)=>{
    console.log(req.query)
    res.status(200).send('<h1>Put</h1>')
})
app.delete('/',(req,res)=>{
    res.status(200).send('<h1>Delete</h1>')
})

// Router => simpan semua alamat => URL dan Method
// Controller = > function yang dijalankan ketika url endpoint di akses

// const { userRouter } = require('./router')
// app.use('/users', userRouter)

app.listen(port,()=>console.log(`API active at port ${port}`))