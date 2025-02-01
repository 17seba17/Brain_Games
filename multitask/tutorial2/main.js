  
  let timer;
  let score=24000;
  let lvl=1;
    document.getElementById('startButton').addEventListener('click', function() {
      newEquation();
    });
    function newEquation(){
      timer=Date.now();
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

 const table = document.getElementById('variablesTable');
 table.innerHTML = ''; 
  const newRow = table.insertRow();
  const cellA = newRow.insertCell(0); cellA.innerText = 'A';
  const cellB = newRow.insertCell(1); cellB.innerText = 'B';
  const cellC = newRow.insertCell(2); cellC.innerText = 'C';
  const cellD = newRow.insertCell(3); cellD.innerText = 'D';
  const cellE = newRow.insertCell(4); cellE.innerText = 'E';

    const newRow2 = table.insertRow();
let sss=[];let nnn=[];
nnn[0]=num1;
nnn[1]=num2;
nnn[2]=correctAnswer;
nnn[3]=wrongAnswer1;
nnn[4]=wrongAnswer2;
const alphabet = ['A', 'B', 'C', 'D', 'E'];

        for(let i=0;i<5;i++){
        const cellF = newRow2.insertCell(i);
      if(i<Math.floor(Math.random()*lvl)){
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
        document.getElementById('equation').innerText = s;
      
 
      
        const answers = [nnn[2], nnn[3], nnn[4]];
        answers.sort(() => Math.random() - 0.5); // Mescola le risposte
        
        // Mostra i pulsanti delle risposte
        const buttonsContainer = document.getElementById('buttonsContainer');
        buttonsContainer.innerHTML = ''; // Pulisci i pulsanti precedenti
       
        answers.forEach(answer => {
          
            const button = document.createElement('button');
          
            button.numerical_answer=0;
             
          
           button.innerText = answer
           button.className = 'button';
            button.onclick = function() {
    
let check=true;
             for(let j=0;j<5;j++){
             
               if(sss[j]===correctAnswer){this.numerical_answer=sss[j];check=false;}
             }
             
             if(check){this.numerical_answer=answer;}
             
            
              if (this.numerical_answer !== correctAnswer) {
                    score-=5000;
                    alert("hai sbaglaito");
                }
                else{
                   score+=(5000-Date.now()+timer);
                   if(score>lvl*25000){lvl++;}
                }
              
              
             newEquation();
            };
            buttonsContainer.appendChild(button);
        });
        
        // Mostra la tabella
        document.getElementById('variablesTable').style.display = 'table';
        buttonsContainer.style.display = 'block';
        document.getElementById('score').innerText = 'Score: '+score; // Pulisci il risultato
    }
  
