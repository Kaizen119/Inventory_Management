const UserController = require('../controllers/users.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/login', UserController.login);
    app.delete('/api/logout', UserController.logout);
    app.post('/api/register', UserController.createNewUser);
    app.get('/api/authors/:id', UserController.findOneUser);
    // app.delete('/api/products/:id', ProductController.deleteProduct);
    app.get("/api/users", authenticate, UserController.findAllUsers);
}