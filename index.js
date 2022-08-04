let mouseDown = false;

window.addEventListener('mouseup', () => {
    mouseDown = false;
});
window.addEventListener('mousedown', () => {
    mouseDown = true;
})

function getColor() {
    return "#000000";
}

function createSquares(size) {
    size = size ?? 16;

    const sketchpad = document.querySelector(".sketchpad");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("sketchpad-row");
        
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("sketchpad-square");
            attachEvents(square);

            row.appendChild(square);
        }

    sketchpad.appendChild(row);
    }
}

function attachEvents(element) {
    element.addEventListener('mouseover', onHover)
    element.addEventListener('mousedown', onClick);

    element.addEventListener("dragstart", cancelDrag);
    element.addEventListener("drop", cancelDrag);
}

function onClick(e) {
    this.style.backgroundColor = getColor();
}

function onHover(e) {
    if (mouseDown) {
        this.style.backgroundColor = getColor();
    }
}

function cancelDrag(e) {
    e.preventDefault();
}

createSquares(16);