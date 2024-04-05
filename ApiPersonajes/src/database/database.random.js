import  Sequelize from 'sequelize';

const randomDB = new Sequelize('disney', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})

export default randomDB;