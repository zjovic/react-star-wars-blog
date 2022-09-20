const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			starships: [],
			favourites: []
		},
		actions: {
			getPlanets: async () => {
				let data;

				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					data = await response.json();
				} catch (error) {
					console.log(error);
				}

				setStore({ "planets": data.results });
			},

			getCharacters: async () => {
				let data;

				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					data = await response.json();
				} catch (error) {
					console.log(error);
				}

				setStore({ "characters": data.results });
			},

			getStarships: async () => {
				let data;

				try {
					const response = await fetch("https://www.swapi.tech/api/starships");
					data = await response.json();
				} catch (error) {
					console.log(error);
				}

				setStore({ "starships": data.results });
			},

			getPlanetById: (planetId) => {
				const store = getStore();
				return store.planets.find(({ uid }) => uid === planetId);
			},

			addToFavourites: (favourite) => {
				const store = getStore();
				const currentFavs = store.favourites;

				setStore({ "favourites": [...currentFavs, favourite] });
			}
		}
	};
};

export default getState;
