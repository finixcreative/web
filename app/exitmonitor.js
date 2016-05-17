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
	let count = 0;
	window.onmouseout = function(){
		if(count = 0){
			confirm("Are you suuuuure?");
			count++;
		} else {
			return;
		}
	};
};