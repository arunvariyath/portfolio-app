const Canvas = require("canvas");
const fs = require('fs')
module.exports = {

    createThumbnailImage (data) {

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
            Canvas.registerFont('public/fonts/Gayathri-Regular.ttf', { family: 'Gayathri-Regular' })

            const width = image.width; // width of the image
            const height = image.height // height of the image
            const poemTitleArray = data.poemTitle == undefined ? [] : data.poemTitle.split(" ");
            const canvasProps = {
                width: width,
                height: height
            }
            const canvas = Canvas.createCanvas(canvasProps.width, canvasProps.height)
            const context = canvas.getContext('2d')

            const titleFontDetails = "250px 'Manjari-Bold'";
            const nameTitleFontDetails = "35px 'Gayathri-Regular'";
            const nameFontDetails = "40px 'Manjari-Bold'";


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

            let mainTitleProps = {
                y: 350,
                font: "350px 'Manjari-Bold'",
                x: (0.5 * width),
                textAlign: 'center',
                text: data.poemTitle
            }



            const singerNameTitleProps = {
                x: 0.04 * width,
                y: 0.68 * height,
                font: nameTitleFontDetails,
                textAlign: 'left',
                text: 'ആലാപനം'
            }
            const writerNameTitleProps = {
                x: 0.93 * width,
                y: 0.68 * height,
                font: nameTitleFontDetails,
                textAlign: 'right',
                text: 'രചന'
            }


            const singerPicProps = {
                x: 0.03 * width,
                y: 0.70 * height,
                width: 200,
                height: 225

            }
            const writerPicProps = {
                x: 0.86 * width,
                y: 0.70 * height,
                width: 200,
                height: 225
            }

            const writerNameProps = {
                x: 0.98 * width,
                y: 0.95 * height,
                font: nameFontDetails,
                textAlign: 'right',
                text: data.poemWriterName
            }
            const singerNameProps = {
                x: 0.02 * width,
                y: 0.95 * height,
                font: nameFontDetails,
                textAlign: 'left',
                text: data.poemSingerName
            }
            // var playBtn = new Image();
            // playBtn.src = 'public/images/play-button.png';     // starts to load the image
            // Draw the YT play button
            // context.drawImage(playBtn, 150, 200, 300, 200);

            // Draw the background
            context.drawImage(image, 0, 0, imageProps.width, imageProps.height)
            context.strokeStyle = "#ffff";
            context.lineWidth = 15;
            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.strokeStyle = "#01cdfa";
            context.lineWidth = 8;
            context.strokeRect(0, 0, canvas.width, canvas.height);
            // Draw the YT play button
            // context.drawImage(playBtn, 150, 200, 300, 200);

            if (data.poemTitle.length <= 14) {
                // Draw the Title
                drawText(context, mainTitleProps);
            }
            else {
                poemTitleArray.forEach((poemTitleword, index) => {
                    const modifiedMainTitleProps = {
                        y: (index + 1) * 250,
                        font: titleFontDetails,
                        x: mainTitleProps.x,
                        textAlign: mainTitleProps.textAlign,
                        text: poemTitleword
                    }
                    if (index <= 1)
                        drawText(context, modifiedMainTitleProps);
                });
            }

            // Draw the Singer Photo
            if (singerNameProps.text.length > 14) {
                singerPicProps.x = 0.08 * width
                singerNameTitleProps.x = 0.09 * width
            }
            var singerImg = new Image();
            singerImg.onload = () => {
                context.drawImage(singerImg, singerPicProps.x, singerPicProps.y, singerPicProps.width, singerPicProps.height)
            };
            singerImg.src = 'public/images/profile-images/singerImg.jpg';

            // Draw the Singer Title
            drawText(context, singerNameTitleProps);

            // Draw the Singer name
            drawText(context, singerNameProps);

            var writerImg = new Image();
            writerImg.onload = () => {
                // Draw the writer Photo
                context.drawImage(writerImg, writerPicProps.x, writerPicProps.y, writerPicProps.width, writerPicProps.height)
            };
            writerImg.src = 'public/images/profile-images/writerImg.jpg';
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

function drawText (context, data) {

    context.textAlign = data.textAlign;
    context.font = data.font;
    context.fillText(data.text, data.x, data.y)
}

function getImageFromLocation (imgSrc) {
    return 'public/images/templateImages/' + imgSrc;

}