import 'dotenv/config';
import http from 'http';
import { handler } from './build/handler.js';

const server = http.createServer((req, res) => {
	handler(req, res, () => {
		res.writeHead(404);
		res.end('Not found');
	});
});

// Phusion Passenger support
if (typeof PhusionPassenger !== 'undefined') {
	PhusionPassenger.configure({ autoInstall: false });
}

const port = process.env.PORT || 'passenger';
server.listen(port, () => {
	console.log(`Server running on ${port}`);
});
