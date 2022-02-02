// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const packageJson = require('./package.json');

// const PORT = process.env.PORT || 8080;
// // if (process.env.NODE_ENV !== 'PRODUCTION') {
// //     require('dotenv').config()
// // }

// const HTTP_METHOD_GET = 'GET';

// server.use(middlewares);
// server.use((request, response, next) => {
//     if (request.method.toUpperCase() !== HTTP_METHOD_GET) {
//         const token = request.headers['x-api-key'] || '';
//         if (!token) {
//             return response.status('401').json({ error: 'You are not allowed to access this resource' });
//         }

//         const key = process.env.API_KEY;
//         if (token === key) {
//             return next();
//         } else {
//             return response.status('401').json({ error: 'Invalid API Key provided - are not allowed to access this resource' });
//         }
//     }
//     next();
// });

// server.use(router);
// server.listen(PORT, () => {
//     console.log(
//         '\n__________________________________\n\n'
//         + ' JSON Server is running!\n\n'
//         + ' Heroku App:\n'
//         + `\u001b[35m https://noroff-assignment-4.herokuapp.com/ \u001b[0m\n\n`
//         + ' Localhost:\n'
//         + `\u001b[34m http://localhost:${PORT} \u001b[0m\n\n`
//         + ' Resources:\n'
//         + ` API:   \u001b[33m http://localhost:${PORT}/ \u001b[0m\n`
//         + ` Trainers: \u001b[33m http://localhost:${PORT}/trainers \u001b[0m`
//         + '\n__________________________________\n'
//     );
// });
const express = require('express');
const app = express();
const packageJson = require('./package.json');

// Middleware
app.use(requireHTTPS);
app.use(express.static('./dist/' + packageJson.name));

// Redirect app request to index.html
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/' + packageJson.name });
});

// app.get('/api/trainers/', (req, res) => {
//     res.sendFile('db.json', { root: './' });
// });

// Start server
app.listen(process.env.PORT || 8080, () => {
    console.log(
        '\n__________________________________\n\n'
        + ' JSON Server is running!\n\n'
        + ' Heroku App:\n'
        + `\u001b[35m https://noroff-assignment-4.herokuapp.com/ \u001b[0m\n\n`
        + ' Localhost:\n'
        + `\u001b[34m http://localhost:${PORT} \u001b[0m\n\n`
        + ' Resources:\n'
        + ` API:   \u001b[33m http://localhost:${PORT}/ \u001b[0m\n`
        + ` Trainers: \u001b[33m http://localhost:${PORT}/trainers \u001b[0m`
        + '\n__________________________________\n'
    );
});

/**
 * @author: Klement Omeri
 * Special thanks to Klement for providing the function to redirect traffic from http to https
 */
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
