const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => 
{
    console.log(`Server is listening on port ${PORT}`);
});

//homepage
app.get('/', (request, response) => {
  response.send('<h1>Welcome to the API: Aldrin Quitalig </h1>');
});

const customerRouter=require('./routes/customer');
app.use('/customers', customerRouter);

const orderRouter=require('./routes/customer');
app.use('/orders', orderRouter);

const paymentRouter=require('./routes/customer');
app.use('/payments', paymentRouter);
