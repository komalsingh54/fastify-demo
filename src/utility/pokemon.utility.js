const { getPokemon } = require('./service/pokemon.service');

const pokemonUtility = (pokemon) => {
    const result =  await getPokemon(pokemon.url);
    return {
        [pokemon.name]: []
    };
    console.log(result);
    return result;
};

module.exports = pokemonUtility;
