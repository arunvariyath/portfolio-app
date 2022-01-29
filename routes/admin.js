var express = require('express');
var router = express.Router();
const { createThumbnailImage } = require('../helpers/thumb-creator');
/* Get Admin  Home page */
router.get('/', function (req, res, next) {
  res.render('admin/admin-home', { title: 'Admin- Home', other: true });
});
/* GET Login Page . */
router.get('/login', function (req, res, next) {
  res.render('admin/login', { title: 'Login', other: false });
});

/* GET Thumbnail Creater Page. */
router.get('/thumbCreator', function (req, res, next) {
  res.render('admin/thumb-creator', { title: 'Thumbnail creator', other: false });
});
/* POST Thumbnail Creater Page. */
router.post('/thumbCreator', function (req, res, next) {
  createThumbnailImage(req.body)
  var response = req.body;
  // console.log(response)
  title = 'Created Thumbnail'
  response.other = false
  res.render('admin/thumb-created', response);
});



module.exports = router;
