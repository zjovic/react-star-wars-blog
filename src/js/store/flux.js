const getState = ({ getStore, setStore }) => {
	return {
		store: {
			categories: ['Planets', 'Characters', 'Starships'],
			planets: [],
			characters: [],
			starships: [],
			favourites: [],
			loading: false
		},

		actions: {
			fetchPlanets: async () => {
				let planets;

				try {
					const planetsResponse = await fetch('https://www.swapi.tech/api/planets');
					planets = await planetsResponse.json();
				} catch (error) {
					console.log(error);
				}

				const planetsWithId = planets.results.map((planet) => ({ ...planet, uid: `planet-${planet.uid}` }));

				const store = getStore();
				const currPlanets = [...store.planets, ...planetsWithId];

				setStore({ 'planets': currPlanets });
			},

			fetchCharacters: async () => {
				let characters;

				try {
					const charactersResponse = await fetch('https://www.swapi.tech/api/people');
					characters = await charactersResponse.json();
				} catch (error) {
					console.log(error);
				}

				const charactersWithId = characters.results.map((character) => ({ ...character, uid: `character-${character.uid}` }));

				const store = getStore();
				const currCharacters = [...store.characters, ...charactersWithId];

				setStore({ 'characters': currCharacters });
			},

			fetchStarships: async () => {
				let starships;

				try {
					const starshipsResponse = await fetch('https://www.swapi.tech/api/starships');
					starships = await starshipsResponse.json();
				} catch (error) {
					console.log(error);
				}

				const starshipsWithId = starships.results.map((starship) => ({ ...starship, uid: `starship-${starship.uid}` }));

				const store = getStore();
				const currStarships = [...store.starships, ...starshipsWithId];

				setStore({ 'starships': currStarships });
			},

			fetchItem: async ({ id, category }) => {
				let data, catMask;

				if (category === 'Planets') {
					catMask = 'planets';
				} else if (category === 'Characters') {
					catMask = 'people'
				} else if (category === 'Starships') {
					catMask = 'starships'
				}

				try {
					const response = await fetch(`https://www.swapi.tech/api/${catMask}/${id}`)
					data = await response.json();
				} catch (error) {
					console.log(error);
				}

				return data.result;
			},

			addToFavourites: (favourite) => {
				const store = getStore();
				const currFavs = store.favourites;

				setStore({ 'favourites': [...currFavs, favourite] });
			},

			removeFavourite: (id) => {
				const store = getStore();
				const currFavs = store.favourites.filter(favourite => favourite.uid !== id);

				setStore({ 'favourites': currFavs });
			},

			setLoading: (bool) => {
				setStore({ 'loading': bool });
			}
		}
	};
};

export default getState;
