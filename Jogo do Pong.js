// Variaveis Bolinha;
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

// Velocidade da Bolinha;
let velocidadeyBolinha = 2;
let velocidadexBolinha = 2;
let raio = diametro / 2

// Variaveis Raquete;
let yRaquete = 150;
let xRaquete = 6;
let compRaquete = 10
let alturaRaquete = 90

// Variaveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false

// Variaveis Pontos
let meuPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  tamanhoBolinha();
  velocidadeBolinha();
  colisaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaBolinha();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoMinhaBiblioteca(xRaquete, yRaquete);
  colisaoMinhaBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluirplacar();
  marcandoPlacar();
}

function tamanhoBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function velocidadeBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function colisaBolinha(){
  if(xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadexBolinha *= -1
  }
  if(yBolinha + raio> height ||
     yBolinha - raio<0){
    velocidadeyBolinha *= -1
  }
}

function mostraRaquete(x,y){
  rect(x, y,compRaquete, alturaRaquete);
}
function movimentaMinhaRaquete(){
 if(keyIsDown(UP_ARROW)){
   yRaquete -= 10;
 }
 if(keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
 }
}

function verificaColisaBolinha(){
  if(xBolinha - raio < xRaquete + compRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1
  }
}

function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente -
  compRaquete / 2 - 30 ;
  yRaqueteOponente += velocidadeYOponente;
}

function colisaoMinhaBiblioteca(x, y){
   colidiu = collideRectCircle(x, y, compRaquete, alturaRaquete, xBolinha,
    yBolinha, raio);
  if(colidiu){
    velocidadexBolinha *= -1
  }
}

function incluirplacar(){
  textSize(18);
  textAlign(CENTER);
  fill(255, 140, 0)
  rect(150, 10, 40, 20)
  fill(255)
  text(meuPontos, 170, 26);
  fill(255, 140, 0) 
  rect(450, 10, 40, 20)
  fill(255)
  text(pontosOponente, 470, 26)
}

function marcandoPlacar(){
  if(xBolinha > 592){
    meuPontos += 1
  }
  if(xBolinha < 8){
    pontosOponente +=1
  }
}