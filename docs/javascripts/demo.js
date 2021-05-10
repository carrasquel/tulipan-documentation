new Tulipan({
    el: '#demo1-app',
    data: {
        todo: 'clean the room!'
    }
})

new Tulipan({
    el: '#demo2-app',
    data: {
        todos: [
            { text: 'Clean the room!' },
            { text: 'Take out trash!' },
            { text: 'Buy groceries' }
        ],
        display: "none"
    },
    ready: function(){
      this.display = "";
    }
})

new Tulipan({
    el: '#demo3-app',
    data: {
      newTodo: "",
      todos: [
        { text: 'Clean the room!' },
        { text: 'Take out trash!' },
        { text: 'Buy groceries' }
      ]
    },
    methods: {
      addTodo: function(){
        var text = this.newTodo.trim()
        if (text) {
          this.todos.push({ text: text })
          this.newTodo = ''
        }
      }
    }
})

new Tulipan({
    el: '#demo4-app',
    data: {
      newTodo: '',
      todos: [
        { text: 'Clean the room!' },
        { text: 'Take out trash!' },
        { text: 'Buy groceries' }
      ]
    },
    methods: {
      addTodo: function () {
        var text = this.newTodo.trim()
        if (text) {
          this.todos.push({ text: text })
          this.newTodo = ''
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
      }
    }
})

new Tulipan({
  el: '#demo5-app',
  data: {
    dog_url: 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_2508.jpg'
  },
  methods: {
    fetchDog: function () {
      this.$http.get('https://dog.ceo/api/breeds/image/random')
        .then(function (res){
          this.$set("dog_url", res.data.message);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

new Tulipan({
  el: '#demo6-app',
  data: {
  },
  methods: {
    navigate: function (page) {
      this.$router.navigate("/" + page);
    }
  }
})

new Tulipan({
  el: '#bindings1',
  data: {
    message: 'This is an example text'
  }
})

new Tulipan({
  el: '#bindings2',
  data: {
    raw: '<span><b>This is an example text</b></span>'
  }
})

new Tulipan({
  el: '#bindings3',
  data: {
    age: 21,
    older: true,
    cocktail: "Vodka Martini"
  }
})

new Tulipan({
  el: '#bindings4',
  data: {
    message: ''
  }
})

new Tulipan({
  el: '#bindings5',
  data: {
    message: ''
  }
})

new Tulipan({
  el: '#bindings6',
  data: {
    checked: false
  }
})

new Tulipan({
  el: '#bindings7',
  data: {
    checkedLanguages: []
  }
})

new Tulipan({
  el: '#bindings8',
  data: {
    picked: ''
  }
})

new Tulipan({
  el: '#bindings9',
  data: {
    selected: ''
  }
})

new Tulipan({
  el: '#bindings10',
  data: {
    selected: ''
  }
})

new Tulipan({
  el: '#bindings11',
  data: {
    checked: false,
    a: true,
    b: false
  }
})

new Tulipan({
  el: '#bindings12',
  data: {
    pick: '',
    a: 'Apple',
    b: 'Banana',
    c: 'Cherry'
  }
})

new Tulipan({
  el: '#bindings13',
  data: {
    selected:'Python',
    options: [
      {languague: 'PHP'},
      {languague: 'Python'},
      {languague: 'C#'}
    ] 
  }
})

var vm = new Tulipan({
  el: '#properties1',
  data: {
    myAge: 20
  },
  computed: {
    // a computed getter
    myDadAge: function () {
      // `this` points to the vm instance
      return this.myAge + 35
    }
  }
})

var vm = new Tulipan({
  el: '#properties2',
  data: {
    temperatureInCelsius: 24, 
  },
  computed: {
    temperatureInFahrenheit: function(){
        return this.temperatureInCelsius*1.8 + 32
    }  
  }
})

new Tulipan({
  el: '#renderings1',
  data: {
    cocktails: [
        "Bronx",
        "Daiquiri",
        "Manhattan",
        "Tom Collins",
        "Piña Colada"
    ]
  }
})

new Tulipan({
  el: '#renderings2',
  data: {
    cocktails: [
        "Bronx",
        "Daiquiri",
        "Manhattan",
        "Tom Collins",
        "Piña Colada"
    ]
  }
})

new Tulipan({
  el: '#renderings3',
  data: {
    cocktails: [
        "Bronx",
        "Daiquiri",
        "Manhattan",
        "Tom Collins",
        "Piña Colada"
    ]
  },

  methods: {
    display: function(index){
      alert(this.cocktails[index]);
    }
  }
})

new Tulipan({
  el: '#demo8-app',
  data: {
    percents: [38.564, 49.242, 80.231],
    smalls: [0.000231, 0.000034, 0.00000045, 0.2],
    calories: [200, 500, 700, 150]

  },

  filters: {
    sum: function (value) {
      return value.reduce(function(a,b){
        return a + b
      }, 0);
    },

    scientific: function (value) {
      if (value != null){
        return value.toExponential(2);
      }
      return value;
    },

    percent: function (value) {
      if (value != null){
        return value.toFixed(2) + " %";
      }
      return value;
    }
  }
})

new Tulipan({
  el: '#posts',
  route: "/",
  data: {
    posts: []
  },
  methods: {
    after: function(){
      this.fetchPosts();
    },
    fetchPosts: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (res){
          this.$set("posts", res.data.slice(0, 20));
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

new Tulipan({
  el: '#todos',
  route: "/todos",
  data: {
    todos: []
  },
  methods: {
    after: function(){
      this.fetchTodos();
    },
    fetchTodos: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (res){
          this.$set("todos", res.data.slice(0, 20));
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

new Tulipan({
  el: '#users',
  route: "/users",
  data: {
    users: []
  },
  methods: {
    after: function(){
      this.fetchUsers();
    },
    fetchUsers: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res){
          this.$set("users", res.data);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

new Tulipan({
  el: '#demo7-app',
  data: {
  },
  methods: {
    navigate: function (page) {
      this.$router.navigate("/" + page);
    }
  }
})

new Tulipan({
  el: '#posts2',
  route: {
    main: "#demo7-app",
    route: "/posts2"
  },
  data: {
    posts: []
  },
  methods: {
    after: function(){
      this.fetchPosts();
    },
    fetchPosts: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (res){
          this.$set("posts", res.data.slice(0, 20));
        }, function(err){
          console.log(err);
        }) 
    },
    viewPost(index){
      this.$router.navigate("/posts/" + index);
    }
  }
})

new Tulipan({
  el: '#todos2',
  route: {
    main: "#demo7-app",
    route: "/todos2"
  },
  data: {
    todos: []
  },
  methods: {
    after: function(){
      this.fetchTodos();
    },
    fetchTodos: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (res){
          this.$set("todos", res.data.slice(0, 20));
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

new Tulipan({
  el: '#users2',
  route: {
    main: "#demo7-app",
    route: "/users2"
  },
  data: {
    users: []
  },
  methods: {
    after: function(){
      this.fetchUsers();
    },
    fetchUsers: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res){
          this.$set("users", res.data);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

new Tulipan({
  el: '#post-detail',
  route: {
    main: "#demo7-app",
    route: "/posts/:postId"
  },
  data: {
    post: {}
  },
  methods: {
    after: function(params){
      var postId = params.postId;
      this.fetchPost(postId);
    },
    fetchPost: function (postId) {
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(function (res){
          this.$set("post", res.data);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})