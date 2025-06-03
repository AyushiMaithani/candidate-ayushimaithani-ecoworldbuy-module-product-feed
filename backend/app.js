const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser); 

server.post('/api/subscribe-newsletter', (req, res) => {
  const { name, email } = req.body;

  if (name && email) {
    const subscribers = router.db.get('subscribers');
    subscribers.push({ id: Date.now(), name, email }).write();

    return res.status(200).json({ success: true, message: 'Subscribed successfully!' });
  } else {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }
});

server.post('/api/claim-sample', (req, res) => {
  const { name, email, address, product } = req.body;

  if (name && email && address && product) {
    const sampleRequests = router.db.get('sample-requests');
    sampleRequests.push({ id: Date.now(), name, email, address, product }).write();

    return res.status(200).json({ success: true, message: 'Your sample request is received!' });
  } else {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }
});

server.use('/api', router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
