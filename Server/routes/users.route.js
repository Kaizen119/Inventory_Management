const UserController = require('../controllers/users.controller');

module.exports = app => {
    // app.get('/api/products', ProductController.findAllProducts);
    // app.get('/api/products/:id', ProductController.findOneProduct);
    app.post('/api/register', UserController.createNewUser);
    // app.put('/api/products/update/:id', ProductController.updateProduct);
    // app.delete('/api/products/:id', ProductController.deleteProduct);
}