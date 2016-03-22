var colorTime = 500,
	gifTime = 2000,
	opacity = 0.6,
	numGifs = 100,
	width = $(document.body).width(),
	height = $(document.body).height();

var query = "drugs",
	api_key = "dc6zaTOxFJmzC",
	params = "&api_key=" + api_key + "&limit=" + numGifs,
	base_url = "http://api.giphy.com/v1/gifs/search?q=";

var backgrounds;
var resultGet = $.get(base_url + query + params, function(result) {
	console.log(query + ": " + result.data.length)
	backgrounds = result.data;
	var index = Math.floor(Math.random() * backgrounds.length-1);
	var gifURL = "url(" + backgrounds[index]["images"]["original"]["url"] + ")";
	$(document.body).css('background-image', gifURL);
	setTimeout(changeBackground(), gifTime);
});

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append('rect')
	.attr('width', width)
	.attr('height', height)
	.style('opacity', opacity);

var rect = d3.select("body").select("svg").select("rect");
changeFilter();

function changeFilter() {
	var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	rect.style('fill', color);
	setTimeout(changeFilter, colorTime);
}

function changeBackground() {
	var index = Math.floor(Math.random() * backgrounds.length);
	gifURL = "url(" + backgrounds[index]["images"]["original"]["url"] + ")";
	$(document.body).css('background-image', gifURL);
	setTimeout(changeBackground, gifTime);
}