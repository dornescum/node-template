// mogoose routes in exercitiu
const Dog = require("./models/dog");
app.get('/add-dog', (req, res) => {
	const createDog = new Dog({
		name: 'Biscuit 2',
		desc: 'un catel',
		email: 'test@test.com'
	});
	createDog.save().then(result => res.send(result)).catch(err => console.log(err))
})
app.get('/all-dogs', (req, res) => {
	Dog.find().then(result => res.send(result)).catch(err => {
		console.log(err)
	})
})
app.get('single-dog', (req, res) => {
	Dog.findById('_id').then((result) => res.send(result)).catch(err => {
		console.log(err)
	})
})
