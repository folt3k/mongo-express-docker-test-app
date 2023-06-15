import { MongoClient } from "mongodb";
import express from "express";

const app = express() ;
const client = new MongoClient('mongodb://admin:password@localhost:27017');

app.get('/products', async (req, res) => {
    try {
        console.log('start')
        const products = await client.db("shop").collection("products").find().toArray();

        console.log(products)

        res.json(products);
    } catch (e) {
        res.status(400).json({error: e});
    }
})

app.listen(3000,() => {
    console.log(`App listen on port 3000`)
})
