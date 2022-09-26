import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['dresses', 'bags', 'shoes', 'suits', 'pants'];
  res.send(categories);
});

export default handler;
