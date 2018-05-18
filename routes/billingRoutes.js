const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

modules.export = app => {
    app.post('/api/stripe', (req, res) => {
        stripe.charges.create({
            amount: 2000,
            currency: "usd",
            source: "tok_amex", // obtained with Stripe.js
            description: "Charge for ava.wilson@example.com"
          }, function(err, charge) {
            // asynchronously called
          });
          
    });
}