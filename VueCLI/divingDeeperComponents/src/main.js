import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

// não devemos colocar todos os componentes no arquivo inicial. 
// navegador carrega todos estes arquivos ao recarregado

app.mount('#app');
