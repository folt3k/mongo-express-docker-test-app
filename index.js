import { MongoClient } from "mongodb";
import express from "express";

const app = express() ;
const client = new MongoClient(process.env.MONGO_URL || 'mongodb://admin:password@localhost:27017');

app.get('/products', async (req, res) => {
    try {
        const products = await client.db("shop").collection("products").find().toArray();

        res.json(products);
    } catch (e) {
        res.status(400).json({error: e});
    }
})

app.listen(3000,() => {
    console.log(`App listen on port 3000`)
})
