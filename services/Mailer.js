const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

//sedgrid mailer keys
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, recepients}, content) {
        super();

        this.form_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recepients = this.formatAddresses(recepients);
    
        this.addContent(this.body);
        this.addClickTracking()
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
}

// new Mailer(...);

module.exports = Mailer;