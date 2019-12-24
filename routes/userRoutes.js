const router = require('express').Router();

router.get('/', (req, res) => {
  return res.send('GET HTTP method on users resource');
});

router.get('/:userId', (req, res) => {
  return res.send(`GET HTTP method on users/${req.params.userId} resource`);
});

router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
router.put('/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on users/${req.params.userId} resource`,
  );
});
router.delete('/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on users/${req.params.userId} resource`,
  );
});

module.exports = router;