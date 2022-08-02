function createSquares(size) {
    size = size ?? 16;

    const sketchpad = document.querySelector(".sketchpad");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("sketchpad-row");
        
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("sketchpad-square");
            square.addEventListener('click', onClick);
            row.appendChild(square);
        }

    sketchpad.appendChild(row);
    }
}

function onClick(e) {
    this.style.backgroundColor = 'black';
}

createSquares(16);