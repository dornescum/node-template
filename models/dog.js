const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
			name: {
				type: String,
				required: true
			},

			desc: {
				type: String,
				required: false
			},

			email: {
				type: String,
				required: true
			},
			age: {
				type: Number,
				required: true
			},
			sex: {
				type: String,
				required: true
			},
			pedigree: {
				type: String,
				required: true
			},


		}, {timestamps: true}
	)
;

const Dog = mongoose.model('Dogs', dogSchema);
module.exports = Dog;