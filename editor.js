const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

// Add Filters And Effects
document.addEventListener('click', e => {
	if(e.target.classList.contains('filter-btn')){
		if(e.target.classList.contains('brightness-add')){
			Caman('#canvas', img, function() {
				this.brightness(5).render();
			});
		} else if(e.target.classList.contains
			('brightness-remove')){
			Caman('#canvas', img, function() {
				this.brightness(-5).render();
			
			});
		}
		else if(e.target.classList.contains
			('contrast-add')){
			Caman('#canvas', img, function() {
				this.contrast(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('contrast-remove')){
			Caman('#canvas', img, function() {
				this.contrast(-5).render();
			
			});
		}
		else if(e.target.classList.contains
			('saturation-add')){
			Caman('#canvas', img, function() {
				this.saturation(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('saturation-remove')){
			Caman('#canvas', img, function() {
				this.saturation(-5).render();
			
			});
		}
		else if(e.target.classList.contains
			('vibrance-add')){
			Caman('#canvas', img, function() {
				this.vibrance(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('vibrance-remove')){
			Caman('#canvas', img, function() {
				this.vibrance(-5).render();
			
			});
		}
		else if(e.target.classList.contains
			('vintage-add')){
			Caman('#canvas', img, function() {
				this.vintage(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('lomo-add')){
			Caman('#canvas', img, function() {
				this.lomo(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('clarity-add')){
			Caman('#canvas', img, function() {
				this.clarity(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('sincity-add')){
			Caman('#canvas', img, function() {
				this.sinCity(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('crossprocess-add')){
			Caman('#canvas', img, function() {
				this.crossProcess(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('pinhole-add')){
			Caman('#canvas', img, function() {
				this.pinhole(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('nostalgia-add')){
			Caman('#canvas', img, function() {
				this.nostalgia(5).render();
			
			});
		}
		else if(e.target.classList.contains
			('hermajesty-add')){
			Caman('#canvas', img, function() {
				this.herMajesty(5).render();
			
			});
		}
	}

});

// Revert Filters
revertBtn.addEventListener('click', (e) => {
	Caman('#canvas', img, function() {
		this.revert();
	});
});
// Upload File
uploadFile.addEventListener('change',e => {
// Get File
const file = document.getElementById('upload-file').files[0];
// Init FileReader
const reader = new FileReader();
if(file){
	//Set  file name
	fileName = file.fileName;
	//Read Data as URL
	reader.readAsDataURL(file);
}
// Add image to canvas
reader.addEventListener('load', () => {
// Create img
img = new Image();
//Set src
img.src=reader.result;
// On image load, add to canvas
img.onload = function(){
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0, img.width, img.height);
	canvas.removeAttribute('data-caman-id');
};
},
false
);
});

//Download Event
downloadBtn.addEventListener('click',(e) => {
	// Get File Ext
	const fileExtension = fileName.slice(-4);
	//Init new filename
	let newFileName;
	//Check Image Type
	if(fileExtention === '.jpg' || fileExtension === '.png'){
		newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
	}

	//Call download
	download(canvas, newFileName);
});

//Download function
function download (canvas, fileName){
	//Init event
	let e;
	//Create link
	const link = document.createElement('a');
	//Set props
	link.download = fileName;
	link.href = canvas.toDataURL('image/jpeg', 0.8);
	e = new MouseEvent('click');
	// Dispatch event
	link.dispatchEvent(e);
	
}