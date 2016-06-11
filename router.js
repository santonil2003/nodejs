

function route(pathname, handle, response){
	console.log(" route to :"+pathname);

	if(typeof handle[pathname]==='function'){
		handle[pathname](response);
	} else {
		console.log("handler not found for "+pathname);
		
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.write("Handler not found");
		response.end();
	}
}



exports.route = route;