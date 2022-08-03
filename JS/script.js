const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(arrey, heading) {
	
	if(arrey===universes){
        let fruitsLIs = [];
        for(let i=0; i<universes.length; i++){
            fruitsLIs.push(`<tr><td>${universes[i].join(`</td><td>`).replaceAll(',','; ')}</td></tr>`) 
		} 
		document.write(`<table>
        	<caption>${heading}</caption>
        	${fruitsLIs}
    	</table>`);
		console.log(`<table>
		<caption>${heading}</caption>
		${fruitsLIs}
	</table>`)
    } else {
		document.write(`<table>
        <caption>${heading}</caption>
        	<tr>
				<td>${arrey.join(`</td></tr><tr><td>`).replaceAll(',','</td><td>')}</td>
			</tr>
    	</table>`)
		console.log(`<table>
        <caption>${heading}</caption>
        	<tr>
				<td>${arrey.join(`</td></tr><tr><td>`).replaceAll(',','</td><td>')}</td>
			</tr>
    	</table>`)
	}
}
getInfo(animals, `Animals`), 
getInfo(food, `Food`), 
getInfo(universes, `Universes`)

