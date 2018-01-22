//DEPENDENCIES
const express    = require('express');
const session    = require('express-session');
const morgan     = require('morgan');
const app        = express();
require('pretty-error').start();

//CONFIG
const PORT       = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static( 'public' ));
app.use(morgan('dev'));

//ROUTES
// app.get('/:token', (req, res) => res.redirect('/'))
// app.get('/:token/:token', (req, res) => res.redirect('/'))

//LISTENER
app.listen(PORT, () => {
   console.log('Xchem Express OK: ' + PORT);
});
