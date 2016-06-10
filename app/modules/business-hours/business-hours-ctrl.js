angular.module('coreMod')
	.controller('BusinessHoursController', function($scope){
		let businessHours = setInterval(function(){
			let date = new Date(),
				day = date.getDay(),
				hour = date.getHours(),
				minute = date.getMinutes(),
				second = date.getSeconds(),
				time = parseFloat(hour + ((minute < 10) ? ".0" : ".") + minute + ((second < 10) ? ".0" : ".") + second),
				openHours = $scope.config.schedule,
				open = parseFloat(openHours[day].open),
				close = parseFloat(openHours[day].close),
				content = document.getElementById("businesshours"),
				success = "<h1>Schedule</h1><p>We're <span style='color: lightgreen'>open</span> :)</p><p>It is currently <b>" + time + "</b></p>",
				fail = "<h1>Schedule</h1><p>We're <span style='color: red'>closed</span> :(</p><p>Try again soon. It is currently <b>" + time + "</b></p>",
				error = "<h1>Schedule</h1><p>Error...</p><p>It is currently <b>" + time + "</b>. We are open from <b>" + open + "</b> until <b>" + close + "</b></p>",
				message = "";
			if(time > open && time < close){
				message = success;
				console.log("tick");
			} else if(time < open || time > close){
				message = fail;
				console.log("tick");
			} else {
				message = error;
				console.log("tick");
			}
			content.innerHTML = message;
		}, 1000);
	})
;