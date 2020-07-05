var Btn = document.querySelector('#searchBtn');
var setImg = document.querySelector('#image');

Btn.addEventListener('click',searchGify);


function searchGify(e)
{
	e.preventDefault();
	document.querySelector("#image").innerHTML='';
	var text = document.querySelector('#searchField').value;
	var x = text.replace(/\s\s+/g, ' ');
	var y = encodeURIComponent(x);
	
	
	var searchword = y.replace(/%20/g, '+');
	var apiKey = "enter your api key here";
	var Limit="&limit=50";
	var urlBeg = "http://api.giphy.com/v1/gifs/search?q=";
	var APIurl = urlBeg+searchword+apiKey+Limit;
	
	fetch(APIurl)
	.then(response => {
		return response.json();
		})
	.then(jsonData => {
		for(var i=0;i<50;i++)
		{
			var urlImg = jsonData.data[i].images.original.url;
			
			var newImg = document.createElement("img");
			newImg.className="boxes";
			
			var div = document.createElement("div");
			div.className="imageBox";
			
			newImg.src= urlImg;

			setImg.appendChild(div);
			div.appendChild(newImg);
		}
		})
	.catch(e => {
		console.log('you have an error - ');
		console.log(e);
		})
}