
const firstContainer = document.createElement("div");
firstContainer.classList.add("characterContainer")
document.body.appendChild(firstContainer)
const firstScreen = document.getElementById("container")

function createIcon(charact){
    const characters = document.createElement("div");
    characters.classList.add("characters");

    const nameCh = document.createElement("h4");
    nameCh.classList.add('userName');
    nameCh.textContent = "name:" + charact.name;

    const birthYear = document.createElement("p");
    birthYear.classList.add('userBirthYear');
    birthYear.textContent = "Birth Year:" + charact.birth_year;

    const gender = document.createElement("p");
    gender.classList.add('userGender');
    gender.textContent = "Gender:" + charact.gender;

    const img = document.createElement("img");
    img.src = `./picture/${charact.name}.png`;
    img.alt = `${charact.name} - picture`;

    const pictureBlock = document.createElement('div');
    pictureBlock.classList.add("pictureBlock")
    pictureBlock.append(img)
    characters.append(img);
    characters.append(nameCh);
    characters.append(birthYear);
    characters.append(gender); 
    firstContainer.append(characters);
}
    
const secondContainer = document.createElement("div");
secondContainer.classList.add("planetContainer")
document.body.appendChild(secondContainer);
const planetHeader = document.createElement("h2");
planetHeader.classList.add("planetHeader");
planetHeader.innerHTML = "PLANETS";

secondContainer.appendChild(planetHeader);  

function createPlanetList(planet){
    const planetColumn = document.createElement("div");
    planetColumn.classList.add("planet");
    planetColumn.textContent = planet.name;
    secondContainer.append(planetColumn)   
    planetHeader.style.display = "block";
}
  
function getCharacters(){
    const input = document.getElementById("input").value;
    const url = `https://swapi.dev/api/films/${input}/`
    
    fetch(url)
.then((res) => {
    return res.json();
})
.then((res) => {
   return res["characters"]
    })
.then(response => {
 return response.forEach(element => {
       fetch(element).then(res => {
        res.json().then(res =>{createIcon(res)})
        })
   }); 
})
    button3.style.display = "block";
    button2.style.display = "none";
    button.style.display = "none";
    document.body.appendChild(firstContainer);
    firstScreen.style.display = "none";
    langButton.style.display = "none"

}

async function getPlanets(){
    const request = await fetch("https://swapi.dev/api/planets/");
    const arr = await request.json();
    const planets = await arr.results;
    planets.forEach((e) => {
     createPlanetList(e)
    })
    document.body.appendChild(secondContainer);
    button4.style.display = "block";
    button2.style.display = "none";
    firstScreen.style.display = "none";
    langButton.style.display = "none"
}
const button = document.getElementById("button");
button.addEventListener("click", function(){getCharacters()})
const button2 = document.getElementById("buttonTwo");
button2.addEventListener("click", function(){getPlanets()});
const button3 = document.getElementById("buttonThree");
button3.addEventListener('click', () =>{
    button.style.display = "block";
    button2.style.display = "block";
    button3.style.display = "none";
    firstContainer.innerHTML = "";
    firstScreen.style.display = "flex";
    langButton.style.display = "block"

})
const button4 = document.getElementById("buttonFour");
button4.addEventListener("click", ()=>{
    button2.style.display = "block";
    button4.style.display = "none";
    secondContainer.innerHTML = "";
    firstScreen.style.display = "flex";
    langButton.style.display = "block"

})

