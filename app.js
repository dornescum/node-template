const express = require('express');
const app = express();

// register view engine
// ii spun node js ce anume folosesc=> ejs !!
app.set('view engine', 'ejs');
// DC folosesc alt aranjament al folderuleui : unde si ce!
// app.set('views', 'myviews')

const port = 3000;

app.listen(port);
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
	// pt html sentFile
	// res.sendFile('./views/dogs.ejs', {root: __dirname})
	res.render('dogs', {title: 'All Dogs'});
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