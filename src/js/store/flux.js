const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			loadPlanets: async () => {
				let data;

				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					data = await response.json();
				} catch (error) {
					console.log(error);
				}

				setStore({ "planets": data.results });
			},

			getPlanetById: (planetId) => {
				const store = getStore();
				return store.planets.find(({ uid }) => uid === planetId);
			}
		}
	};
};

export default getState;
