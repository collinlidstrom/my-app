
// <--------- path Values --------->
// https://pokeapi.co/api/v2


const path = {
    "ability": "https://pokeapi.co/api/v2/ability/",
    "berry": "https://pokeapi.co/api/v2/berry/",
    "berry-firmness": "https://pokeapi.co/api/v2/berry-firmness/",
    "berry-flavor": "https://pokeapi.co/api/v2/berry-flavor/",
    "characteristic": "https://pokeapi.co/api/v2/characteristic/",
    "contest-effect": "https://pokeapi.co/api/v2/contest-effect/",
    "contest-type": "https://pokeapi.co/api/v2/contest-type/",
    "egg-group": "https://pokeapi.co/api/v2/egg-group/",
    "encounter-condition": "https://pokeapi.co/api/v2/encounter-condition/",
    "encounter-condition-value": "https://pokeapi.co/api/v2/encounter-condition-value/",
    "encounter-method": "https://pokeapi.co/api/v2/encounter-method/",
    "evolution-chain": "https://pokeapi.co/api/v2/evolution-chain/",
    "evolution-trigger": "https://pokeapi.co/api/v2/evolution-trigger/",
    "gender": "https://pokeapi.co/api/v2/gender/",
    "generation": "https://pokeapi.co/api/v2/generation/",
    "growth-rate": "https://pokeapi.co/api/v2/growth-rate/",
    "item": "https://pokeapi.co/api/v2/item/",
    "item-attribute": "https://pokeapi.co/api/v2/item-attribute/",
    "item-category": "https://pokeapi.co/api/v2/item-category/",
    "item-fling-effect": "https://pokeapi.co/api/v2/item-fling-effect/",
    "item-pocket": "https://pokeapi.co/api/v2/item-pocket/",
    "language": "https://pokeapi.co/api/v2/language/",
    "location": "https://pokeapi.co/api/v2/location/",
    "location-area": "https://pokeapi.co/api/v2/location-area/",
    "machine": "https://pokeapi.co/api/v2/machine/",
    "move": "https://pokeapi.co/api/v2/move/",
    "move-ailment": "https://pokeapi.co/api/v2/move-ailment/",
    "move-battle-style": "https://pokeapi.co/api/v2/move-battle-style/",
    "move-category": "https://pokeapi.co/api/v2/move-category/",
    "move-damage-class": "https://pokeapi.co/api/v2/move-damage-class/",
    "move-learn-method": "https://pokeapi.co/api/v2/move-learn-method/",
    "move-target": "https://pokeapi.co/api/v2/move-target/",
    "nature": "https://pokeapi.co/api/v2/nature/",
    "pal-park-area": "https://pokeapi.co/api/v2/pal-park-area/",
    "pokeathlon-stat": "https://pokeapi.co/api/v2/pokeathlon-stat/",
    "pokedex": "https://pokeapi.co/api/v2/pokedex/",
    "pokemon": "https://pokeapi.co/api/v2/pokemon/",
    "pokemon-color": "https://pokeapi.co/api/v2/pokemon-color/",
    "pokemon-form": "https://pokeapi.co/api/v2/pokemon-form/",
    "pokemon-habitat": "https://pokeapi.co/api/v2/pokemon-habitat/",
    "pokemon-shape": "https://pokeapi.co/api/v2/pokemon-shape/",
    "pokemon-species": "https://pokeapi.co/api/v2/pokemon-species/",
    "region": "https://pokeapi.co/api/v2/region/",
    "stat": "https://pokeapi.co/api/v2/stat/",
    "super-contest-effect": "https://pokeapi.co/api/v2/super-contest-effect/",
    "type": "https://pokeapi.co/api/v2/type/",
    "version": "https://pokeapi.co/api/v2/version/",
    "version-group": "https://pokeapi.co/api/v2/version-group/"
}


export const getPokemon = (path) => {
  const response = fetch(`${path}`).then((response) => response.json());
  console.log(response)
  return response;
};

export const getPokemons = () => {
  return fetch(path).then((response) => response.json());
};

export const getMorePokemons = (offset) => {
  return fetch(`${path}?offset=${offset}&limit=20`).then((response) => response.json());
};

const LOCAL_path = 'http://localhost:3000/api/v1'

export const login = (credentials) => {
  return fetch(`${LOCAL_path}/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }).then(r => r.json())
}

console.log('login' + login);
