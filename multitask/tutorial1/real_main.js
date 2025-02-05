

const first_task = new FirstTask();
let allTasks = [first_task];
let statusTasks=[];

setup();

function setup() {
  

    for (let i = 0; i < allTasks.length; i++) {
        statusTasks.push(0);
    }
}

function iniziaTask(){
  let validIndex=[];
  for(let i=0;i<statusTasks.length;i++){
    if(statusTasks[i]===0){
      validIndex.push(i);

    }}        


  let ran=Math.floor(Math.random()*validIndex.length);
  let indexchosen=validIndex[ran];
 let mytask= allTasks[indexchosen];
  statusTasks[indexchosen]=1;
  document.getElementById('div'+indexchosen).classList.replace('hidden', 'visible');
  document.getElementById('status'+indexchosen).textContent = '🕓';

  
  mytask.inizia();
  

}


   document.getElementById('startButton').onclick = () => {
document.getElementById('score').innerText = `Score: 0`;
document.getElementById('startButton').style.display = 'none';

iniziaTask(); 
};

function resetAllTasks(){
  for(let i=0;i<allTasks.length;i++){
   
    document.getElementById('div'+i).classList.replace('visible', 'hidden');
  }

/////////////////////////////////////
    
        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = '300px';
        container.style.height = '200px';
        container.style.border = '1px solid black'; // Bordo per visualizzare il container
        document.body.appendChild(container);

        const screens = [];
        for (let i = 0; i < allTasks.length; i++) {
            const screen = document.createElement('div');
            const stats=allTasks[i].getStats();
            
            screen.style.padding = '20px';
screen.style.border = '1px solid #ccc';
screen.style.borderRadius = '5px';
screen.style.width = '300px';
screen.style.backgroundColor = '#f0f0f0';

// Creazione del titolo
const title = document.createElement('h2');
title.textContent = 'Stats '+(i+1);
title.style.fontWeight = 'bold';
title.style.color='black';
title.style.textAlign = 'center';
screen.appendChild(title);

// Creazione della lista delle statistiche
const statsList = document.createElement('div');
statsList.style.display = 'flex';
statsList.style.flexDirection = 'column';

for (let i = 0; i < stats.nome.length; i++) {
    const statItem = document.createElement('div');
    statItem.style.display = 'flex';
    statItem.style.justifyContent = 'space-between';
    statItem.style.padding = '5px 0';

    const statName = document.createElement('span');
    statName.textContent = stats.nome[i];
    statName.style.color ='black';
    statItem.appendChild(statName);

    const statValue = document.createElement('span');
    statValue.textContent = `${Math.floor(stats.valori[i])}${stats.unita[i]}`;
    statValue.style.color = stats.colore[i];
    statItem.appendChild(statValue);

    statsList.appendChild(statItem);
}

screen.appendChild(statsList);
            
            
            screens.push(screen);
            container.appendChild(screen);
        }

        let current = 0;

        const createButton = (text, onClick) => {
            const button = document.createElement('button');
            button.textContent = text;
            button.style.cursor = 'pointer';
            button.style.position = 'absolute'; // Posizionamento assoluto
            button.style.zIndex = '2'; // Sopra le schermate
            button.onclick = onClick;
            return button;
        };


const n=allTasks.length;
        const nextButton = createButton('→', () => {
           
            screens[current].style.display = 'none';
            current = (current + 1) % n;
            screens[current].style.display = 'block';
        });

        const prevButton = createButton('←', () => {
            screens[current].style.display = 'none';
            current = (current - 1 + n) % n;
            screens[current].style.display = 'block';
        });

        const closeButton = createButton('X', () => {
            container.style.display = 'none';
            
document.getElementById('startButton').style.display = 'inline'; 
 
 const uno = new FirstTask();
 
for (let i = 0; i < allTasks.length; i++) {
        statusTasks[0]=0;
    }
  allTasks=[uno];
            
            
        });

        // Posizionamento dei pulsanti
        prevButton.style.left = '10px';
        prevButton.style.top = '10px';
        

        nextButton.style.left = '80px';
        nextButton.style.top = '10px';
        

        closeButton.style.right = '10px';
        closeButton.style.top = '10px';

        // Aggiungi i pulsanti al container
        container.appendChild(prevButton);
        container.appendChild(nextButton);
        container.appendChild(closeButton);

        // Aggiungi il container al div principale
        document.getElementById('main_div').appendChild(container);
////////////////////////////////////


}


function avvisa(index, ontime, done){
  
 
let unfinishedTasks=0;let money=0;;
for(let i=0;i<allTasks.length;i++){
  money+=allTasks[i].getStats().soldi;
  unfinishedTasks+=statusTasks[i];
}
document.getElementById('score').innerText = `Score: ${money}`;
if(!ontime&&unfinishedTasks==allTasks.length&&done){resetAllTasks();}
else{
if(done){statusTasks[index]=0;
  document.getElementById('status'+index).textContent = '❄️';
}
  
  iniziaTask();}
}


 function showMoney(numero) {
        // Crea un elemento div per il popup
        const popup = document.createElement('div');

        // Imposta il colore del testo e lo sfondo trasparente
        if (numero < 0) {
            popup.style.color = 'red'; // Testo rosso per numeri negativi
        } else {
            popup.style.color = 'green'; // Testo verde per numeri positivi
        }
        
        popup.textContent = `${numero} $`;

        // Stile del popup
        popup.style.position = 'absolute';
        popup.style.padding = '10px 20px';
        popup.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Sfondo bianco trasparente
        popup.style.borderRadius = '5px';
        popup.style.transition = 'opacity 1s ease-out';
        popup.style.opacity = '1';

        // Posizione casuale
        const x = Math.random() * (window.innerWidth - 100); // 100 è la larghezza del popup
        const y = Math.random() * (window.innerHeight - 50); // 50 è l'altezza del popup
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;

        // Aggiungi il popup al body
        document.body.appendChild(popup);

        // Scompari il popup dopo 1 secondo
        setTimeout(() => {
            popup.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 1000); // Rimuovi il popup dopo che è scomparso
        }, 1000);
    }
