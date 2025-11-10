
function mostrarConsecutivos(n) {
	
	if (typeof n === 'string' && n.trim() !== '') {
		n = Number(n);
	}
	if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n)) {
		throw new TypeError('El parámetro debe ser un número entero.');
	}v
	if (n <= 0) {
		
		console.log('Ingrese un número entero mayor que 0.');
		return [];
	}

	const resultado = [];
	for (let i = 1; i <= n; i++) {
		console.log(i);
		resultado.push(i);
	}
	return resultado;
}


module.exports = { mostrarConsecutivos };


if (require.main === module) {
	const arg = process.argv[2];
	if (!arg) {
		console.log('Uso: node ciclos_numeros.js <numero>');
		process.exit(0);
	}
	try {
		mostrarConsecutivos(arg);
	} catch (err) {
		console.error('Error:', err.message);
		process.exit(1);
	}
}
