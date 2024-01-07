const express = require('express');
const router = express.Router();
const sendSms= require('../controllers/smsController');

router.get('/send-sms', async (req, res) => {
  try {
      await sendSms();
      res.send('SMS sent successfully');
  } catch (e) {
      console.log(e);
      res.status(500).send('An error occurred while sending the SMS');
  }
});

module.exports = router;
