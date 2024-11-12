const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => 
{
    console.log(`Server is listening on port ${PORT}`);
});

const customerRouter=require('./routes/customer');
app.use('/customers', customerRouter);

const orderRouter=require('./routes/customer');
app.use('/orders', orderRouter);

const paymentRouter=require('./routes/customer');
app.use('/payments', paymentRouter);