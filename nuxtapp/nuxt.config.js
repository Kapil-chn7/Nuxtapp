
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

      '@nuxtjs/vuetify'
  
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    'nuxt-socket-io'
  ],
  // io: {
  //   sockets: [
  //     {
  //       name: 'home',
  //       url: 'http://localhost:3000',
  //       default: true,
  //       vuex:{
  //         mutation:[{progress:'index/actions.functions'}],
        
  //       }
      
  //     },
  //     { name: 'work', url: 'http://somedomain1:3000' },
  //     { name: 'car', url: 'http://somedomain2:3000' },
      
  //   ]
  // },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  // */
  // axios: {
  //   proxy:true
  // },
  // proxy:{
  //     '/us/':'http://localhost:3000/us'
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  serverMiddleware: [
    
    {path:'/us',handler:'~middleware/serverMiddleware/middleware1.js'}
  ],

  namespaces:{
    '/rooms':{
      emitters:['getRooms --> rooms']
    }
  },

  router:{
    routes: [
      {name:'userinfo',
        path:'/Profiles/user',
      component:'pages/Profiles/user'
    }
    ]
  }
  
    
  
}
