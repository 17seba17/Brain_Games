
    class FirstTask {


    constructor() {
      this.score = 20000;
    this.isGameRunning = false;
        this.lights = [];
        this.buttons = [];
        this.gameActive = false;
        this.ultimoclick = null;
        this.intervallo = null; // (i cinque secondi per rispondere)
        this.timer = null; // (intervallo di pausa)
        this.randomTime = null;
        this.n = 1;
        this.start=false;
      this.stats = {
    nome: ["task totali", "task provati", "task giusti", "livello raggiunto", "rapidità media in ms", "soldi guadagnati", "soldi persi"],
    valori: [0, 0, 0, 1, 0 ,0,0],
    unita: ["","","","/8"," ms"," $"," $"],
    colore: ["black","blue","green","green","blue","green","red",],
    soldi: 0
};
       
    }

getStats(){
  return this.stats;
}

    inizia() {
     // alert(this.stats.nome.length+","+this.stats.valori.length+","+this.stats.unita.length+","+this.stats.colore.length+",");
        //this.intervallo=setTimeout(() => {console.log("Creato timer");}, 0);
        //this.timer=setTimeout(() => {console.log("Creato secondo timer");}, 0);
     
       if(this.start==false){
        this.start=true;
        this.#createGrid();}
        else{ this.#resetGame();}
        
    }
    // Funzione privata
    #getRandomColor() {
        const niceColors = [
            '#FF5733', '#FFBD33', '#33FF57', '#33B5FF', '#FF33A1',
            '#FF33D4', '#FF8C33', '#33FF8C', '#FF3333', '#FFCC33',
            '#FF6F33', '#FF33B5', '#33FFCC', '#FF33FF', '#FF9933',
            '#FF3366', '#FF6633', '#33FF99', '#FF33C4', '#FF5E33',
            '#FF3330', '#FF8F33', '#33FF44', '#FF3344', '#FFAA33'
        ];
        return niceColors[Math.floor(Math.random() * niceColors.length)];
    }

    // Funzione privata
    #createGrid() {
        
        clearTimeout(this.timer);
        clearTimeout(this.intervallo);
        this.lights = [];
        this.buttons = [];
                


        const gridContainer = document.getElementById('grid');
        gridContainer.innerHTML = '';
        gridContainer.style.gridTemplateColumns = `repeat(${this.n}, 1fr)`; // Limita a 5 colonne

        for (let i = 0; i < this.n; i++) {
            const light = document.createElement('div');
            light.className = 'light off';
            light.style.backgroundColor = this.#getRandomColor();
            this.lights.push(false);
            gridContainer.appendChild(light);
        }

        for (let i = 0; i < this.n; i++) {
            const button = document.createElement('button');
            button.innerText = 'on/off';
            button.onclick = () => this.#toggleButton(i);
            button.style.backgroundColor = document.querySelectorAll('.light')[i].style.backgroundColor;
            this.buttons.push(false);
            gridContainer.appendChild(button);
        }
        
        this.#resetGame();
    }
    
         #resetGame() {
          
        
        for (let i = 0; i < this.n; i++) {
            this.buttons[i] = this.lights[i];
        }
        
        this.#avviaTask();
    }
    
    
  


    #avviaTask() {
      

        clearTimeout(this.timer);
        
        this.randomTime = 5000 + Math.random() * 5000;
        this.timer = setTimeout(() => {
          
          
            this.gameActive = true;
            const rrr = Math.random() < 0.5 ? 0 : 1;
            const lll = (this.n >= 2) ? rrr : 0;
 
            const numLightsToChange = Math.min(2, this.n) - lll;

            const store = [];
            const indices = new Set();
            for (let i = 0; i < this.n; i++) {
                store.push(i);
            }
            for (let i = 0; i < numLightsToChange; i++) {
                const ran = Math.random() * store.length;
                indices.add(store[Math.floor(ran)]);
                store.splice(Math.floor(ran), 1);
            }


            indices.forEach(index => {
                this.lights[index] = !this.lights[index];
                const lightDiv = document.querySelectorAll('.light')[index];
                lightDiv.className = this.lights[index] ? 'light on' : 'light off';
            });
            this.ultimoclick = Date.now();
            this.intervallo = setTimeout(() => {
            
                        

                
                this.gameActive = false;
                         
                this.#checkScore();
            }, 5 * 1000);
        }, this.randomTime);
    }



     #checkScore() {

        let correct = true;
        
       let delta= Date.now()-this.ultimoclick;
        for (let i = 0; i < this.n; i++) {
            if (this.lights[i] !== this.buttons[i]) {
                correct = false;
                break;
            }
        }

        this.score += correct ? (delta) : -5000;
       
        if (this.score >= this.n * 25000 && this.n < 8) {
            this.n++;
           
            this.start=false;
           
        }
        
        let ontime=true;
        if(delta>4950){ontime=false;}
        else{
         
          if(correct){  this.stats.valori[4]=(this.stats.valori[4]*this.stats.valori[2]+(5000-delta))/(this.stats.valori[2]+1); this.stats.valori[2]++;}
          this.stats.valori[1]++;
       }
        this.stats.valori[0]++;
       this.stats.valori[3]=this.n;
     /////    this.stats.valori[3]= this.stats.valori[3]; è costante
     if(correct){this.stats.valori[5]+=delta;showMoney(delta);}
     else{this.stats.valori[6]-=5000;showMoney(-5000);}
     this.stats.soldi=this.stats.valori[5]+this.stats.valori[6];
        avvisa(0, ontime);
       
    }


    #toggleButton(index) {
        if (!this.gameActive) { return; }
        this.ultimoclick = Date.now();
        this.buttons[index] = !this.buttons[index];
    }



}
