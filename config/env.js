const env = {
  database: 'heroku_35742a7059',
  username: 'b8bb25885136e8@us-cdbr-iron-east-02.cleardb.net',
  password: '5fa26cef',
  host: 'us-cdbr-iron-east-02.cleardb.net',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;
