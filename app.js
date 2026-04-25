const express = require('express');
const app = express();

app.use(express.json()); 

const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api', clienteRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});