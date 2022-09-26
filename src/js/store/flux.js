const getState = ({ getStore, getActions, setStore }) => {
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
			fetchData: async () => {
				let planets, characters, starships;

				try {
					const planetsResponse = await fetch('https://www.swapi.tech/api/planets');
					planets = await planetsResponse.json();
					const charactersResponse = await fetch('https://www.swapi.tech/api/people');
					characters = await charactersResponse.json();
					const starshipsResponse = await fetch('https://www.swapi.tech/api/starships');
					starships = await starshipsResponse.json();
				} catch (error) {
					console.log(error);
				}

				const store = getStore();

				const currPlanets = [...store.planets, ...planets.results];
				const currCharacters = [...store.characters, ...characters.results];
				const currStarships = [...store.starships, ...starships.results];

				setStore({ 'planets': currPlanets });
				setStore({ 'characters': currCharacters });
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

			getPlanetById: (id) => {
				const store = getStore();
				return store.planets.find(({ uid }) => uid === id);
			},

			getCharacterById: (id) => {
				const store = getStore();
				return store.characters.find(({ uid }) => uid === id);
			},

			getStarshipById: (id) => {
				const store = getStore();
				return store.starships.find(({ uid }) => uid === id);
			},

			addToFavourites: (favourite) => {
				const store = getStore();
				const currentFavs = store.favourites;

				setStore({ 'favourites': [...currentFavs, favourite] });
			},

			setLoading: (bool) => {
				setStore({ 'loading': bool });
			}
		}
	};
};

export default getState;
