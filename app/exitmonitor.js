var formOrLink;
$('a').on('click', function(){
	formOrLink = true;
});
$('form').on('submit', function(){
	formOrLink = true;
});
$(window).on("beforeunload", function(){
	return formOrLink ? "Do you really want to close?" : null; 
});