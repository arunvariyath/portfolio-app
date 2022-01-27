var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', other: true })
});
/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home', other: true })
});

/* GET Gallery page. */
router.get('/gallery', function (req, res, next) {
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
  res.render('gallery', { title: 'Gallery', other: true,galleryImages })
});

/* GET message page. */
router.get('/message', function (req, res, next) {
  res.render('message', { title: 'Contact Me', other: true })
});
/* GET Contact page. */
router.get('/view-messages', function (req, res, next) {
  res.render('view-messages', { title: 'Contact Me', other: true })
});


/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', other: true })
});

var poems = [{
  poemSrc: 'h00fHCy1Uio',
  poemTitle: 'Title Sample',
  poemLyrics: 'fsahfsahfgssakjrrfhljsafhljfsahfsahfgssa kjrrfhljsafhljfsahfsahfgssakjrrfhljsafhljfsahfsahfgssakjrrfhlj safhljfsahfsahfgssakjrrfhljsafhljfsahfsahfg ssakjrrfhljsafhljfsahfsahfgssakjrrfhljsafhljfsahfsahfgssakjrrfhljsafhljfsahfsahfgssakjrrfhljsafhlj'

}, {
  poemSrc: '65SCxJV28Kk', poemTitle: 'Title Sample'
}, {
  poemSrc: 'Z9Nj6D3rEq8'
}, {
  poemSrc: '-TBb9FWYLmw'
}, {
  poemSrc: 'x4JuuqBGm6Y'
}, {
  poemSrc: '65SCxJV28Kk'
}, {
  poemSrc: 'Z9Nj6D3rEq8'
}, {
  poemSrc: '-TBb9FWYLmw'
}, {
  poemSrc: 'x4JuuqBGm6Y'
}]
/* GET about page. */
router.get('/poems', function (req, res, next) {
  res.render('poems', { title: 'Poems', other: true, poems })
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
