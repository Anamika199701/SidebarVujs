import Vue from 'vue'
require("expose-loader?$!jquery")
require("expose-loader?jQuery!jquery")
import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery';


import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'chartist'
import 'chartist-plugin-tooltips'
import 'chartist/dist/chartist.min.css'
import 'chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css'

module.exports = {
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        },
      },
      
    ],
  },
};
module.exports = {
  
  module: {
      rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      }]
  }
};

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
