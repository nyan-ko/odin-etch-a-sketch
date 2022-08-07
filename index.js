let mouseDown = false;
let color = "#1e1e1e";

window.addEventListener('mouseup', () => {
    mouseDown = false;
});
window.addEventListener('mousedown', () => {
    mouseDown = true;
})

const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("input", (e) => {
    setColor(e.target.value);
});

function setColor(clr) {
    color = clr;
}

function getColor() {
    return color;
}

const slider = document.querySelector("#brush-sizer");
slider.addEventListener("input", (e) => setBrushSize(e.target.value));

function setBrushSize(size) {
    resizeCircle(size);
}

function resizeCircle(size) {
    const circle = document.querySelector(".brush-circle");
    size++;
    circle.style.width = size * 8 + "px";
    circle.style.height = size * 8 + "px";
    circle.style.marginTop = (64 - size * 4) + "px";
    circle.style.marginBottom = (64 - size * 4) + "px";
    circle.style.lineHeight = size * 8 + "px";
    circle.textContent = --size;
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
            square.style.backgroundColor = "white";
            attachEvents(square);

            row.appendChild(square);
        }

    sketchpad.appendChild(row);
    }
}

function attachEvents(element) {
    element.addEventListener('mouseover', onHover)
    element.addEventListener('mouseout', onLeave);
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
    else {
        this.classList.add("selected");
    }
}

function onLeave(e) {
    this.classList.remove("selected");
}

function cancelDrag(e) {
    e.preventDefault();
}

createSquares(16);