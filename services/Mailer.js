const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

//sendgrid mailer keys
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, recepients}, content) {
        super();

        this.sgApi = sendgrid(keys.emailKey);
        this.form_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recepients = this.formatAddresses(recepients);
    
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recepients) {
        return recepients.map(({email}) => {
            return new helper.Email(email);
        }
    )};

    addClickTracking() {
        const trackSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();

        this.recepients.forEach(recepient => {
            personalize.addTo(recepient);
        });
        this.addPersonalization(personalize);
    }


    async sendMail() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = this.sgApi.API(request);
        return response;
    }
}

// new Mailer(...);

module.exports = Mailer;