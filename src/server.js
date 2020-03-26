import Express from 'express';

const app = Express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('HELLO WORLD !!!');
})

app.listen(port, () => console.log(`Listening on port ${port}`));
