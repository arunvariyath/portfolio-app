var express = require('express');
const fs = require('fs');
const templateImages = []

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
const myPromise = new Promise((resolve, reject) => {
  resolve();
});

/* GET Thumbnail Creater Page. */
router.get('/thumbCreator', function (req, res, next) {


  myPromise
    .then(() => {
      getThumnailImages(res)
    }, () => { console.error("promise failed") });
});

// const myPromise = new Promise((resolve, reject) => {
//   resolve();
// });
/* POST Thumbnail Creater Page. */
router.post('/thumbCreator', function (req, res, next) {
  const es = req.body;

  let singerImg = req.files.singerImg
  
  singerImg.mv('public/images/profile-images/singerImg.jpg', (err, done) => {
    if (!err) {
      let writerImg = req.files.writerImg
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
function getThumnailImages (res) {
  const dir = 'public/images/templateImages'
  fs.readdir(dir, (err, files) => {
    if (!err) {
      files.forEach((file) => {
        templateImages.push({ imageSrc: '/images/templateImages/' + file })
      })

      res.render('admin/thumb-creator', { title: 'Thumbnail creator', other: true, templateImages, admin: true });

    } else { console.error(err); }

  });
}
module.exports = router;
