const defaultSize = 16;

const container = document.querySelector('.container');
const gridSizeBtn = document.querySelector('.grid-size-btn');
const resetBtn = document.querySelector('.reset')

createGrid(defaultSize);

function createGrid (size){
    container.innerHTML='';
    for (let i = 0; i < size * size; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `flex: 0 0 calc(100%/${size}); background-color: black;`;
        box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'pink';
        });
        container.append(box);
        }   
}

function resizeGrid(){
    let newSize = prompt("What grid size would you like? (1 -100)");
    const validInput = newSize && !isNaN(newSize) && newSize > 0 && newSize <= 100;
    if (validInput){
        createGrid(newSize);
        }
    else{
        alert("Invalid input! Choose a number between 1 and 100!");
    }
}
