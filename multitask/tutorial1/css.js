const div=document.getElementById('main_div');
const style = document.createElement('style');

style.textContent = `
  h1{
  color: red
  }
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        margin-top: 20px;
    }
    .light {
        width: 50px;
        height: 50px;
        display: inline-block;
        border-radius: 25px;
    }
    .on {
        opacity: 1;
    }
    .off {
        opacity: 0.15;
    }
    button {
        width: 50px;
        height: 30px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
    .button2 {
        width: 100px;
        height: 50px;
        border-radius: 50px;
        border: none;
        cursor: pointer;
    }
    button:hover {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    .button2:hover {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
`;
div.appendChild(style);

const grid = document.createElement('div');
grid.id = 'grid';
div.appendChild(grid);




