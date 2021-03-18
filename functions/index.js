const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IVvrmEOlirF5L401rFoBnvZU7lAnDRk2R9aP0f9IJfcGqq4ycFJCja9GhWf12r1nN4Z60Nu2esiotcldMxKB1cU0098p2izI7')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received', total);

    const paymentIntent = await stripe.paymentIntents.create ({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/e-commerce-eec77/us-central1/api