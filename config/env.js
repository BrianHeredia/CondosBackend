const env = {
  database: 'condos',
  username: 'root',
  password: null,
  host: 'https://condos-backend.herokuapp.com/',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;
