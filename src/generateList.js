function generateList(arr) {


			generator = (arr) => {
				let list = document.createElement('ul');
				for (let i = 0; i < arr.length; i++) {
					let li = typeChecker(arr[i]);
					list.append(li);
				}

				return list;
			}

			typeChecker = value => {
				let li = document.createElement('li');
				if (Array.isArray(value)) {
					value = generator(value);
					console.log('value', value);
					li.append(value);
					return li;
				}
					li.innerHTML = value;
					return li
			}
			
			let result = this.generator(arr)	
			result.align = 'center';
			console.log('result', result)
			return result
		}

	document.body.append(generateList([1, 2, 3, [4.1, 4.2, ["4.3.2", "4.3.3"], 4.3], [5.1, 5.2]]));
