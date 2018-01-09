const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('upload');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
