const express = require('express');
const router = express.Router();

// Return an array of events
router.get('/', (req, res) => {
  res.json([
    { title: "Hackathon 2026", description: "Join us for coding fun!" },
    { title: "NSS Blood Donation Camp", description: "Donate blood, save lives." },
    { title: "Sports Meet", description: "Annual inter-college sports competition." }
  ]);
});

module.exports = router;
