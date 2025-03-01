   function generaStringaRandomica(n) {
    const lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (n > lettere.length) throw new Error('n deve essere minore o uguale al numero di lettere disponibili.');

    // Crea un array di lettere e mescolalo
    const lettereArray = lettere.split('');
    const lettereMescolate = lettereArray.sort(() => Math.random() - 0.5);

    // Prendi le prime n lettere
    return lettereMescolate.slice(0, n).join('');
}

   
    class ThirdTask {
    constructor() {
      
  this.timer;
  this.mytimer;
  this.score=24000;
  this.lvl=1;
      this.stats = {
    nome: ["task totali", "task giusti", "livello raggiunto", "rapidità media in ms", "soldi guadagnati", "soldi persi"],
    valori: [0, 0, 0, 1, 0 ,0,0],
    unita: ["","","/7"," ms"," $"," $"],
    colore: ["black","green","green","blue","green","red"],
    soldi: 0
};
      
    }

getStats(){
    return this.stats;
}

    inizia() {
       this.mytimer=setTimeout(() => {
       avvisa(1, false, false);
    }, 10000);
  
     const mydiv=document.getElementById('div2');
     mydiv.innerHTML = "<span id='status2'></span> <a href='https://17seba17.github.io/Brain_Games/multitask/tutorial3/'>&#128712;</a>";
     this.timer=Date.now();

    const  myLetters=generaStringaRandomica(1+3*this.lvl);
    const stringToWrite = Array.from({ length: 4 }, () => myLetters[Math.floor(Math.random() * myLetters.length)]).join('');    let stringwritten="";   
      

      const stringDiv = document.createElement('div');
      stringDiv.style.display = 'inline-flex'; 
      stringDiv.style.justifyContent = 'space-between';
        const divStringa1 = document.createElement('div');
        divStringa1.style.textAlign = 'center'; 
        divStringa1.style.color = 'blue';
        divStringa1.textContent = stringToWrite;
        const divStringa2 = document.createElement('div');
       
        divStringa2.style.textAlign = 'center';
        divStringa2.textContent = "____";
        
        stringDiv.appendChild(divStringa1);
        stringDiv.appendChild(divStringa2);
        
        mydiv.appendChild(stringDiv);
        
        
        const self = this;
        const firstLineButton = document.createElement('div');
        const pulsante_invia = document.createElement('button');
            pulsante_invia.textContent = `->`;
            pulsante_invia.onclick = () => {
              let delta=Date.now()-self.timer;
              clearTimeout(self.mytimer);
              let ontime=true; 
              if(delta>10000){ontime=false;}
              
            self.stats.valori[3]=(self.stats.valori[3]*self.stats.valori[0]+delta)/(self.stats.valori[0]+1); 
            self.stats.valori[0]++;
              
            if(delta>10000){ontime=false;}
             if (divStringa1.textContent !== divStringa2.textContent) {
                let ccc=-10000;
                if(!ontime){ccc=-delta;}
                     self.score+=(ccc);
                     self.stats.valori[5]+=(ccc);
     showMoney(ccc);
                }
                else{
                  self.stats.valori[1]++;
                   self.score+=(10000-delta);
                   if(10000-delta>0){
                    self.stats.valori[4]+=(10000-delta);}
                    else{self.stats.valori[5]+=(10000-delta);}
                    
                   if(self.score>self.lvl*25000&&self.lvl<8){self.lvl++; }
                 showMoney(10000-delta);
                }
                self.stats.valori[2]=self.lvl;
                self.stats.soldi= self.stats.valori[4]+ self.stats.valori[5]; 
             
              
              avvisa(2, ontime,true);
           
              
              
              
              
              
              
              
            };
            firstLineButton.appendChild(pulsante_invia);
       const pulsante_canc = document.createElement('button');
            pulsante_canc.textContent = `/`;
            pulsante_canc.onclick = () => {divStringa2.textContent="_"+divStringa2.textContent.slice(0, -1);};
            firstLineButton.appendChild(pulsante_canc);
            
            const pulsante_A = document.createElement('button');
            pulsante_A.textContent = myLetters[0];
            pulsante_A.onclick = () => {divStringa2.textContent=divStringa2.textContent.slice(1)+myLetters[0];};
            firstLineButton.appendChild(pulsante_A);
     mydiv.appendChild(firstLineButton);

     for(let i=0;i<this.lvl;i++){
       const LineButton = document.createElement('div');
       for(let j=0;j<3;j++){
         const pulsante = document.createElement('button');
         pulsante.textContent = myLetters[i*3+j+1];
          pulsante.onclick = () => {divStringa2.textContent=divStringa2.textContent.slice(1)+myLetters[i*3+j+1];};
         LineButton.appendChild(pulsante);
       }
       mydiv.appendChild(LineButton);
     }
 
        
        
    }

}
