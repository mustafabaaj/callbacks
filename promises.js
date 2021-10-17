const button = document.getElementById('btn');
const div = document.getElementById('divID');

function getUsersWeather() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: 'https://api.github.com/users/mustafabaaj',
			success: resolve,
			error: reject,
			dataType: 'JSON',
		});
	});
}

function onSucces(success) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/weather?q=${success.location}&appid=${apiWeatherKey}`,
			success: resolve,
			error: reject,
			dataType: 'JSON',
		});
	});
}
button.addEventListener('click', () => {
	getUsersWeather()
		.then((data) => {
			onSucces(data)
				.then((data) => {
					div.innerHTML += JSON.stringify(data);
				})
				.catch((err) => onError(err));
		})
		.catch((err) => onError(err));
});
