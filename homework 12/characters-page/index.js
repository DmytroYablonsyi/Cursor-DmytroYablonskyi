window.addEventListener('DOMContentLoaded', async ()=> {
	const params = new URL(window.location).searchParams;
	const change_language = document.querySelector('#change_language');
	change_language.innerText = params.get('wookie') ? 'Change to human language' : 'Change to wookie language';
	change_language.addEventListener('click',(e)=> {
		e.preventDefault();
		params.get('wookie') ? params.delete('wookie') : params.set('wookie', true);
		window.location = `index.html?${params.toString()}`;
	})
	const episode = params.get('episode');
	const isWookieFormat = params.get('wookie');

	const getPeopleByFilms = async (episode) => {
		const baseUrl = 'https://swapi.dev/api/';

		try {
			let response = await fetch(`${baseUrl}films/${episode}/`);
			const data = await response.json();	
			if(isWookieFormat){
				const query = '?format=wookiee';

				return {
					...data,
					characters: data.characters.map((link)=> `${link}${query}`)
				};
			}
			return data;
		
		}catch(e){
			console.error(e);
		}
	
	};

	const filmsData = await getPeopleByFilms(episode);
		const respByCharacter = await filmsData["characters"];
		respByCharacter.forEach(element => {
			fetch(element).then(res => {
			 res.json().then(res =>{createBlock(res)})
			 })
		}); 

	function getCharacterKeys(isWookieFormat){
		return {
			name: isWookieFormat ? 'whrascwo' : 'name',
			birth_year: isWookieFormat ? 'rhahrcaoac_roworarc' : 'birth_year', 
			gender:isWookieFormat ? 'rrwowhwaworc' : 'Gender'
		}
}
const keys = getCharacterKeys(isWookieFormat);

const name = keys['name'];
const birth = keys['birth_year']
const charGender = keys['gender']

function createBlock(charact){
	const mainCharactersContainer = document.createElement("div");
	mainCharactersContainer.classList.add("characterContainer")
	document.body.appendChild(mainCharactersContainer)

	const character = document.createElement("div");
    character.classList.add("character");

	const nameCh = document.createElement("h4");
    nameCh.classList.add('userName');
    nameCh.textContent = `${name}:`+ charact[`${name}`]

    const birthYear = document.createElement("p");
    birthYear.classList.add('userBirthYear');
    birthYear.textContent = `${birth}:`+ charact[`${birth}`];

    const gender = document.createElement("p");
    gender.classList.add('userGender');
    gender.textContent = `${charGender}:`+ charact[`${charGender}`];


    const img = document.createElement("img");
    img.src = `./picture/${charact[name]}.png`;
    img.alt = `${charact[name]} - picture`;

	const pictureBlock = document.createElement('div');
    pictureBlock.classList.add("pictureBlock")
    pictureBlock.append(img)
    character.append(img);
    character.append(nameCh);
    character.append(birthYear);
    character.append(gender); 
	mainCharactersContainer.append(character);
}

const returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', () => {
	window.location = '../homepage/index.html'
})
});

