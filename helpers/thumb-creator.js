const Canvas = require("canvas");
const fs = require('fs')
// function convertToValidFilename(string) {
//     return (string.replace(/[\/|\\:*?"<>]/g, " "));
// }
module.exports = {

    createThumbnailImage(data) {


        // Load and draw the background image first
        Canvas.loadImage('public/images/thumb-bg.png').then(image => {
            // We need to register our font file to be used in canvas
            Canvas.registerFont('public/fonts/Manjari-Bold.ttf', { family: 'Manjari-Bold', weight: 'bold' })

            const width = image.width; // width of the image
            const height = image.height // height of the image
            const poemTitleArray = data.poemTitle.split(" ");
            const canvasProps = {
                width: width,
                height: height
            }
            const canvas = Canvas.createCanvas(canvasProps.width, canvasProps.height)
            const context = canvas.getContext('2d')

            const titleFontDetails = "70px 'Manjari-Bold'";
            const nameTitleFontDetails = "25px 'Manjari-Bold' bold";
            const nameFontDetails = "20px 'Manjari-Bold' bold";


            /* This is setting the text baseline to the top of the canvas. */
            context.fillStyle = '#FFFFFF'
            global.Image = Canvas.Image;
            // context.textAlign = 'center'

            // INFO  
            // if you increase x it will go right
            // if you increase y it will go down

            const imageProps = {
                width: width,
                height: height
            }

            const mainTitleProps = {
                y: 100,
                font: titleFontDetails,
                x: (0.5 * width),
                textAlign: 'center',
                text: poemTitleArray[0]
            }
            const singerNameTitleProps = {
                x: 0.02 * width,
                y: 0.92 * height,
                font: nameTitleFontDetails,
                textAlign: 'left',
                text: 'ആലാപനം'
            }
            const singerNameProps = {
                x: 0.02 * width,
                y: 0.98 * height,
                // maxwidth: 150,
                font: nameFontDetails,
                textAlign: 'left',
                text: data.poemSingerName
            }

            const writerNameTitleProps = {
                x: 0.98 * width,
                y: 0.92 * height,
                font: nameTitleFontDetails,
                textAlign: 'right',
                text: 'രചന'
            }
            // context.font = nameFontDetails //TODO 
            const writerNameProps = {
                x: 0.98 * width,
                y: 0.98 * height,
                // maxwidth: 150,
                font: nameFontDetails,
                textAlign: 'right',
                text: data.poemWriterName
            }


            // var playBtn = new Image();
            // playBtn.src = 'public/images/play-button.png';     // starts to load the image
            // Draw the background
            context.drawImage(image, 0, 0, imageProps.width, imageProps.height)
            // Draw the YT play button
            // context.drawImage(playBtn, 150, 200, 300, 200);

            if (poemTitleArray.length === 1)
                // Draw the Title
                drawText(context, mainTitleProps);
            else {
                poemTitleArray.forEach((poemTitleword, index) => {
                    const modifiedMainTitleProps = {
                        y: (index + 1) * 65,
                        font: titleFontDetails,
                        x: (0.5 * width),
                        textAlign: 'center',
                        text: poemTitleword
                    }
                    console.log(modifiedMainTitleProps.y);
                    drawText(context, modifiedMainTitleProps);
                });

            }
            // Draw the Singer Title
            drawText(context, singerNameTitleProps);

            // Draw the Singer name
            drawText(context, singerNameProps);

            // Draw the Writer Title
            drawText(context, writerNameTitleProps);

            // Draw the Writer Name
            drawText(context, writerNameProps);

            // Convert the Canvas to a buffer
            const buffer = canvas.toBuffer('image/png')
            // save image
            if (data.imageName == '' || data.imageName == undefined)
                data.imageName = data.poemTitle

            // fs.writeFileSync('public/images/thumbnails/' + convertToValidFilename(data.imageName) + '.png', buffer)
            fs.writeFileSync('public/images/thumbnails/' + data.imageName + '.png', buffer)

            // return buffer;
        })
    }




};

function drawText(context, data) {

    // console.log(context)
    context.textAlign = data.textAlign;
    // context.textAlign = 'center';
    context.font = data.font;
    // context.direction = data.direction;
    context.fillText(data.text, data.x, data.y)

    // return context;
}