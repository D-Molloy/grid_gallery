const gallery = document.querySelector('.gallery');
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
	// we use the random number function to generate a number between 1 and number of images in our images folder;
	return `
	<div class="item h${h} v${v}">
		<img src="images/${randomNumber(12)}.png">
		<div class="item__overlay">
		<button>View</button>
		</div>
	</div>
`;
}

function randomNumber(limit) {
	return Math.floor(Math.random() * limit) + 1;
}


//   we need to create an array of image heights and widths.  Instead of hard coding, we will create a function for the num of pics we want;
// [
//     [1, 4],
//     [2, 2],
//     [4, 1],
//     [4, 4]
// ]
// we create an array from an object with a length property of 50
//  it also takes a map function allows us to populate what goes in the height and width between 1 and 5
// we can that pass this into our generateHTML function 
//** the concat portion of the map function creates additional 1x1 squares to fill in the grid
const digits = Array.from({
	length: 50
}, () => [randomNumber(4), randomNumber(4)]).concat([[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1],[1,1],[1,1], [1,2], [1,2]]);
//this html will map the arrays into the generateHTML function and the arrays will be destructured into the horizontal and vertical parameters
// we use the join to turn it into a string
const html = digits.map(generateHTML).join('');
// console.log(html)
//we then take the gallery const we defined earlier and set the inner HTML to the HTML we just created
gallery.innerHTML = html;

////////////////////
//     CLICK EVENT
///////////////////
const items = document.querySelectorAll(".item");

items.forEach(item => item.addEventListener('click', handleClick));

function handleClick(e){
	//grabs the div
	//we want to grab the image src from the event target (the whole div created in the generateHTML function)
	const src = e.currentTarget.querySelector("img").src;
	overlayImage.src = src;
	open();
}

function open(){
	overlay.classList.add("open");
}

function close(){
	overlay.classList.remove("open");
}

overlayClose.addEventListener('click', close);