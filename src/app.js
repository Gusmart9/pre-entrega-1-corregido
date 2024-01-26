const PORT=8080
const express = require('express');
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//const ProductManager = require('./productsManager')
//const CartsManager = require('./cartsManager')

const productRouter = require('./routes/products.router')
const cartsRouter = require('./routes/carts.router')

    app.use('/api/products', productRouter);
    app.use('/api/carts', cartsRouter);

app.listen(PORT, ()=>{
    console.log(`Server on line en puerto ${PORT}`)
}) 

