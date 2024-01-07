const express = require('express');
const router = express.Router();
const sendEmail = require('../controllers/emailControllers');
 
router.get('/send-email', async (req, res) => {
    try {
        await sendEmail();
        res.send('Email sent successfully');
    } catch (e) {
        console.log(e);
        res.status(500).send('An error occurred while sending the email');
    }
});

module.exports = router;
