

var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

var gameOver = false;
var vida = 3;
var fase_dois = false;
var fase = 1;

var quadrado_x = 50;
var quadrado_y = 350;
//var quadrado_largura = 40;
//var quadrado_altura = 40;

var coracao_x = 800;
var coracao_y = 280;

var porta_x = 1100;
var porta_y = 294;
//var porta_largura = 20;
//var porta_altura = 100;

var monstro_x = 380;
var monstro_y = 350;
var monstro_dois_x = 620;
var monstro_dois_y = 350;

var pular = false;
var pulando = false;
var movimento_direita = false;
var movimento_esquerda = false;

var velocidade = 5;
var aceleracao = 0;
var gravidade = 0.15;

var plataforma_um_x = 0;
var plataforma_um_y = 390;
var plataforma_um_largura = 400;
var plataforma_um_altura = canvas.height;

var plataforma_dois_x = 400;
var plataforma_dois_y = 390;
var plataforma_dois_largura = 30;
var plataforma_dois_altura = canvas.height;

var plataforma_tres_x = 430;
var plataforma_tres_y = 428; // ex 480
var plataforma_tres_largura = 190;
var plataforma_tres_altura = canvas.height;

var plataforma_quatro_x = 620;
var plataforma_quatro_y = 390;
var plataforma_quatro_largura = 30;
var plataforma_quatro_altura = canvas.height;

var plataforma_cinco_x = 650;
var plataforma_cinco_y = 390;
var plataforma_cinco_largura = 350;
var plataforma_cinco_altura = canvas.height;

var plataforma_seis_x = 1000;
var plataforma_seis_y = 390;
var plataforma_seis_largura = 120;
var plataforma_seis_altura = canvas.height;

var plataforma_sete_x = 1030;
var plataforma_sete_y = 800;
var plataforma_sete_largura = 120;
var plataforma_sete_altura = canvas.height;

var lava_x = 430;
var lava_y = 389; // ex 420;

var lava_dois_x = 250;
var lava_dois_y = 389;
//var lava_largura = 190;
//var lava_altura = 90;


function colocaFundo(){

	var fundo = new Image();
    fundo.src = "img/fundo.jpg";
    contexto.drawImage(fundo, 0, 0); 

}

function colocaQuadrado(){

	var quadrado = new Image();
    quadrado.src = "img/quadrado_boneco.png";
    contexto.drawImage(quadrado, quadrado_x, quadrado_y); 

	document.onkeydown = function(event){

		switch(event.which){

			case 38: // pra cima

				pular = true;

			case 39: // pra direita

				movimento_direita = true;

				if(movimento_direita == true){

					quadrado_x += 6;

				}
		}
	}
}

function colocaPlataforma(){

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_um_x, plataforma_um_y, plataforma_um_largura, plataforma_um_altura);

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_dois_x, plataforma_dois_y, plataforma_dois_largura, plataforma_dois_altura);

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_tres_x, plataforma_tres_y, plataforma_tres_largura, plataforma_tres_altura);

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_quatro_x, plataforma_quatro_y, plataforma_quatro_largura, plataforma_quatro_altura);

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_cinco_x, plataforma_cinco_y, plataforma_cinco_largura, plataforma_cinco_altura);

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_seis_x, plataforma_seis_y, plataforma_seis_largura, plataforma_seis_altura);

	contexto.fillStyle = "#332946";
	contexto.fillRect(plataforma_sete_x, plataforma_sete_y, plataforma_sete_largura, plataforma_sete_altura);

}

function colocaLava(){

	var lava = new Image();
	lava.src = "img/lava.png";
	contexto.drawImage(lava, lava_x, lava_y); 

}

function colocaLimite(){

	if(quadrado_x + 40 >= canvas.width){ // limite na borda direita

		document.onkeydown = function(event){

			switch(event.which){

				case 39:

					quadrado_x = quadrado_x + 10;

				case 37:

					quadrado_x = quadrado_x - 10;

			}
		}
	}

	if(quadrado_x <= 0){ // limite na borda esquerda

		document.onkeydown = function(event){

			switch(event.which){

				case 37:

					quadrado_x = quadrado_x - 10;

				case 39: 

					quadrado_x = quadrado_x + 10;

			}
		}
	}

	// limites para não atravessar as plataformas

	if(quadrado_y + 42 >= plataforma_um_y && quadrado_x + 40 <= plataforma_um_x + plataforma_um_largura + 70){

		aceleracao = 0;

	}

	if(quadrado_y + 42 >= plataforma_dois_y && quadrado_x + 40 <= plataforma_dois_x + plataforma_dois_largura + 70){

		aceleracao = 0;

	}

	if(quadrado_y + 42 >= plataforma_tres_y && quadrado_x + 40 <= plataforma_tres_x + plataforma_tres_largura + 70){

		aceleracao = 0;

	}

	if(quadrado_y + 42 >= plataforma_quatro_y && quadrado_x + 40 <= plataforma_quatro_x + plataforma_quatro_largura + 70){

		aceleracao = 0;

	}

	if(quadrado_y + 42 >= plataforma_cinco_y && quadrado_x + 40 <= plataforma_cinco_x + plataforma_cinco_largura + 70){

		aceleracao = 0;

	}

	if(quadrado_y + 42 >= plataforma_seis_y && quadrado_x + 40 <= plataforma_seis_x + plataforma_seis_largura + 70){

		aceleracao = 0;

	}

	if(quadrado_y + 42 >= plataforma_sete_y && quadrado_x + 40 <= plataforma_sete_x + plataforma_sete_largura + 70){

		aceleracao = 0;

	}

}

function colocaMonstro(){

	var monstro = new Image();
	monstro.src = "img/monstro.png";
	contexto.drawImage(monstro, monstro_x, monstro_y); 

	monstro_x -= 1;

	if(monstro_x <= 100){
    	
		if(fase_dois == true){

			monstro_x = 200;

		} else{

			monstro_x = 380;

		}

	}

	var monstro_dois = new Image();
	monstro_dois.src = "img/monstro.png";
	contexto.drawImage(monstro_dois, monstro_dois_x, monstro_dois_y); 

	monstro_dois_x += 1;

	if(monstro_dois_x >= canvas.width - 100){
    	
		monstro_dois_x = 640;

	}

}

function colocaPorta(){

	var porta = new Image();
	porta.src = "img/porta.png";
	contexto.drawImage(porta, porta_x, porta_y); 

	if(quadrado_x >= porta_x - 43 && quadrado_x <= porta_x + 43){

		fase_dois = true;
		fase++;

		quadrado_y = 350;
		quadrado_x = 50;
		plataforma_tres_y = plataforma_um_y;
		monstro_x = 200;
		monstro_dois_y = canvas.height;
		lava_x = 650;

		colocaColisao();

	}

}

function colocaVida(){

	contexto.font = "20px OCR A Std, monospace";
	contexto.fillStyle = "white";
	contexto.fillText("vidas: "+vida, 40, 50);

}

function colocaCoracao(){

	var coracao = new Image();
	coracao.src = "img/vida.png";
	contexto.drawImage(coracao, coracao_x, coracao_y); 

	if(quadrado_x >= coracao_x - 30 && quadrado_y <= coracao_y + 30 && quadrado_x <= coracao_x + 30 && quadrado_y >= coracao_y - 30 || quadrado_y <= coracao_y - 30 && quadrado_y >= coracao_y + 30 && quadrado_x >= coracao_x - 30 && quadrado_x <= coracao_x + 30){

		coracao_x += 200;
		coracao_y = -100;
		vida++;

	}
}

function colocaColisao(){

	if(quadrado_y >= lava_y - 40 && quadrado_x + 35 >= lava_x && quadrado_x <= lava_x + 190){

		quadrado_x = 50;
		vida--;

	}

	if(fase_dois == true){
		
		if(quadrado_y >= lava_y - 40 && quadrado_x + 35 >= lava_x && quadrado_x <= lava_x + 190){

			quadrado_x = 50;
			vida--;

		}

		if(quadrado_y >= lava_dois_y - 40 && quadrado_x + 35 >= lava_dois_x && quadrado_x <= lava_dois_x + 190){

			quadrado_x = 50;
			vida--;

		}

		if(quadrado_x >= monstro_x - 40 && quadrado_y >= monstro_y && quadrado_x <= monstro_x + 40 || quadrado_y >= monstro_y - 40 && quadrado_x >= monstro_x - 40 && quadrado_x <= monstro_x + 40){

		quadrado_x = 50;
		vida--;

		}

	}

	if(quadrado_x >= monstro_x - 40 && quadrado_y >= monstro_y && quadrado_x <= monstro_x + 40 || quadrado_y >= monstro_y - 40 && quadrado_x >= monstro_x - 40 && quadrado_x <= monstro_x + 40){

		quadrado_x = 50;
		vida--;

	}

	if(quadrado_x >= monstro_dois_x - 30 && quadrado_y >= monstro_dois_y && quadrado_x <= monstro_x + 40 || quadrado_y >= monstro_dois_y - 40 && quadrado_x >= monstro_dois_x - 40 && quadrado_x <= monstro_dois_x + 40){

		quadrado_x = 50;
		vida--;

	}

	if(vida <= 0){

		vida--;

		gameOver = true;

		if(gameOver == true){

			var anuncio = new Image();
			anuncio.src = "img/gameover.jpg";
			contexto.drawImage(anuncio, 310, 160);
    	
		}

		clearInterval(chamada);

	}

}


var chamada = setInterval(function(){

	colocaFundo();
	colocaVida();
	colocaQuadrado();
	colocaCoracao();
	colocaPlataforma();
	colocaPorta();

	if(fase_dois == true){

		var lava_dois = new Image();
		lava_dois.src = "img/lava.png";
		contexto.drawImage(lava_dois, lava_dois_x, lava_dois_y); 

	}

	colocaLava();
	colocaLimite();
	colocaMonstro();
	colocaColisao();

	contexto.font = "20px OCR A Std, monospace";
	contexto.fillStyle = "white";
	contexto.fillText("fase "+fase, canvas.width - 130, 50);

	if(pular){

		aceleracao = -6;
		pulando = true;
		pular = false;

	}

	quadrado_y = quadrado_y + aceleracao;

	if(aceleracao != 0 || pulando){

		aceleracao = aceleracao + gravidade;

	}

	contexto.font = "15px OCR A Std, monospace";
	contexto.fillStyle = "#EE8262";
	contexto.fillText("pi por camila e camille", 430, canvas.height - 15);

}, 20);