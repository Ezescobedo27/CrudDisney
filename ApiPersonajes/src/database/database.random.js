import  Sequelize from 'sequelize';

const randomDB = new Sequelize('disney', 'postgres', 'eduar2006', {
    host: 'localhost',
    dialect: 'postgres'
})

export default randomDB;