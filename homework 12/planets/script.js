window.addEventListener('DOMContentLoaded', async () => {
    const secondContainer = document.createElement("div");
    secondContainer.classList.add("planetContainer")
    document.body.appendChild(secondContainer);
    const planetHeader = document.createElement("h2");
    planetHeader.classList.add("planetHeader");
    planetHeader.innerHTML = "PLANETS";

    const returnButton = document.getElementById("returnButton");
    returnButton.addEventListener('click', () => {
        window.location = '../homepage/index.html'
    })
    
    function createPlanetList(planet){
        const planetColumn = document.createElement("div");
        planetColumn.classList.add("planet");
        planetColumn.textContent = planet.name;
        secondContainer.append(planetColumn)   
        planetHeader.style.display = "block";
    }
    
    async function getPlanets(){
        const request = await fetch("https://swapi.dev/api/planets/");
        const arr = await request.json();
        const planets = await arr.results;
        planets.forEach((e) => {
         createPlanetList(e)
        })}

        getPlanets()
})
