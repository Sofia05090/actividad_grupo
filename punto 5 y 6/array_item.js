
function mostrarElementos5(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('El parámetro debe ser un array.');
	}
	if (arr.length !== 5) {
		console.log(`El array debe tener exactamente 5 elementos. Actualmente tiene ${arr.length}.`);
		return arr;
	}

	
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	return arr;
}

module.exports = { mostrarElementos5 };


if (require.main === module) {
	const arg = process.argv[2];
	let arr;
	if (!arg) {
	
		arr = ["uno", "dos", "tres", "cuatro", "cinco"];
		console.log('Usando array por defecto:');
	} else {
		try {
			
			arr = JSON.parse(arg);
		} catch (e) {
			
			arr = String(arg).split(',').map(s => s.trim());
		}
		console.log('Array recibido:');
	}

	try {
		mostrarElementos5(arr);
	} catch (err) {
		console.error('Error:', err.message);
		process.exit(1);
	}
}

