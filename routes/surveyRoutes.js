const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/surveyTemplate.js')
const Survey = mongoose.model('surveys');


module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const {title, subject, body, recepients} = req.body; 

        //ew survey 
        const survey = new Survey({
            title,
            subject,
            body,
            recepients: recepients.split(',').map(email => {return {email: email.trim()}}),
            _user: req.user.id,
            dateSent: Date.now(),
        });

        //send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.sendMail();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch(err) {
            res.status(422).send(err);
        }
    });  
}