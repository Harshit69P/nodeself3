const client = require('../config/twilio');

async function sendSms() {
    const sms = await client.messages.create({
        body: 'Hello from Prakriti',
        to: '+919996931181',  // Texting this number
        from: '+14702382972' // From Twilio number
    });

    console.log(sms.sid);
}

module.exports =  sendSms ;
