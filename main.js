
console.log('START');

var store = {
  state: {
    currentVideoFile: '',
    data: {} // {videoList: [], }
  }
}

const Home = Vue.component('Home', {
  template: '#home-template',
  data: function () {
    return {
      state: store.state,
    }
  },
  methods: {
  },
  mounted() {
    console.log('Home mounted');
  },
  created() {
    
    console.log('Home created', this.$vuetify);
  }
})

const About = Vue.component('About', {
  template: '#about-template',
  data: function () {
    return {
      state: store.state,
    }
  },
  methods: {
  },
  mounted() {
    console.log('About mounted');
  },
  created() {
    console.log('About created');
  }
})

const router = new VueRouter({
  routes: [
    { path: '/welcome', component: Home, alias: '/' },
    { path: '/about', component: About }
  ]
})


function initVue(){
  var vuetify = new Vuetify();
  vuetify.framework.theme.isDark = true;
  console.log({vuetify});

  new Vue({
    el: '#app',
    router,
    vuetify,
    data: () => ({
      leftDrawer: false,
      state: {}
    }),
    created: async () => {
      console.log('App created');
      
      // var data = await init();
      // console.log(data);
      // this.state = data; 
    },
    mounted: async () => {
      console.log('App mounted');
    }
  })
}

async function init(){
  // var fakeList = await fetch('/api/getFakeList').then(r => r.json()); 
  // // var data = await fetch('data.json').then(r => r.json());
  // console.log({fakeList})
  // store.state = {...(store.state), fakeList};
  initVue();
  // setTimeout(async () => {
  // },2000)
}

init();


