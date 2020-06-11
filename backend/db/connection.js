const mongoose = require('mongoose');

// mongoose - mongodb
mongoose.Promise = global.Promise;

const db = mongoose.connect(
	process.env.MONGODB_URL,
	{ useNewUrlParser: true },
	err => {
		if (err) throw err;
		console.log(`Connection to database was successful.`);
	}).catch(err => {
		console.log('Database error: ', err);
	});

module.exports = db;
