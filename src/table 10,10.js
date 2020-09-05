tableGenerator = ( number) => {
			const tableLength = Math.round(Math.sqrt(number));
			let table = document.createElement('div');
			table.align = 'center';

			for (let r = 0; r < tableLength; r++){
				let tr = document.createElement('tr');

				for (let c = 0; c < tableLength; c++) {
					let td = document.createElement('td');
					td.style.padding = '5px';
					td.innerHTML = `${r * tableLength + c + 1}`;
					tr.appendChild(td);
				}
				console.log('tr', tr)
				table.appendChild(tr);
			}
			document.body.append(table);
		}


tableGenerator(100);