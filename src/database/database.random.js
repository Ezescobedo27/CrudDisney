import Sequelize from 'sequelize';
import 'dotenv/config';

const randomDB = new Sequelize(
	process.env.DB_DB,
	process.env.DB_CONNECTION,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_LANGUAGE,
	}
);

export default randomDB;
