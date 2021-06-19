import Vue from "vue";

const loadFilterData = ({ commit }) => {
	return new Promise((resolve, reject) => {
		Vue.prototype.$http
			.get(`${Vue.prototype.$hostname}/search/filter-data`, {})
			.then(
				(response) => {
					response.data["other"] = [
						{
							id: "remote",
							label: "work remotely",
						},
						{
							id: "liked",
							label: "like profiles only",
						},
						{
							id: "deceased",
							label: "deceased member",
						},
					];
					commit("SET_FILTER_DATA", response.data);
					resolve();
				},
				(error) => {
					reject(error);
				}
			);
	});
};

const filterData = ({ commit }, selectedFilters) => {
	return new Promise((resolve, reject) => {
		Vue.prototype.$http
			.post(`${Vue.prototype.$hostname}/search/load-table`, selectedFilters)
			.then(
				(response) => {
					commit("SET_FILTERED_MEMBERS", response.data);
					resolve();
				},
				(error) => {
					reject(error);
				}
			);
	});
};

export default {
	loadFilterData,
};
