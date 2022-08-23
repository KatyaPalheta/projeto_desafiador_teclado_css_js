var textoDiditacao = receive();
var posicao = 0; //posição
var letra;
var certo = 0;
var errado = 0;

mudarLetra();

window.addEventListener('keypress', function (e) {
	letra = textoDiditacao.charAt(posicao);
	var num = letra.charCodeAt();
	var key = event.keyCode;
	key = parseInt(key);

	if (num == key) {
		document.getElementById(key).style.backgroundColor = 'green';
		certo++; //soma 1
		document.getElementById('acerto').innerHTML = 'Acertos: ' + certo;
		posicao++; //soma 1
		isFinal();
		mudarLetra();
	} else {
		document.getElementById(key).style.backgroundColor = 'red';
		errado++;
		document.getElementById('erro').innerHTML = 'Erros: ' + errado;
	}
});

window.addEventListener('keyup', function (e) {
	var key = event.keyCode;
	key = parseInt(key);
	//não consegui fazer a tecla ç funcionar
	if (key == 186) {
		document.getElementById(key + 55).style.backgroundColor = 'white';
	} else if (key == 32) {
		document.getElementById(key).style.backgroundColor = 'white';
	} else {
		document.getElementById(key + 32).style.backgroundColor = 'white';
	}
});

function receive() {
	var textValue = document.getElementById('digitando').innerText;
	console.log(textValue);
	return textValue;
}

function mudarLetra() {
	var firstPart = textoDiditacao.substr(0, posicao);
	var secondPart = textoDiditacao.substr(posicao + 1);
	var seguinte = '';
	seguinte = seguinte.concat(
		firstPart,
		'<span class="actual">',
		textoDiditacao.charAt(posicao)
	);
	seguinte = seguinte.concat('</span>', '', secondPart);
	document.getElementById('digitando').innerHTML = seguinte;
}
//teste se a letra digitada é a letra correspondente na posição do texto
function isFinal() {
	if (posicao >= textoDiditacao.length) {
		alert(
			'Você concluiu o texte com ' +
				certo +
				' acertos e ' +
				errado +
				' erros de digitação.'
		);
	}
}
