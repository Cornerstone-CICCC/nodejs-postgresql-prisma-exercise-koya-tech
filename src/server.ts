// Set up your serverimport express from 'express';
import express from 'express';
import productRoutes from './routes/ product.routes';

const app = express();

app.use(express.json());

app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});