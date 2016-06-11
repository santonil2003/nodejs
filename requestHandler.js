var exec = require("child_process").exec;


function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}


function start(response){
	console.log("start...");


	exec("ls -lah", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Start handler");
		response.write(stdout);
		response.end();
	});




}


function upload(response){
	console.log("upload....");
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("Upload handler");
	response.end();
}


exports.start = start;
exports.upload = upload;