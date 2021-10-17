// First thing
// make a button
// when the button is pressed call the github API
// use AJAX to call the API
// take the user location and call the weather API
// using callbacks

// Create a  onFailurare methoed
// Create on success methoed
const button = document.getElementById('btn');
const div = document.getElementById('divID');

function onError(err) {
	return console.log("It's an error" + err);
}

function getWeather() {
	 $.ajax({
		url: 'https://api.github.com/users/mustafabaaj',
		success: (success) => {
            div.innerHTML += JSON.stringify(success);
			$.ajax({
				url: `https://api.openweathermap.org/data/2.5/weather?q=${success.location}&appid=${apiWeatherKey}`,
				success: (success) => {
                    div.innerHTML += JSON.stringify(success);
				},
				dataType: 'JSON',
				error: onError,
			});
		},
		error: onError,
		dataType: 'JSON',
	});
}

button.addEventListener('click', () => {
	getWeather();
});