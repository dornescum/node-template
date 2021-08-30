const express = require('express');
const router = express.Router();
const Dog = require("../models/dog");

router.get('/', (req, res) => {
	// este important obiectul (spune de unde porneste)
	// res.sendFile('./views/index.ejs', {root: __dirname})
	const dogsList = [
		{title: 'Eva', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sit.\n'},
		{title: 'Doggy', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sit.\n'},
		{title: 'dogPose', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sit.\n'},
	]
	res.render('index', {title: 'Home', dogs: dogsList})
})
router.get('/dogs', (req, res) => {
	Dog.find().sort({createdAt: -1})
		.then((data) => {
			res.render('dogs', {title: "All Dogs", dogs: data})
		})
		.catch(err => console.log(err))
})
router.get('/addDog', (req, res) => {
	res.render('addDog', {title: 'Add Your Dog'});
})
router.post('/dogs', (req, res) => {
	const dog = new Dog(req.body);
	dog.save()
		.then((result) => {
			res.redirect('/dogs')
		})
		.catch(err => console.log(err))
})
router.get('/dogs/:id', (req, res) => {
	const ID = req.params.id;
	// console.log(ID)
	Dog.findById(ID)
		.then((result) => {
			res.render('singleDog', {dog: result, title: 'Individual Dog'})
		})
		.catch(err => console.log(err))
})
router.delete('/dogs/:id', (req, res) => {
	const id = req.params.id;
	Dog.findByIdAndDelete(id)
		.then(result => {
			res.json({redirect: '/dogs'});
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = router;