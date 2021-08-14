const axios = require('axios');

const getPokemons = async () => {
	try {
		const { data } =  await axios.get('https://pokeapi.co/api/v2/pokemon/');
		return data;

	} catch (error) {
		throw new Error(error);
	}
};

const getPokemon = async (pokemonUrl) => {
	try {
		const { data } =  await axios.get(pokemonUrl);
		return data;

	} catch (error) {
		throw new Error(error);
	}
};

module.exports = {
	getPokemons,
	getPokemon,
};
