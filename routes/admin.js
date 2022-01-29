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
  let galleryImages = [{
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    imageTitle: 'some image',
    imageDescription: 'some description'
  }, {
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    imageTitle: 'some image',
    imageDescription: 'some description'
  }, {
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    imageTitle: 'some image',
    imageDescription: 'some description'
  }, {
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    imageTitle: 'some image',
    imageDescription: 'some description'
  }]


  res.render('admin/thumb-creator', { title: 'Thumbnail creator', other: false, galleryImages });
});
/* POST Thumbnail Creater Page. */
router.post('/thumbCreator', function (req, res, next) {
  var body = req.body;
  if (body.bgImageName = '' || body.bgImageName == undefined)
    body.bgImageName = 'public/images/thumb-bg.png'
  else
    body.bgImageName = 'public/images/' + body.bgImageName

  createThumbnailImage(body)
  var response = req.body;
  title = 'Created Thumbnail'
  response.other = false

  res.render('admin/thumb-created', response);
});

module.exports = router;
