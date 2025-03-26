const sequelize = require('../libs/sequelize');

class UserService {
    constructor () {
        this.model = sequelize.models.User;
        console.log('Modelo User cargado:', this.model !== undefined);
    }

    async create(data) {
        const newUser = await this.model.create(data);
        return newUser;
    }

    async find() {
        try {
            const users = await this.model.findAll();
            return users;
        } catch (error) {
            console.error(error); // 👈 imprime el error real en la consola
            res.status(500).json({ message: 'Error en la consulta Find()', error: error.message });
        }
    }

    async findOne(id) {
        const user = await this.model.findByPk(id);
        if(!user) {
            throw new Error('User not found');
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
