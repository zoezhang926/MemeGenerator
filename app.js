let topTextInput, bottomTextInput,imageInput,generateBtn,canvas,ctx;

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize){
	canvas.width=img.width;
	canvas.height=img.height;

	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.drawImage(img,0,0);
	
	ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

	fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });
	
	fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}
function init(){
	topTextInput = document.getElementById('top-text');
	bottomTextInput = document.getElementById('bottom-text');
	topTextSizeInput = document.getElementById('top-text-size-input');
	bottomTextSizeInput = document.getElementById('bottom-text-size-input');
	imageInput = document.getElementById('image-input');
	generateBtn = document.getElementById('generate-btn');
	canvas = document.getElementById('meme-canvas');
//use html5 getcontext to create a pic
	ctx = canvas.getContext('2d');

	canvas.width = canvas.height = 0;
	generateBtn.addEventListener('click',function(){
		let reader = new FileReader();
		reader.onload =function(){
			let img=new Image;
			img.src = reader.result;
			generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
		}
		
		reader.readAsDataURL(imageInput.files[0]);
	});
}
init();