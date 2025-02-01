    let lights = [];
    let buttons = [];
    let score = 0;
    let gameActive = false;
    let ultimoclick;
    let intervallo;
    let timer;
    let randomTime;
function getRandomColor() {
  //if (!isGameRunning) return;
    // Array di colori "belli" in formato hex
    const niceColors = [
      '#FF5733', '#FFBD33', '#33FF57', '#33B5FF', '#FF33A1',
'#FF33D4', '#FF8C33', '#33FF8C', '#FF3333', '#FFCC33',
'#FF6F33', '#FF33B5', '#33FFCC', '#FF33FF', '#FF9933',
'#FF3366', '#FF6633', '#33FF99', '#FF33C4', '#FF5E33',
'#FF3330', '#FF8F33', '#33FF44', '#FF3344', '#FFAA33'

    ];
    
    // Prendi un colore casuale dall'array
    const randomIndex = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomIndex];
}

function createGrid(n) {
  if (!isGameRunning) return;
        const gridContainer = document.getElementById('grid');
        gridContainer.innerHTML = '';
                  gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`; // Limita a 5 colonne

        lights = []; // Resetta l'array delle luci
        buttons = []; // Resetta l'array dei pulsanti
        
        // Crea prima tutte le luci nella prima riga
        for (let i = 0; i < n; i++) {
            const light = document.createElement('div');
            light.className = 'light off';
            light.style.backgroundColor = getRandomColor();
            lights.push(false);
            gridContainer.appendChild(light);
        }

        // Poi crea tutti i pulsanti nella seconda riga
        for (let i = 0; i < n; i++) {
            const button = document.createElement('button');
button.innerText = 'on/off' ;
            button.onclick = () => toggleButton(i);
            button.style.backgroundColor = document.querySelectorAll('.light')[i].style.backgroundColor;
            buttons.push(false);
            gridContainer.appendChild(button);
        }
    }
    function toggleButton(index) {
     
        if (!gameActive) { return; }
        ultimoclick=Date.now();
        buttons[index] = !buttons[index];
    }

    function avviaTask(n) {
       if (!isGameRunning) return;
        clearTimeout(timer);
         randomTime = 5000+Math.random()*5000 ;
      timer=  setTimeout(() => {
       
            gameActive = true;
            const rrr=Math.random() < 0.5 ? 0 : 1;
            const lll=(n >= 2) ? rrr : 0;

            const numLightsToChange = Math.min(2, n) -lll;

            const store = [];
const indices = new Set();

for (let i = 0; i < n; i++) {
    store.push(i);
}
for (let i = 0; i < numLightsToChange; i++) {
  
    const ran = Math.random() * store.length; 
    
    indices.add(store[Math.floor(ran)]); 
    store.splice(Math.floor(ran), 1);
}
        
            indices.forEach(index => {
               
  
                lights[index] = !lights[index];
                const lightDiv = document.querySelectorAll('.light')[index];
                lightDiv.className = lights[index] ? 'light on' : 'light off';
            });
            ultimoclick=Date.now();
            intervallo = setTimeout(() => {
               if (!isGameRunning) return;
                gameActive = false;
             
                checkScore(n);
            }, 5 * 1000);
        }, randomTime);
    }

    function checkScore(n) {
       if (!isGameRunning) return;
        let correct = true;
        for (let i = 0; i < n; i++) {
            if (lights[i] !== buttons[i]) {
                correct = false;
                break;
            }
        }
        score += correct ? (Date.now()-ultimoclick) : -5000;
        document.getElementById('score').innerText = 'Punteggio: ' + score;
        if (score >= n * 25000 && n < 8) {
            avviaTaskLevel(n + 1);
            return;
        }
        resetGame(n);
    }

    function resetGame(n) {
        if (!isGameRunning) return;
        for (let i = 0; i < n; i++) {
            buttons[i] = lights[i];
        }
        avviaTask(n);
    }

    function avviaTaskLevel(n) {
       if (!isGameRunning) return;
        clearTimeout(timer);
        clearTimeout(intervallo);
        clearTimeout(randomTime);

        lights = [];
        buttons = [];
        gameActive = false;
        createGrid(n);
        resetGame(n);
        
    }

   document.getElementById('startButton').onclick = () => {
    const startButton = document.getElementById('startButton');
    
    if (startButton.innerText === "Start Game") {
        startButton.innerText = "Quit Job";
        score = 0;
document.getElementById('score').innerText = 'Score: ' + score;
 isGameRunning = true;
avviaTaskLevel(1);
     
        
    } else {
      isGameRunning = false;
      fermaTutto();
    }
};
function fermaTutto(){
  if(isGameRunning) return;
          startButton.innerText = "Start Game";
        
        gameActive=false;
    lights = [];
   buttons = [];
     clearTimeout(timer);
        clearTimeout(intervallo);
                clearTimeout(randomTime);

const gridContainer = document.getElementById('grid');
gridContainer.innerHTML = '';
fermaTutto();
}

