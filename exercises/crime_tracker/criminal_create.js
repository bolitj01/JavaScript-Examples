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

var pubRecs = [];

names = ["Simone Villegas","Krystal Sandoval","Grayson Rosales,Keon Schultz","Maritza Conner","Brendan Houston","Patience Dillon","Leon Hubbard","Jillian Carpenter","Nicholas Golden","Rhianna Russo","Nico Burch","Leilani Beard","Aliana Doyle","Javion Mora","Armando Meyers","Sienna George","Peyton Acevedo","Angela Hammond","Nigel Foley","Daisy Perry","Caylee Moon","Andy Rasmussen","Emelia Ruiz","Mohammad Nash","Issac Rowe","Lola Guerra","Sanaa Mendoza","Marco Mcmillan","Giovani Glover","Joel Estrada","Beckett Campos","Hazel Barr","Adam Lambert","Messiah Orr","Kara Morrison","Kamron Rocha","April Bryant","Lyric Medina","Callum Peterson","Greyson Brennan","Taryn Elliott","Ana Montoya","Jordan Morton","Omari Waters","Melany Villegas","Zaniyah Daniels","Elias Levine","Trace Vance","Kaitlyn Vaughn","Aedan Shaw","Alexa Ross","Nathan Dougherty","Lina Carlson","Mylee Fox","Tyree Harris","Skylar Ware","Jake Fisher","Ariana West","Emily Duarte","Eduardo Weaver","Donald Francis","Yesenia Li","Alma Bentley","Kian Valenzuela","Emilio Mcclain","Eliezer Ritter","Hailey Hall","Dean Bean","Karley Sandoval","Daphne Goodwin","Marcel Ray","Kendal Ayers","Brian Daniel","Antwan Bernard","Destinee Frye","Stephanie Wong","Gordon Poole","Estrella Hendrix","Greta Nixon","Harley Massey","Ashly Merritt","Britney Glenn","Messiah Silva","Lydia Randolph","Faith Kidd","Joslyn Shah","Scott Watkins","Jonathan Black","Mohammad Wolfe","Moises Jackson","Emilia Leblanc","Britney Garcia","Adalynn Cox","Zaniyah Giles","Everett Clarke","Giovani Ingram","Karly Henson","Raegan Carter","Kadence Moss"];

locations = ["New Cruxwich","Elland Island","Weirford","Faybrough","Winhampton","Stardale City","Dodgeburgh","Southburg","Sweetpool","Dayville","Rockstead","Ashview","Richbury","Wingdale","Tallford","Springfield","Fairness","Hollowby","Gilview","Duckport","Great Factby","North Fairworth","Hosness","Fortdale","Kettlemouth","Seaness","North Mansford","Richkarta","Queensside Hills","Southview","Elford","Kingdale","Elbrough","Millcester","Lexingburg","Fairby","Hardside","Lunapool","Valenside","Factford","North Appleview","Readingview","Frostdol","Foxport","Hardfield","Baybury","Hamtown","Sweetport","Dodgeburg","Norham","Southbury","Southingborough","West Ashby","Readingham Hills","Postdale","South Queensstead","Bannpool Falls","Ashville","Bridgebury","East Winterpool","Aelkarta","Redport","Clouddol","West Waltpool","Richland","Manstead","Kettlemouth","West Melgrad","Bannworth","West Bannness","New Salthampton","West Richville","Great Medpool","Beachland Park","Wheelbury","Lawland Falls","New Winfield","Bayhampton Island","Austead","Transtown","New Gilland","Farmingstead","Sagekarta","West Highview","Weirland","Capcester","North Angerbury","Sugarton","Julville","New Lexingford","Farmfield","Elstead","Lunawich","Mangrad","Aelpool Falls","Rockford","Buoyborough","Winterfolk","Skillland","Appleville Hills"];

const PublicRecord = function(name, location, crimes){
	this.name = name;
	this.location = location;
	this.crimes = crimes;
	this.toString = function(){
		return `
		<tr>
			<td>${this.name}</td>
			<td>${this.location}</td>
			<td class="crimelist">Crimes: ${this.crimes}</td>
		</tr>
		`;
	}
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cdae9db55dmsh258b9fd9710aea9p1597f1jsn02d0f6ee3cf0',
		'X-RapidAPI-Host': 'jailbase-jailbase.p.rapidapi.com'
	}
};


for (let batch = 0; batch < 10; batch++){
	fetch('https://jailbase-jailbase.p.rapidapi.com/recent/?source_id=az-mcso', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		for (const record of response.records){
			let name = names.pop([Math.floor(Math.random() * names.length)]) + names.length + " from batch " + batch;
			let location = locations.pop([Math.floor(Math.random() * locations.length)]);
			var pr = new PublicRecord(name, location, Math.random() < .3 ? record.charges: null);
			pubRecs.push(pr);
		}
	})
	.catch(err => console.error(err));
}