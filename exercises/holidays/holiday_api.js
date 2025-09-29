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

const url = 'https://api.api-ninjas.com/v1/holidays?country=US';
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': '/33SSB7vKksCnbl0C9d4CQ==5R0IoKhKVgAPJLOA',
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