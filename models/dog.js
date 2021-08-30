const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
			name: {
				type: String,
				required: true
			},

			desc: {
				type: String,
				required: true
			},

			email: {
				type: String,
				required: false
			},
		}, {timestamps: true}
	)
;

const Dog = mongoose.model('Dogs', dogSchema);
module.exports = Dog;