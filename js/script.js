//===========Declaração de Variaveis =====================
//Objetos
var posicao = null
var coodernada = null
var entrada = document.querySelector('#inicial')
//Numerico
var tela = document.querySelector('body').clientWidth;
var tamanhoRec = 0
var tamanhoRod = 0


//========================= Escopo ============================
//Ajusta o Tamanho da Tela para dispositivos maiores que 1000px
if(tela >= 1000 && tela <= 1366){
	var body = document.querySelector('body');

	tela = body.getBoundingClientRect()
	tamanhoRec = document.querySelector('#page6')
	tamanhoRod = document.querySelector("footer");

	tamanhoRec = tamanhoRec.getBoundingClientRect()
	tamanhoRod = tamanhoRod.getBoundingClientRect()
	console.log(tela.y)

	tela.y *= -1 
	tela.y += tamanhoRec.y + tamanhoRod.y

	body.style.height = tela.y.toString() +  'px'
	console.log(tela.y)
}

//Desabilita a animação de entrada
setTimeout(function(){ //Atrasa a saida da animação de entrada
	entrada.style.animation = 'saida 1s 1'
	setTimeout(function(){ //Desabilita a Animação de Entrada
		entrada.style.display = 'none'
	}, 1000)
}, 2000)


//========================= Funções ===========================
/*
Função: Posiciona(Recebe o numero da div)
Motivo: Posiciona na div correspondente ao botão clicado
Data: 04/11/2023
Programador(a): Ighor Drummond
*/
function Posiciona(num){
	//Pega Elemento
	posicao = document.querySelector('#page' + num);
	//Pega Coodernada do elemento
	coodernada = posicao.getBoundingClientRect();
	//Desloca tela para coodernada citada
	window.scrollTo(0, coodernada.y-50)
}