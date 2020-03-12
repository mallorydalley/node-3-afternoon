require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    app = express(),
    ctrl = require('./products_controller')

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl:{rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB connected')
}).catch(err => console.log(err))

app.get(`/api/products`, ctrl.getAll)
app.get(`/api/products:id`, ctrl.getOne)
app.put(`/api/products/:id`, ctrl.update)
app.post(`/api/products`, ctrl.create)
app.delete(`/api/products/:id`, ctrl.delete)


const port = SERVER_PORT
app.listen(port, () => console.log(`Server running on port ${port}`))