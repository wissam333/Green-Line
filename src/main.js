import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import main scss file */
import '../src/assets/main.scss'

/* import bootstrap icons */
import 'bootstrap-icons/font/bootstrap-icons.css'

//import AOS
import 'aos/dist/aos.css'

/* import mdb */
import 'mdb-vue-ui-kit/css/mdb.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
