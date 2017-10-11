require('dotenv').config();
exports.port = process.env.SERVER_PORT || 3001;
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`;
