var formOrLink;
$('a').on('click', function(){
	formOrLink = true;
});
$('form').on('submit', function(){
	formOrLink = true;
});
$(window).on("beforeunload", function(){
	return formOrLink ? "D'oh. You forgot something." : "But wait! There's more..."; 
});