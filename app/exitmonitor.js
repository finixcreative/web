window.onload = function(){
	/*
	var saved;
	$('a').on('click', function(){
		saved = true;
	});
	$('form').on('submit', function(){
		saved = true;
	});
	*/
	var exitCount = 0;
	window.onmouseout = function(){
		if(exitCount = 0){
			confirm("Are you suuuuure?");
			exitCount++;
		}
	};
};