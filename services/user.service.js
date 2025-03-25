const models = require('../libs/sequelize');

class UserService {
    constructor () {

    }

    async create(data) {
        const newUser = await models.User.create(data);
        return newUser;
    }

    async find() {
        const users = await models.User.findAll();
        return users;
    }

    async findOne(id) {
        const user = await models.User.findAll(id);
        if(!user) {
            //throw new Error('User not found');
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const rta = await user.update(changes);
        return rta;
    }

    async delete(id) {
        const user = await this.findOne(id);
        return { id : user.id, message: 'User deleted' };
    }
}

module.exports = UserService; // exporta la clase de usuario
