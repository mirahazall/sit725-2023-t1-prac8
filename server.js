

const express = require('express');
const app = express();
const projectsRoute = require('./routes/projects');

app.use(express.static(__dirname + '/public'));
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Using the projectsRoute for the /api/projects path
app.use('/api/projects', projectsRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('App listening to port: ' + port);
});



