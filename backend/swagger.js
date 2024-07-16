const swaggerAutogen = (require('swagger-autogen'))();
const { config } = require('dotenv');

config();

const documentation = {};
documentation.info = {};
documentation.info.title = 'My API';
documentation.info.description = 'Description';
documentation.host = ['localhost', process.env.PORT, 'api'].reduce((acc, val) => acc.replace('api', '') + val + (val === 'api' ? '' : ':'), '');
documentation.schemes = [];
documentation.schemes.push('http');

const outputFile = './swagger.json';
const endpointsFiles = './routes/Api.js';

swaggerAutogen(outputFile, [endpointsFiles], documentation);