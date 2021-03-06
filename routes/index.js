var express = require('express');
const jsdom = require('jsdom')
var router = express.Router();
var connection = require('../config/connection');
var galleryImageHelper = require('../helpers/gallery-image-helper');// 
// const fs = require('fs')
// const { registerFont, createCanvas, loadImage } = require('canvas')


const dom = new jsdom.JSDOM("")
const $ = require('jquery')(dom.window)

/* GET home page. */
router.get('/', function (req, res, next) {
  // connection.get().collection('gallery-images').insertOne({imgSrc:"test.png"}).then((data)=>console.log("inserted successfully"))
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




/* GET message page. */
router.get('/message', function (req, res, next) {
  res.render('message', { title: 'Message Me', other: true })
});

// router.get('/contact', function (req, res, next) {
//   res.render('contact', { title: 'Contact Me', other: true })
// });
/* GET Contact page. */
router.get('/view-messages', function (req, res, next) {
  res.render('view-messages', { title: 'Contact Me', other: true })
});


/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', other: true })
});
/* GET about page. */
router.get('/family-tree', function (req, res, next) {
  res.render('family-tree', { title: 'My Family', other: true})
  // galleryImageHelper.getAllMembers().then((data)=>{
  //   // console.log(JSON.parse(data));
  //   // let nods=JSON.parse(data) 
  //   res.render('family-tree', { title: 'My Family', other: true,members: nods})
  // })
 
});

var poems = [{ poemSrc: 'pbVFIFVZ68g' }, { poemSrc: '2a35ZppG3pw' }, { poemSrc: 'h00fHCy1Uio' }, { poemSrc: '65SCxJV28Kk' }, { poemSrc: 'Z9Nj6D3rEq8' }, { poemSrc: '-TBb9FWYLmw' }, { poemSrc: 'x4JuuqBGm6Y' }, { poemSrc: 'bkJhYbvOxcU' }, { poemSrc: 'UjOh784AzZU' }, { poemSrc: 'wmxLbFKFMQ8' }, { poemSrc: 'qx5BGYiE7NY' }, { poemSrc: 'YnkxEzSIGGE' }, { poemSrc: '8ZGZDb_3QQU' }, { poemSrc: 'x3BezK9G2jc' }, { poemSrc: '9v6HpxG4tOk' }, { poemSrc: 'NTbBi-ewKJo' }, { poemSrc: 'yrUJ5Vz2t-o' }, { poemSrc: 'INctQS03DeQ' }, { poemSrc: 'G1ipWTI8000' }, { poemSrc: 'HzjNKaI174U' }, { poemSrc: 'XP0UGCE0J0M' }, { poemSrc: 'tiEZKNh_tt8' }, { poemSrc: 'JIXKjPI76NY' }, { poemSrc: 'jjV9DsAGT2M' }, { poemSrc: 'ca8aiNSOpJo' }, { poemSrc: 'mAbhpwn3bo4' }, { poemSrc: 'mddVbxOTbqw' }, { poemSrc: 'D5x3Ss_pqmU' }, { poemSrc: 'SD_QwacQddc' }, { poemSrc: 'FtNp7RJyi9k' }, { poemSrc: 'GVVdTPb6Arw' }, { poemSrc: 'QCiZRoW_y6s' }, { poemSrc: 'ahvJopZk1Z0' }, { poemSrc: 'cJSas4ces9c' }, { poemSrc: '-jWbMxbNlhc' }, { poemSrc: '1zmJC2Vp7ak' }, { poemSrc: 'asvR-D6Wnrc' }, { poemSrc: 'PFGGJWJYB7Y' }, { poemSrc: 'yfZnzfJOXjI' }, { poemSrc: 'O82VMzIIzOQ' }, { poemSrc: '1G2xpGI-kEA' }, { poemSrc: 'r7H0LaFapQs' }, { poemSrc: 'wBdyG5L123o' }, { poemSrc: 'cM9SCzx_O_M' }, { poemSrc: '2Qh6uwCm75s' }, { poemSrc: 'W9OAzjeH0MQ' }, { poemSrc: '5mwexCtWiCw' }, { poemSrc: 'pQuPTJaPPuA' }, { poemSrc: 'esh7sigurxw' }, { poemSrc: '6_771ZrAEV8' }, { poemSrc: 'fCVk4QYpsds' }, { poemSrc: 'T65-te0tjZM' }, { poemSrc: 'jSx4qJ6507E' }, { poemSrc: '3YIgoa2Lwcs' }, { poemSrc: 'wrnpimlOwsw' }, { poemSrc: 'fRV3C1QM54U' }, { poemSrc: 'bW8NIixbCRY' }, { poemSrc: 'WpKdmdTI3TM' }, { poemSrc: 'k6KH0E-sddM' }, { poemSrc: '2C_NGw8dX1Q' }, { poemSrc: 'J9QXQ0QkHQc' }, { poemSrc: 'a2hi9Q9QW3Y' }, { poemSrc: '94WlpzGizWY' }, { poemSrc: 'QpI2RCx3z5Q' }, { poemSrc: 'EZfNOjoFzrU' }, { poemSrc: 'UOcxp9c4Aok' }, { poemSrc: 'CDEBs8zZA0Y' }, { poemSrc: 'rbyPr7uJjEs' }, { poemSrc: 'xH_71ZF5xNA' }, { poemSrc: '3Gl1emyeCPY' }, { poemSrc: 'U8WNkxA8PvY' }, { poemSrc: 'hoF85cHRPQM' }, { poemSrc: '2vsUnCxh8Ng' }, { poemSrc: '2sB2Js8kxeY' }, { poemSrc: 'VrRjbSUCXt8' }, { poemSrc: 'ubsf-LH2EAM' }, { poemSrc: 'BW-mMBR1k2U' }, { poemSrc: 'LGv0uwldUVI' }, { poemSrc: 'v5aBch93VCk' }, { poemSrc: 'uPaaAAiCjp8' }, { poemSrc: 'gqwHTiFS80I' }, { poemSrc: 'uq_MMu_UGbg' }, { poemSrc: 'qOBGA8umGSY' }, { poemSrc: 'FoAIYUOJlhs' }, { poemSrc: 'lD902ktbVxY' }, { poemSrc: 'DLerlUmVsrA' }, { poemSrc: 'rFZ-DtztGKA' }, { poemSrc: 'ykDFdaLrH_o' }, { poemSrc: 'VPeMjG0p6Zs' }, { poemSrc: 'w6l8dD7rfuI' }, { poemSrc: '0iMoIZBX3Xc' }, { poemSrc: 'ebliFv0Ju3E' }, { poemSrc: 'STMtrtZyJ7c' }, { poemSrc: '_yIgKSOCaUk' }, { poemSrc: '_FWr2gXTJ_Y' }, { poemSrc: 'fGPjvdgrATg' }, { poemSrc: 'NH3F_6sQTzE' }, { poemSrc: 'nax_o6ZoYW4' }, { poemSrc: 'b3gcLqDJFAk' }, { poemSrc: 'YVNXZXtMwa4' }, { poemSrc: 'FESRBqqm2p8' }, { poemSrc: 'CrbTn4yV6E4' }, { poemSrc: 'YCcjIBONERo' }, { poemSrc: 'NSCbFtNNZTQ' }, { poemSrc: 'mz-joxbzTQs' }, { poemSrc: 'VRffPZQJUeo' }, { poemSrc: 'd-xtEvhbC1w' }, { poemSrc: 'j30sBZTVfGY' }, { poemSrc: '7EGe040or6k' }, { poemSrc: 'WKhKPr8rdlY' }, { poemSrc: 'gr3g2T2vrQA' }, { poemSrc: 'IEXF4cvn2gc' }, { poemSrc: 'yDnc7FO2L4s' }, { poemSrc: 'qlSo4aGEM7I' }, { poemSrc: 'S9GMxT9RuQ8' }, { poemSrc: 'ooltE7NHdkA' }, { poemSrc: '9qKxFukowR8' }, { poemSrc: 'ZdAbY8io1GY' }, { poemSrc: 'VM63XSsVgkw' }, { poemSrc: 'vktz30Xji7g' }, { poemSrc: 'x_wO-MJJ69w' }, { poemSrc: 'sd7z8-tJY6E' }, { poemSrc: 'kq0oiwoFZ9s' }, { poemSrc: 'RSbg1oNX3Pw' }, { poemSrc: 'cCRtKoKWjZw' }, { poemSrc: 'kGU2yq-t4Bk' }, { poemSrc: 'RUPjYHxdNRc' }, { poemSrc: 'ok_lm9DRu30' }, { poemSrc: 'VE5IEeLgPkk' }, { poemSrc: 'SXJWIY1CJQo' }, { poemSrc: 'JvAQPR5GLWI' }, { poemSrc: 'czNitbPssHg' }, { poemSrc: '2lHdC3zlQqQ' }, { poemSrc: 'sdOO2EHUTCI' }, { poemSrc: 'M0J4eTLiw20' }, { poemSrc: 'D_HEtax5iZk' }, { poemSrc: 'a-YSoZhqtHc' }, { poemSrc: 'PyebH3QS9UQ' }, { poemSrc: 'aU0WT5M--pM' }, { poemSrc: 'eXG9KZhsyNw' }, { poemSrc: '-RHGTy35kGg' }, { poemSrc: 'sNrqDxcaMtk' }, { poemSrc: 'jQ3qevx8Jj8' }, { poemSrc: 'yCn6veUmurI' }, { poemSrc: 'nUaUrNtDMtQ' }, { poemSrc: 'GflmFDEbGAA' }, { poemSrc: '48y_RT8P-eU' }, { poemSrc: 'VbZb269f5AM' }, { poemSrc: 'GZNQwICJ93I' }, { poemSrc: 'Kktd4q1yuN0' }, { poemSrc: 'faEx5mwC3NI' }, { poemSrc: 'wcumsIe973g' }, { poemSrc: 'bQRHW6saYkM' }, { poemSrc: '4udK83rnqRE' }, { poemSrc: 'qD0pIV15Ey8' }, { poemSrc: '1PmMW2Ds2X0' }, { poemSrc: '-ZN618-nvuE' }, { poemSrc: 'OnGByPwSHiU' }, { poemSrc: 'BDoTqC_2YvE' }, { poemSrc: '_BIQV_5PtGI' }, { poemSrc: 'VrWy0qwB6uM' }, { poemSrc: 'GE9HaTi9H8c' }, { poemSrc: 'rXccWt2VeFI' }, { poemSrc: 'SuCcD8p-pvg' }, { poemSrc: 'jusbDd-R-MM' }, { poemSrc: 'kZsdWuX5eBo' }, { poemSrc: 'EeQMhFgEirE' }, { poemSrc: 'fdTkpo_ufyA' }, { poemSrc: 'iabxVpaZJFA' }, { poemSrc: 'vMg_p6t2qPo' }, { poemSrc: 'MBzGDEB8g-c' }, { poemSrc: 'ssgsglw6LWI' }, { poemSrc: 'sAeZfzJ6r1M' }, { poemSrc: 'wAZTpSWloPc' }, { poemSrc: 'lS9x2dr1KP4' }, { poemSrc: 'KF0tKeWcxRc' }, { poemSrc: 'TvxF7i_zmeI' }, { poemSrc: 'aS7c-biHwik' }, { poemSrc: 'fKCVirQRaDY' }, { poemSrc: 'yTDjP3ZFl7k' }, { poemSrc: 'VePZWGu0qbk' }, { poemSrc: 'BgiP4Ud6nSc' }, { poemSrc: 'l1XcP6oRML0' }, { poemSrc: 'qYesCC5bkZI' }, { poemSrc: 'Q0y7TTmX12Y' }, { poemSrc: '_pOZeRWVdW0' }, { poemSrc: 'HDie_RDkokg' }, { poemSrc: 'asLFkfODH0w' }, { poemSrc: 'PHoCuJ0SjPU' }, { poemSrc: 'yHHAWi_RwtM' }, { poemSrc: 'hLLx_l87mYI' }, { poemSrc: 'u_sNEja3SKQ' }, { poemSrc: '26_c8GdxaOQ' }, { poemSrc: 'E-Hq7d4ayag' }, { poemSrc: 'oQ6x4UBRzqg' }, { poemSrc: '2L_0gIKD7oQ' }, { poemSrc: 'Knx2R8oiwd0' }, { poemSrc: 'ZqgmjN4-ifc' }, { poemSrc: 'onUmwWCWocM' }, { poemSrc: 'NDQwvZyMKJI' }, { poemSrc: 'qbUfVrYTLQQ' }, { poemSrc: 'n4D0jfM0VjM' }, { poemSrc: 'F1cPVJtFl-8' }, { poemSrc: '-3tIzCBb4KQ' }, { poemSrc: 'WqY_3oNceb8' }, { poemSrc: 'G5VNzQaJ4dQ' }, { poemSrc: 'EtWQUhQd9LY' }, { poemSrc: '_J6HHoF64lc' }, { poemSrc: 'b7ibwLwkRas' }, { poemSrc: 'HEOZXO-lqk4' }, { poemSrc: 'uR1RtN5m7sM' }, { poemSrc: 'z0U7TKqpqHc' }, { poemSrc: 'm2sQMBtQXc8' }, { poemSrc: 'tvlQ0DkOEp8' }, { poemSrc: 'F05CBFJo90M' }, { poemSrc: 'BcpoPWXXvV0' }, { poemSrc: '5zqd6s-UNwE' }, { poemSrc: 'j-KCaMNi3D8' }, { poemSrc: 'xamRNtkPxM4' }, { poemSrc: '7EZipasG_dA' }, { poemSrc: '-oE_vIzSSmo' }, { poemSrc: '0rMcQpPx2WA' }, { poemSrc: '8GaqTvPjQJA' }, { poemSrc: 'xelOGRflPjk' }, { poemSrc: 'JYBsBXREdTI' }, { poemSrc: 'thdpFgrQQ0w' }, { poemSrc: 'N3Td9bxFaY8' }, { poemSrc: 'sdEPk1JHqDs' }, { poemSrc: '8ePYTHH6f7Q' }, { poemSrc: '9GaFBTVEjQo' }, { poemSrc: 'WSPbP0eWrm0' }, { poemSrc: 'lkSr4KqDTeQ' }, { poemSrc: 'x18JR4AOQ3M' }, { poemSrc: 'hkn1FZX_7ZQ' }, { poemSrc: 'HgAOpcZb-kM' }, { poemSrc: 'I0Pm3XjSKGs' }, { poemSrc: 'AXXD-3xfhmo' }, { poemSrc: '8RD32WMSVXs' }, { poemSrc: 'qjgvLXbmIds' }, { poemSrc: '_W7vgC0lNXE' }, { poemSrc: 'gTO_DQWV3DQ' }, { poemSrc: 'c8xJWI-G6Xg' }, { poemSrc: 'pQdPKMowJ9U' }, { poemSrc: '_Wm3n0bK_rk' }, { poemSrc: 'U6-cI01OgRQ' }, { poemSrc: 'wmZOE7gNDuE' }, { poemSrc: 'uCfEmsJ2Vvo' }, { poemSrc: '0-DJp9dik00' }, { poemSrc: 'T3T00tQOa_4' }, { poemSrc: 'OsSTdSm4Ego' }, { poemSrc: '10ezxakoAB4' }, { poemSrc: 'IiVkQ7Q9rjk' }]

async function getVideoTitle (videoId) {
  var url = 'https://www.youtube.com/watch?v=' + videoId;
  var title;
  await $.getJSON('https://noembed.com/embed',
    { format: 'json', url: url }, function (data) {
      title = data.title;
    })
  return title;
}

/* GET about page. */
router.get('/poems', function (req, res, next) {
  poems.forEach(function (x, index) {
    if (x.poemTitle == undefined)
      getVideoTitle(x.poemSrc).then(data => x.poemTitle = data)
    if (x.poemTitle == undefined)
      x.poemImgSrc = '/images/thumbnails/' + x.poemTitle + '.png'
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
