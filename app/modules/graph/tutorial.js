var data,
	canvas,
	circle,
	circles;

data = [10, 20, 30, 40, 50];

canvas = d3
	.select("body")
	.append("svg")
	.attr("width", 500)
	.attr("height", 500);

circle = canvas
	.append("circle")
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", 25);

circles = canvas
	.selectAll("circle")
	.data(data)
	.enter()
		.append("circle")
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("r", 25)
		.attr("fill", "#f52");