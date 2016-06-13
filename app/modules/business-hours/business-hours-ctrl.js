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
				hrformat = function(timestamp){
					if(timestamp === 0){
						return parseFloat(timestamp + 12);
					} else if(timestamp > 12){
						return parseFloat(timestamp - 12);
					} else {
						return parseFloat(timestamp);
					}
				},
				opentime = hrformat(open),
				closetime = hrformat(close),
				bh = document.getElementById("businesshours"),
				message = "<h4>Business Hours</h4>",
				success = "<p>We're <span style='color: lightgreen'>open</span> :)</p><p>It is currently <b>" + hrformat(time) + "</b></p>",
				fail = "<p>We're <span style='color: red'>closed</span> :(</p><p>Try again soon. It is currently <b>" + hrformat(time) + "</b></p>",
				errorOpen = "<p>Error...</p><p>It is currently <b>" + hrformat(time) + "</b>. We are open from <b>" + hrformat(open) + "</b> until <b>" + hrformat(close) + "</b></p>",
				errorClosed = "<p>Error...</p><p>It is currently <b>" + hrformat(time) + "</b>. We are not open today</p>";
			if(time > open && time < close){
				message += success;
				console.log("tick");
			} else if(time < open || time > close){
				message += fail;
				console.log("tick");
			} else if(open && close){
				message += errorOpen;
				console.log("tick");
			} else {
				message += errorClosed;
				console.log("tick");
			}
			bh.innerHTML = message;
		}, 1000);
	})
;