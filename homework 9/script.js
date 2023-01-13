window.addEventListener("DOMContentLoaded",() =>{ 
    generateBlocks()
})

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
let timer;
function generateBlocks(){
    const squareSize = 50;
    const columnSize = 5;
    const squareLength = 25;
    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.style.width = columnSize * squareSize + "px";
    container.style.height = columnSize * squareSize + "px";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    for(let i = 0; i < squareLength;i++){
        const coloredSquare = document.createElement("div");
        coloredSquare.classList.add("square");
        coloredSquare.style.aspectRatio = "1";
        coloredSquare.style.background = `#${randomColor()}`; 
        container.appendChild(coloredSquare);
    }
    root.appendChild(container);

    const button = document.createElement("button");
    button.style.color = "black";
    button.style.background = "yellow";
    button.style.padding = 15 + "px";
    button.style.borderRadius = 10 + "%";
    button.innerText = "start generating";
    button.addEventListener("click",(e) => generateBlockIntervals(e));
    root.appendChild(button);
}

function generateBlockIntervals(e){
   if(!timer){
        e.srcElement.innerText = "stop"
        timer = setInterval(() => {
        const squareArray = document.querySelectorAll(".square")
        squareArray.forEach((value)=>{
            value.style.background = `#${randomColor()}`;
        })
        },1000)
   }else{
        clearInterval(timer);
        timer = null;
        e.srcElement.innerText = "start generating"
   }   
}
