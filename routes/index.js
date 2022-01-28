var express = require('express');
var router = express.Router();
const fs = require('fs')
const { registerFont, createCanvas, loadImage } = require('canvas')
var Canvas = require("canvas");
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
  res.render('gallery', { title: 'Gallery', other: true, galleryImages })
});

function createThumbImage(imageName) {
  // Define the canvas
  const width = 600 // width of the image
  const height = 474 // height of the image
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  // We need to register our font file to be used in canvas
  registerFont('public/fonts/Sign-Painter-Regular.ttf', { family: 'signpainter' })

  // Define the font style
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#FFFFFF'
  context.font = "80px 'signpainter' bold";
  global.Image = Canvas.Image;
  // Load and draw the background image first
  loadImage('public/images/thumb-bg.png').then(image => {

    var playBtn = new Image(300,200);
    playBtn.src = 'public/images/play-button.png';     // starts to load the image
    // Draw the background
    context.drawImage(image, 0, 0, 600, 474)
    context.drawImage(playBtn, 100, 100, 300, 200);
    // Draw the text
    context.fillText(imageName, 300, 150)

    // Convert the Canvas to a buffer
    const buffer = canvas.toBuffer('image/png')
    // save image
    fs.writeFileSync('public/images/thumbnails/' + imageName + '.png', buffer)
    // Set and send the response as a PNG
    // res.set({ 'Content-Type': 'image/png' });
    // res.send(buffer)
  })
}


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
  poems.forEach(function (x, index) {
    if (x.poemTitle == undefined)
      x.poemTitle = 'Sample Title' + index
    x.poemImgSrc = '/images/thumbnails/' + x.poemTitle + '.png'
    createThumbImage(x.poemTitle)
  });

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
