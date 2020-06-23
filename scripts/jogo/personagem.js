class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.frameAtual = 0;
    this.alturaPersonagem = 135;
    this.larguraPersonagem = 110;
    this.tamX = 220;
    this.tamY = 270;
  }
  
  exibe() {
    let x = this.frameAtual % 4 * this.tamX;
    let y = Math.floor(this.frameAtual / 4) * this.tamY;
    
    image(this.imagem, 0, height - this.alturaPersonagem, this.larguraPersonagem,     this.alturaPersonagem, x, y, this.tamX, this.tamY);
    
    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= 16){
       this.frameAtual = 0;
    }
  }
}
