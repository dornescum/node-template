const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Dog = require('./models/dog');

const dbURL = 'mongodb+srv://ceapa20:ceapa_2000@thenetninja.ftnae.mongodb.net/dogsLists?retryWrites=true&w=majority';

mongoose.connect(dbURL)
	.then(result => app.listen(3000))
	// .then((result) => console.log('connected to db'))
	.catch(err => console.log(err));


// register view engine
// ii spun node js ce anume folosesc=> ejs !!
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
// f important pt req body
app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));


//listen for request || este importanta ordinea in care sunt aranjate
app.get('/', (req, res) => {
	// este important obiectul (spune de unde porneste)
	// res.sendFile('./views/index.ejs', {root: __dirname})
	const dogsList = [
		{title: 'Eva', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sit.\n'},
		{title: 'Doggy', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sit.\n'},
		{title: 'dogPose', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sit.\n'},
	]
	res.render('index', {title: 'Home', dogs: dogsList})
})
app.get('/dogs', (req, res) => {
	Dog.find().sort({createdAt: -1})
		.then((data) => {
			res.render('dogs', {title: "All Dogs", dogs: data})
		})
		.catch(err => console.log(err))
})
app.get('/addDog', (req, res) => {
	res.render('addDog', {title: 'Add Your Dog'});
})
app.post('/dogs', (req, res) => {
	const dog = new Dog(req.body);
	dog.save()
		.then((result) => {
			res.redirect('/dogs')
		})
		.catch(err => console.log(err))

})


// redirect
app.get('/dogs-new', (req, res) => {
	res.redirect('/dogs');
})
// 404 && si trebuie pus ultimul dupa ce trece prin toate
app.use((req, res) => {
	// res.sendFile('./views/404.ejs', {root: __dirname})
	res.status(404).render('404', {title: 'Error'});
})


// DC folosesc alt aranjament al folderuleui : unde si ce!
// app.set('views', 'myviews')