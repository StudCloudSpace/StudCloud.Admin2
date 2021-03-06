


module.exports = function(app){
	app.all('*',function(req, res, next){
		console.log(req.session);
		next();
	});
	app.get("/", require('./handlers/defaultHandler').pre, require('./handlers/defaultHandler').get);
	app.post("/auth/signIn", require('./handlers/signIn').post);
	app.post("/auth/logout", require("./handlers/logout").post);

	app.get("/um/getUsersBy", require('./handlers/getUsersBy').get);

	require('./widgets')(app);
}
