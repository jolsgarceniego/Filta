// api url
const api_url =
	"https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	// if (response) {
	// 	hideloader();
	// }
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// Function to define innerHTML for HTML table
function show(data) {
	let tab = '<div id="product-image" class="product-image">';
	tab += '<img src="'+data.imageURL+'" alt="'+data.title+'">';
	tab += '</div>';
	tab += '<div id="product-details" class="product-details">';
	tab += '<div class="title padding-bottom border-light">';
	tab += '<p class="primary" id="product-title">'+data.title+'</p>';
	tab += '</div>';
	tab += '<div class="title padding-bottom border-light">';
	tab += '<p class="primary" id="product-price">$'+data.price+'.00</p>';
	tab += '</div>';
	tab += '<div class="desc">';
	tab += '<p class="secondary" id="product-desc">'+data.description+'</p>';
	tab += '</div>';
	tab += '<div class="size">';
	tab += '<label class="secondary">Size<span class="star">*</span></label>';
	tab += '<ul id="sizes">';
            data.sizeOptions.forEach(element => {
    tab += '<li id="'+element.id+'" class="size-label" data-value="'+element.label+'">'+element.label+'</li>'
            });
	tab += '</ul>';
	tab += '</div>';
	tab += '<div class="btn-wrapper">';
	tab += ' <button id="addToCart">Add to Cart</button>';
	tab += '</div>';
	// Setting innerHTML as tab variable
	document.getElementById("product-wrapper").innerHTML = tab;
}

