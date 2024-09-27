const pokemonCards = document.getElementById('pokemon-cards');
const loadMoreButton = document.querySelector('button');

const maxRecords = 151;
let offset = 0;
const limit = 10;

const pokemonToHtml = (pokemon) => {
  return `
      <li class="card pokemon" style="width: 18rem;">
       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.game_indices[3].game_index}.svg" alt="${pokemon.forms[0].name}">
      <div class="card-body">
        <p class="card-text">#${pokemon.game_indices[3].game_index}</p>
        <h5 class="card-title">${pokemon.forms[0].name}</h5>
        <ol class="types">
          ${pokemon?.types?.map((t) => `<li class="${t.type.name} type">${t.type.name}</li>`).join('')}
        </ol>
      </div>
    </li>
  `
}

const getPokemonDetails = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    pokemonCards.innerHTML += pokemonToHtml(data)
  } catch (error) {
    pokemonCards.innerHTML += `<li>As informações do pokemon não foram encontradas, ${error}</li>`;
  }
}

const fetchPokemons = async (offset, limit) => {
  try {
    const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const response = await fetch(API_URL);
    const data = await response.json();
    const pokemons = data.results;

    pokemons.map((pokemon) => getPokemonDetails(pokemon));
  } catch (error) {
    pokemonCards.innerHTML += `<li>${error}</li>`;
  }
}

fetchPokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit;

  const qtdNextPage = offset + limit
  if (qtdNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;

    fetchPokemons(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    fetchPokemons(offset, limit)
  }
})






