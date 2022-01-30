var express = require('express');
const fs = require('fs');

var router = express.Router();
const { createThumbnailImage } = require('../helpers/thumb-creator-helper');
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
  const dir = 'public/images/templateImages';
  let templateImages = []
  fs.readdir(dir, (err, files) => {

    // for (var file in files) {
    //   templateImages.push({ imageSrc: file })
    // }
    files.forEach((file) => {
      console.log(file);
      templateImages.push({ imageSrc: '/images/templateImages/' + file })
    })
    //templateImages.

    console.log(templateImages);

    //imageSrc
  });




  res.render('admin/thumb-creator', { title: 'Thumbnail creator', other: false, templateImages });
});
/* POST Thumbnail Creater Page. */
router.post('/thumbCreator', function (req, res, next) {
  const es = req.body;

  createThumbnailImage(es)
  var response = req.body;
  title = 'Created Thumbnail'
  response.other = false

  res.render('admin/show-new-thumbnail', response);
});

module.exports = router;
