/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

console.log('Hello World from Hello Vue')

//import Vue from 'vue'
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'

import App from '../app.vue'
import Home from '../components/Home'
import Hello from '../components/Hello'


const routes = [
  { path: '/', component: App },
  { path: '/hello', component: Hello }
]

/*
router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/hello', component: Hello },
    { path: '/', component: Home }
  ]
});
*/

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  routes
})

//document.addEventListener('DOMContentLoaded', () => {
  //const el = document.body.appendChild(document.createElement('app'))
  var app = new Vue({
    el: '#app',
    router,
    // render: h => h(App)
  })
//})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>

/*
 import Vue from 'vue/dist/vue.esm'
 import App from '../app.vue'

 document.addEventListener('DOMContentLoaded', () => {
   const app = new Vue({
     el: '#hello',
     data: {
       message: "Can you say hello?"
     },
     components: { App }
   })
 })
*/


// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
