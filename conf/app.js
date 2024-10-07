const express = require('.express');
const cors = require('cors');
const fincasRoutes = require('../routes/fincasRoutes');

const app = express();
const port = 3306;

app.use(cors());
app.use(express.json());

app.use('/api/fincas', fincasRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});