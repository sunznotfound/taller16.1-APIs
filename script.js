async function fetchPokemon() {
    const query = document.getElementById('search').value.trim();
    if (!query) return;

    const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const data = await response.json();
        
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error: ' + error.message);
    }
}

function displayResults(pokemon) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');

    pokemonDiv.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        <p>ID: ${pokemon.id}</p>
    `;

    resultsContainer.appendChild(pokemonDiv);
}

document.getElementById('searchBtn').addEventListener('click', fetchPokemon);
