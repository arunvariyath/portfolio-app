var express = require('express');
const fs = require('fs');


var router = express.Router();
const { createThumbnailImage } = require('../helpers/thumb-creator-helper');
/* Get Admin  Home page */
router.get('/', function (req, res, next) {
  res.render('admin/admin-home', { title: 'Admin- Home', other: true, admin: true });
});
/* Get Admin  Home page */
router.get('/home', function (req, res, next) {
  res.render('admin/admin-home', { title: 'Admin- Home', other: true, admin: true });
});
/* GET Login Page .    */
router.get('/login', function (req, res, next) {
  res.render('admin/login', { title: 'Login', other: false, admin: true });
});

/* GET Thumbnail Creater Page. */
router.get('/thumbCreator', function (req, res, next) {

  //imageSrc
  const templateImages = getTemplateImages();
  // console.log(templateImages);
  res.render('admin/thumb-creator', { title: 'Thumbnail creator', other: true, templateImages, admin: true });
});
/* POST Thumbnail Creater Page. */
router.post('/thumbCreator', function (req, res, next) {
  const es = req.body;

  let singerImg = req.files.singerImg
  singerImg.mv('public/images/profile-images/singerImg.jpg', (err, done) => {
    if (!err) {
      let writerImg = req.files.singerImg
      writerImg.mv('public/images/profile-images/writerImg.jpg', (err, done) => {
        if (!err) {
          createThumbnailImage(es)
          var response = req.body;
          response.title = 'Created Thumbnail'
          response.other = false
          response.admin = true
          res.render('admin/show-new-thumbnail', response);
        }
        else
          console.error('Writer Image problem' + err);
      })
    }
    else
      console.error('Singer Image problem' + err);
  })


});



function getTemplateImages () {
  const dir = 'public/images/templateImages';
  let templateImages = []
  fs.readdir(dir, (err, files) => {


    files.forEach((file) => {
      templateImages.push({ imageSrc: '/images/templateImages/' + file })
    })
  });
  return templateImages;
};

module.exports = router;
