const express=require('express');
const router= express.Router();

// Payments
router.get('/', (request, response) => 
{
    response.status(200).json({ message: 'GET all ' });
});

router.post('/', (request, response) => 
{
    response.status(200).json({ message: `CREATE new ` });
});

router.get('/:id', (request, response) => 
{
    response.status(200).json({ message: `GET  with id ${request.params.id}` });
});

router.put('/:id', (request, response) => 
{
    response.status(200).json({ message: `UPDATE  with id ${request.params.id}` });
});

router.delete('/:id', (request, response) => 
{
    response.status(200).json({ message: `DELETE  with id ${request.params.id}` });
});

module.exports=router;