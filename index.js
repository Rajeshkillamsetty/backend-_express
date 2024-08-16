//import
const express = require('express')
const dotenv =require('dotenv')
//config
dotenv.config({path:'./config'})
//rest object
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello word')
})

const products = [
    {
       id:1,
       name:"rajesh"
    },
    {
        id:2,
        name:"rakesh"
    }
]
app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const newData= products.filter(item=>item.id.toString()===req.params.id)
    res.json(newData)
})
app.post('/addproducts',(req,res)=>{
    const {id,name}=req.body
    console.log(id,name)
    return res.send('storing the data')
})
//port
const PORT = process.env.PORT||5000
//listen
app.listen(PORT, () => console.log(`server is running ${process.env.DEV_MODE} node port ${PORT}`));