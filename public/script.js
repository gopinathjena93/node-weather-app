/*function initialize() {
     var options = {
       componentRestrictions: {
         country: "IN"
       }
     };
     var input = document.getElementById('pickupcityoneway');
     var autocomplete = new google.maps.places.Autocomplete(input, options);
   }
   
   google.maps.event.addDomListener(window, 'load', initialize);*/
function ShowTemp(location) {
	fetch('/weather',{
		method:'POST',
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json'
		},
		body: JSON.stringify({
			location:location
		})

	}).then(res => res.json()).then(data => {
		//console.log(data);
		setWeatherData(data)
		//setWeatherData(data,place.formatted_address)
	})
	const locationElement = document.querySelector('[data-location]')
	const statusElement = document.querySelector('[data-status]')
	const tempratureElement = document.querySelector('[data-temperature]')
	const humidityElement = document.querySelector('[data-humidity]')
	const windElement = document.querySelector('[data-wind]')

	function setWeatherData(data) {
		console.log('dfgfdgdfg');
		console.log(data);
		locationElement.textContent = data.location.name
		tempratureElement.textContent = data.current.temp_c
		windElement.textContent = data.current.wind_kph
		humidityElement.textContent = data.current.humidity
		statusElement.textContent = data.current.condition.text
		
	}
}	



/*const searchElement = document.querySelector('[data-city-search]');
console.log('searchElement ::: '+searchElement);
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
	const place = searchBox.getPlaces()[0]
	console.log('hello world')
	//console.log(place)
	if(place == null) return 
	//console.log(place);
	const latitude = place.geometry.location.lat()
	const longtude = place.geometry.location.lng()
	fetch('/weather',{
		method:'POST',
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json'
		},
		body: JSON.stringify({
			latitude:latitude,
			longtude:longtude
		})

	}).then(res => res.json()).then(data => {
		setWeatherData(data,place.formatted_address)
	})	
})*/