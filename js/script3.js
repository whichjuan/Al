/*Get location fucntion*/
var x = document.getElementById("app");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    $lat = position.coords.latitude;
    $lon = position.coords.longitude; 
}


$(document).ready(function() {
	$('.btn').click(function() {

		/*Json Call*/
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ $lat +"&lon="+ $lon +"&APPID=f70ba23a951a6801ce6fada02f596787", function(data) {	
			/*Convert from K to F and round up*/
			$temp = Math.round(data.main.temp * (9/5) - 459.67);
			$humidity = data.main.humidity;
			$wind = data.wind.speed;
			$clouds = data.clouds.all;
			$cond = data.weather[0].id;
			$city = data.name;

			console.log(data);


			/*Intert Weather Data as html*/
			if ($temp < 65) {
				$('#rec').html("YES");
			} else if ($temp >= 65 && $temp <=75) {
				$('#rec').html("Maybe...");
			} else {
				$('#rec').html("Nah");
			}

			/*Display text*/
			$('#app').html("It's currently " + $temp + "&#8457 and "  + weatherCode($cond) + " in " + $city);


			console.log($cond);
			/*Display appropriate weather icon*/
			if ($cond >= 200 && $cond <= 299 ) {
				img.src = 'thunder.png';
			}
			if ($cond >= 300 && $cond <= 599 ) {
				img.src = 'rain.png';
			}
			else if ($cond >= 600 && $cond <= 699 ) {
				img.src = 'rain.png';
			}
			else if ($cond >= 700 && $cond <= 772 ) {
				img.src = 'haze.png';
			}
			else if ($cond == 800 ) {
				img.src = 'sunny.png';
			}
			else if ($cond >= 801 && $cond <= 803 ) {
				img.src = 'someClouds.png';
			}
			else if ($cond >= 804 && $cond <= 903 ) {
				img.src = 'cloudy.png';
			}



		});

	});

	var img = new Image();
	var weatherIcon = document.getElementById('weatherIcon');

	img.onload = function() {
	  weatherIcon.appendChild(img);
	};

	img.src = 'images/logos/coatlogo2.png';
})


function weatherCode(cat) {
	switch(cat) {
		/*Thunderstorms = between 200-299 */
		case 200: return "thunderstorm with light rain"
		break;
		case 201: return "thunderstorm with rain"
		break;
		case 202: return "thunderstorm with heavy rain"
		break;
		case 210: return "light thunderstorm"
		break;
		case 211: return "thunderstorm"
		break;
		case 212: return "heavy thunderstorm"
		break;
		case 221: return "ragged thunderstorm"
		break;
		case 230: return "thunderstorm with light drizzle"
		break;
		case 231: return "thunderstorm with drizzle"
		break;
		case 232: return "thunderstorm with heavy drizzle"
		break;

		/*Rain between 300-599*/
		case 300: return "light intensity drizzle"
		break;
		case 301: return "drizzle"
		break;
		case 302: return "heavy intensity drizzle"
		break;
		case 310: return "light intensity drizzle rain"
		break;
		case 311: return "drizzle rain"
		break;
		case 312: return "heavy intensity drizzle rain"
		break;
		case 313: return "shower rain and drizzle"
		break;
		case 314: return "heavy shower rain and drizzle"
		break;
		case 321: return "shower drizzle"
		break;
		case 500: return "light rain"
		break;
		case 501: return "moderate rain"
		break;
		case 502: return "heavy intensity rain"
		break;
		case 503: return "very heavy rain"
		break;
		case 504: return "extreme rain"
		break;
		case 511: return "freezing rain"
		break;
		case 520: return "light intensity shower rain"
		break;
		case 521: return "shower rain"
		break;
		case 522: return "heavy intensity shower rain"
		break;
		case 531: return "ragged shower rain"
		break;

		/*Snow between 600-699 */
		case 600: return "light snow"
		break;
		case 601: return "snow"
		break;
		case 602: return "heavy snow"
		break;
		case 611: return "sleet"
		break;
		case 612: return "shower sleet"
		break;
		case 615: return "light rain and snow"
		break;
		case 616: return "rain and snow"
		break;
		case 620: return "light shower snow"
		break;
		case 621: return "shower snow"
		break;
		case 622: return "heavy shower snow"
		break;

		/*Mist or things like that between 700-772 */
		case 701: return "mist"
		break;
		case 711: return "smoke"
		break;
		case 721: return "haze"
		break;
		case 731: return "sand, dust whirls"
		break;
		case 741: return "fog"
		break;
		case 751: return "sand"
		break;
		case 761: return "dust"
		break;
		case 762: return "volcanic ash"
		break;
		case 771: return "squalls"
		break;

		/*Tornado = 781*/
		case 781: return "tornado"
		break;

		/*Clear sky 800*/
		case 800: return "clear sky"
		break;

		/*Few clouds between 801-803 */
		case 801: return "few clouds"
		break;
		case 802: return "scattered clouds"
		break;
		case 803: return "broken clouds"
		break;

		/*Cloudy between 804-903 */
		case 804: return "overcast clouds"
		break;
		case 900: return "tornado"
		break;
		case 901: return "tropical storm"
		break;
		case 902: return "hurricane"
		break;
		case 903: return "cold"
		break;
		case 904: return "hot"
		break;
		case 905: return "windy"
		break;
		case 906: return "hail"
		break;
		case 951: return "calm"
		break;
		case 952: return "light breeze"
		break;
		case 953: return "gentle breeze"
		break;
		case 954: return "moderate breeze"
		break;
		case 955: return "fresh breeze"
		break;
		case 956: return "strong breeze"
		break;
		case 957: return "high wind, near gale"
		break;
		case 958: return "gale"
		break;
		case 959: return "severe gale"
		break;
		case 960: return "storm"
		break;
		case 961: return "violent storm"
		break;
		case 962: return "hurricane"
		break;
		default: return "no clue";
	}
}
