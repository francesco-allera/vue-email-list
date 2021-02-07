new Vue({
	el: '#app',
	data: {
		randomMails: []
	},
	mounted() {
		const self = this;
		for (let i = 0; i < 10; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(function(response) {
					self.randomMails.push(response.data);
				}
			)
		}
	}
});
Vue.config.devtools = true;
