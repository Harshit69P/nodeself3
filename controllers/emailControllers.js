const nodemailer = require('nodemailer');

const html = 
`<h1>Hello World</h1>
<p>Isn't NodeMailer Good</p>`;

async function sendEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 465,
        secure: true,
        auth: {
            user: 'guptaharshit1816@gmail.com',
            pass: 'udxq vqpt wbcq vdds'
        }
    });

    const info = await transporter.sendMail({
        from: 'Harshit Gupta <guptaharshit1816@gmail.com',
        to: 'harshitgupta6942@gmail.com',
        subject: 'Prakriti is cutiepie',
        html: html,
    })

    console.log("message sent: " + info.messageId);
}

module.exports = sendEmail;

