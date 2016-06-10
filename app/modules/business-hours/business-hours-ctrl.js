angular.module('coreMod')
	.controller('BusinessHoursController', function($scope){
		var businessHours = setInterval(function(){
			var date = new Date(),
				day = date.getDay(),
				hour = date.getHours(),
				minute = date.getMinutes(),
				second = date.getSeconds(),
				time = parseFloat(hour + ((minute < 10) ? ".0" : ".") + minute + ((second < 10) ? ".0" : ".") + second),
				openHours = $scope.content.config.schedule,
				open = parseFloat(openHours[day].open),
				close = parseFloat(openHours[day].close),
				bh = document.getElementById("businesshours"),
				message = "<h3>Schedule</h3>",
				success = "<p>We're <span style='color: lightgreen'>open</span> :)</p><p>It is currently <b>" + time + "</b></p>",
				fail = "<h1>Schedule</h1><p>We're <span style='color: red'>closed</span> :(</p><p>Try again soon. It is currently <b>" + time + "</b></p>",
				error = "<h1>Schedule</h1><p>Error...</p><p>It is currently <b>" + time + "</b>. We are open from <b>" + open + "</b> until <b>" + close + "</b></p>";
			if(time > open && time < close){
				message += success;
				console.log("tick");
			} else if(time < open || time > close){
				message += fail;
				console.log("tick");
			} else {
				message += error;
				console.log("tick");
			}
			bh.innerHTML = message;
		}, 1000);
	})
;