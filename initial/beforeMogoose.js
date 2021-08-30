// const port = 3000;
// app.listen(port);
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
app.get('/addDog', (req, res) => {
	res.render('addDog', {title: 'Add Your Dog'});
})
