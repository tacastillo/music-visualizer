var api_key = "&api_key=dc6zaTOxFJmzC";
var base_url = "http://api.giphy.com/v1/gifs/search?q=";
var query = "80s_cartoons"

var backgrounds;
var resultGet = $.get(base_url + query + api_key, function(result) {
	backgrounds = result;
	var index = Math.floor((Math.random() * 24) + 1);
	var gifURL = "url(" + backgrounds["data"][index]["images"]["original"]["url"] + ")";
	$(document.body).css('background-image', gifURL);
	setTimeout(changeBackground(), 2000);
});

var height = $(document.body).height();
var width = $(document.body).width();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append('rect')
	.attr('width', width)
	.attr('height', height)
	.style('opacity', 0.6);

var rect = d3.select("body").select("svg").select("rect");
changeFilter();

function changeFilter() {
	var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	rect.style('fill', color);
	setTimeout(changeFilter, 500);
}

function changeBackground() {
	index = Math.floor((Math.random() * 24) + 1);
	console.log(index);
	gifURL = "url(" + backgrounds["data"][index]["images"]["original"]["url"] + ")";
	$(document.body).css('background-image', gifURL);
	setTimeout(changeBackground, 1500);
}