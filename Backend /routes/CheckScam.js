const express = require('express');
const router = express.Router();
const { checkURLSafety } = require('../utils/safeBrowsing');
const { predictScam } = require('../utils/scamPredictor');

router.post('/', async (req, res) => {
  const { input } = req.body;
  try {
    const safety = await checkURLSafety(input);
    const prediction = await predictScam(input);

    res.json({
      input,
      scam: prediction.isScam,
      reason: prediction.reason,
      risk: prediction.risk,
      googleSafe: safety.safe
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err });
  }
});

module.exports = router;
