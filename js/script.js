const calls = 10;
const api = 'https://flynn.boolean.careers/exercises/api/random/mail';

// js vanilla
const vanilla = document.querySelector('#vanilla ul');

for (let i = 0; i < calls; i++) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200)
            vanilla.innerHTML += '<li>'+ JSON.parse(this.response).response +'</li>';
    };

    xhr.open('GET', api, true);
    xhr.send();
}

// jquery
for (let i = 0; i < calls; i++) {
    $.ajax({
        url: api,
        method: 'GET',
        success: function(data, status) {
            $('#jquery ul').append('<li>'+ data.response +'</li>');
        }
    });
}

// vue
new Vue({
    el: '#vue',
    data: {
        emails: []
    },
    mounted() {
        const self = this;
        for (let i = 0; i < calls; i++) {
            axios.get(api).then((resp) => self.emails.push(resp.data.response));
        }
    }
});
Vue.config.devtools = true;