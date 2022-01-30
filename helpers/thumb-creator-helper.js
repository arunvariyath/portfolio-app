const Canvas = require("canvas");
const fs = require('fs')
module.exports = {

    createThumbnailImage(data) {

        var defaultImageLocation = 'public/images/thumb-bg.png'
        var imageLocation;
        if (data.bgImageName == '' || data.bgImageName == undefined)
            imageLocation = defaultImageLocation;
        else
            imageLocation = getImageFromLocation(data.bgImageName)

        // Load and draw the background image first
        Canvas.loadImage(imageLocation).then(image => {
            // We need to register our font file to be used in canvas
            Canvas.registerFont('public/fonts/Manjari-Bold.ttf', { family: 'Manjari-Bold', weight: 'bold' })

            const width = image.width; // width of the image
            const height = image.height // height of the image
            const poemTitleArray = data.poemTitle == undefined ? [] : data.poemTitle.split(" ");
            const canvasProps = {
                width: width,
                height: height
            }
            const canvas = Canvas.createCanvas(canvasProps.width, canvasProps.height)
            const context = canvas.getContext('2d')

            const titleFontDetails = "80px 'Manjari-Bold'";
            const nameTitleFontDetails = "35px 'Manjari-Bold' bold";
            const nameFontDetails = "25px 'Manjari-Bold' bold";


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
            if (data.imageName == '' || data.imageName == undefined)
                data.imageName = data.poemTitle

            fs.writeFileSync('public/images/thumbnails/' + data.imageName + '.png', buffer)

        })
    }




};

function drawText(context, data) {

    context.textAlign = data.textAlign;
    context.font = data.font;
    context.fillText(data.text, data.x, data.y)
}

function getImageFromLocation(imgSrc) {
    return 'public/images/templateImages/' + imgSrc;

}