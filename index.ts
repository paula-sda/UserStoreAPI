import * as express from "express";
import userRoutes from "./endpoints/users";

const app = express();
const port = parseInt(process.env.PORT) || 8080;

app.use(express.json());

//Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
