// task 1
function* createIdGenerator(){
    for (let i = 0; i < Infinity; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

// task 2
const element = document.createElement("p");
document.body.append(element);
element.innerText = "Hello world"
element.classList.add("element")

    const fontSize = {
        gen(fs){
            let i = fs;
            return {
                next(direction){
                    if ( direction === 'up') {
                        return {value: i+=2, done: false};
                    }
                    if (direction === 'down') {
                        return {value: i-=2, done: false}
                    }
                    if (!direction){
                        return {value: i, done: true}
                    }
                }
            }

        }
    }
    let fontDirection = "";
    const iterator = fontSize.gen(14)
    const a = iterator.next(`${fontDirection}`).value;

    const buttonUp = document.getElementById("up");
    buttonUp.addEventListener("click", () => {
    fontDirection = "up";
    const a = iterator.next(`${fontDirection}`).value;
    element.style.fontSize = a + "px";
    console.log(a)
    })

    const buttonDown = document.getElementById("down");
    buttonDown.addEventListener("click", () => {
    fontDirection = "down";
    const a = iterator.next(`${fontDirection}`).value;
    element.style.fontSize = a + "px";
    console.log(a)
    })

  