    class SecondTask {
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
    }, 5000);
      
     const mydiv=document.getElementById('div1');
mydiv.innerHTML = "<span id='status1'></span> <a href='https://17seba17.github.io/Brain_Games/multitask/tutorial1/'>&#128712;</a>";

       this.timer=Date.now();
      let index=[];
      for(let i=0;i<5;i++){index.push(i);}
      
        const num1 = Math.floor(Math.random() * 19) - 9;
        const num2 = Math.floor(Math.random() * 19) - 9;
        const typeofeq=Math.floor(Math.random()*3);
       
        let correctAnswer;
        if(typeofeq===0){correctAnswer = num1 + num2;}
        if(typeofeq===1){correctAnswer = num1 - num2;}
        if(typeofeq===2){correctAnswer = num1 * num2;}
        
let wrongAnswer1 ; 
let wrongAnswer2 ; 

if (correctAnswer !== 0) {
     wrongAnswer1 = -correctAnswer; // Opposto della risposta corretta
     wrongAnswer2 = correctAnswer + 1 + Math.floor(Math.random() * 5); // Un valore in più con un offset casuale
}
else{
  if(typeofeq!==2){wrongAnswer1=num1;wrongAnswer2=-wrongAnswer1;}
else {
  wrongAnswer1=num1+num2;wrongAnswer2=-wrongAnswer1;
}
  
}
 

 const table = document.createElement('table');
 table.innerHTML = ''; 
table.style.borderCollapse = 'collapse';
table.style.display = 'flex'; 

  const newRow = table.insertRow();
  const cellA = newRow.insertCell(0); cellA.innerText = 'A';
  const cellB = newRow.insertCell(1); cellB.innerText = 'B';
  const cellC = newRow.insertCell(2); cellC.innerText = 'C';
  const cellD = newRow.insertCell(3); cellD.innerText = 'D';
  const cellE = newRow.insertCell(4); cellE.innerText = 'E';
const cells = [cellA, cellB, cellC, cellD, cellE];
cells.forEach(cell => {
    cell.style.border = '1px solid blue';
    cell.style.padding = '10px';
    
});
    const newRow2 = table.insertRow();
let sss=[];let nnn=[];
nnn[0]=num1;
nnn[1]=num2;
nnn[2]=correctAnswer;
nnn[3]=wrongAnswer1;
nnn[4]=wrongAnswer2;
const alphabet = ['A', 'B', 'C', 'D', 'E'];

        for(let i=0;i<5;i++){
        let cellF = newRow2.insertCell(i); // Crea la cella
    cellF.style.border = '1px solid blue'; // Applica lo stile alla cella
    cellF.style.padding = '10px';
      if(i<Math.floor(Math.random()*this.lvl)){
         let ran=Math.floor(Math.random()*index.length);
         ///ran=2;
      let  thisindex=index[ran];
      index.splice(ran, 1);
//alert(thisindex);
         if(thisindex===0){sss[0]=num1;nnn[0]=alphabet[i];cellF.innerText = num1;}
         if(thisindex===1){sss[1]=num2;nnn[1]=alphabet[i];cellF.innerText = num2;}
         if(thisindex===2){sss[2]=correctAnswer;nnn[2]=alphabet[i];cellF.innerText = correctAnswer;}
         if(thisindex===3){sss[3]=wrongAnswer1;nnn[3]=alphabet[i];cellF.innerText = wrongAnswer1;}
         if(thisindex===4){sss[4]=wrongAnswer2;nnn[4]=alphabet[i];cellF.innerText = wrongAnswer2;}
        
        
        }
  
        }
                
         let s;
        if(typeofeq===0){s=`${nnn[0]} + ${nnn[1]} =`;}
        if(typeofeq===1){s=`${nnn[0]} - ${nnn[1]} =`;}
        if(typeofeq===2){s=`${nnn[0]} * ${nnn[1]} =`;}
       
 const equationDiv = document.createElement('div');
 equationDiv.innerText = s;      

       

        const answers = [nnn[2], nnn[3], nnn[4]];
        answers.sort(() => Math.random() - 0.5); // Mescola le risposte
        
        // Mostra i pulsanti delle risposte
        const buttonsContainer = document.createElement('div');
        buttonsContainer.innerHTML = ''; // Pulisci i pulsanti precedenti
       const self = this;
        answers.forEach(answer => {
          
            const button = document.createElement('button');
          button.style.backgroundColor = 'lightgreen'; 
button.style.border = '1px solid green';
button.style.padding = '5px 10px'; 
button.style.cursor = 'pointer';
            button.numerical_answer=0;
             
          
           button.innerText = answer
           button.className = 'button';
        
            button.onclick = function() {
           clearTimeout(self.mytimer);

let check=true;
             for(let j=0;j<5;j++){
             
               if(sss[j]===correctAnswer){this.numerical_answer=sss[j];check=false;}
             }
             
             if(check){this.numerical_answer=answer;}
             
              let ontime=true;
            let delta=Date.now()-self.timer;
             self.stats.valori[3]=(self.stats.valori[3]*self.stats.valori[0]+delta)/(self.stats.valori[0]+1); 
            self.stats.valori[0]++;
            
           
            if(delta>5000){ontime=false;}
              if (this.numerical_answer !== correctAnswer) {
                let ccc=-5000;
                if(!ontime){ccc-=(delta-5000);}
                   self.score-=(ccc);
                     self.stats.valori[5]+=(ccc);
     showMoney(ccc);
                }
                else{
                  self.stats.valori[1]++;
                   self.score+=(5000-delta);
                   if(5000-delta>0){
                    self.stats.valori[4]+=(5000-delta);}
                    else{self.stats.valori[5]+=(5000-delta);}
                   if(self.score>self.lvl*25000){self.lvl++; }
                 showMoney(5000-delta);
                }
                self.stats.valori[2]=self.lvl;
                self.stats.soldi= self.stats.valori[4]+ self.stats.valori[5];
       avvisa(1, ontime,true);
            };
            buttonsContainer.appendChild(button);
           
        });
        
        
equationDiv.style.backgroundColor = 'lightblue';
equationDiv.style.padding = '10px';
equationDiv.style.border = '1px solid blue';
equationDiv.style.display = 'inline-flex'; 
equationDiv.style.alignItems = 'center';

buttonsContainer.style.display = 'flex'; 
buttonsContainer.style.marginLeft = '5px';


equationDiv.appendChild(buttonsContainer);
mydiv.appendChild(equationDiv);
mydiv.appendChild(table);
        
        
        
    }

}
