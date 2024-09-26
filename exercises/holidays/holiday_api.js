/**
 * For an in-class exercise. Do not read below ahead of class
 * unless you want to spoil the fun!
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

var holidays = [];

const Holiday = function(date, name, type){
	this.date = date;
	this.name = name;
	this.type = type;
	this.toString = function(){
		return `
		<tr>
			<td>${this.date}</td>
			<td>${this.name}</td>
			<td>${this.type}</td>
		</tr>
		`;
	}
}

const url = 'https://holidays-by-api-ninjas.p.rapidapi.com/v1/holidays?country=us&year=2024';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '52af9ce6b1msh6b20c18c3439862p11a651jsn51cbed85b1d5',
		'x-rapidapi-host': 'holidays-by-api-ninjas.p.rapidapi.com'
	}
};

async function rapidHolidays(){
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);

		result.sort((a, b) => new Date(a.date) - new Date(b.date));

		for (const data of result){
			const newHoliday = new Holiday(data.date, data.name, data.type);
			holidays.push(newHoliday);
		}
	} catch (error) {
		console.error(error);
	}
}

rapidHolidays();