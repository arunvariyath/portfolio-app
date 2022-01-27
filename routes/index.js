var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home',other: true})
});
/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home',other: true})
});

/* GET Gallery page. */
router.get('/gallery', function (req, res, next) {
  res.render('gallery', { title: 'Gallery',other: true})
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me',other: true})
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me',other: true})
});



/* GET about page. */
router.get('/poems', function (req, res, next) {
  res.render('poems', { title: 'Poems',other: true})
});

var popup = {
  title: 'Thank you',
  body: 'Thank you for contacting me, I will reply you soon '
}
/* Contact me submitted */
router.get('/contactMe', function (req, res, next) {
  res.render('pop-up', { title: 'Contact me', popup });
});


module.exports = router;
