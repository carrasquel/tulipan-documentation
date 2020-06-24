# Routing

Another important feature in Single Page Application development is routing, this client-side routing allows users to navigate through our application where no full page reload will happend, this way you can use *$http* service to fetch partial information from the server, you can also use history buttons without full page reload.

The routing configuration is done in the istance configuration object, but the navigation is done through the *$router.navigate* service.

## A simple SPA with Routing

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) is a Fake Online REST API for Testing and Prototyping and we will use to show its entities in a SPA.

We will use the following resources from JSONPlaceholder.

| Resource | Description | url |
| ---- | ----------- | ---------------------------- |
| posts | 100 posts | https://jsonplaceholder.typicode.com/posts |
| comments | 500 comments | https://jsonplaceholder.typicode.com/comments?postId=1 |
| todos | 200 todos | https://jsonplaceholder.typicode.com/todos |
| users | 10 users | https://jsonplaceholder.typicode.com/users |

Since these resources have relations, we can create a simple interface to navigate through these relations, like posts and comments related to posts, or posts related to users.

HTML

```html
<div id="app" class="tabset">
  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="tab1" aria-controls="posts" checked>
  <label for="tab1" tp-on:click="navigate('')">Posts</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="tab2" aria-controls="todos">
  <label for="tab2" tp-on:click="navigate('todos')">Todos</label>
  <!-- Tab 3 -->
  <input type="radio" name="tabset" id="tab3" aria-controls="users">
  <label for="tab3" tp-on:click="navigate('users')">Users</label>
</div>

<router-view></router-view>

<section id="posts" class="tab-panel">
  <h2>Posts</h2>
  <ul>
    <li tp-for="post in posts">{{ post.title }}</li>
  </ul>
</section>
<section id="todos" class="tab-panel">
  <h2>Todos</h2>
  <ul>
    <li tp-for="todo in todos">{{ todo.title }}</li>
  </ul>
</section>
<section id="users" class="tab-panel">
  <h2>Users</h2>
  <ul>
    <li tp-for="user in users">{{ user.name }}({{ user.username}}) - {{ user.email }}</li>
  </ul>
</section>
```

JavaScript
```javascript
// navigation app
new Tulipan({
  el: '#app',
  data: {
  },
  methods: {
    navigate: function (page) {
      this.$router.navigate("/" + page);
    }
  }
})

// posts app
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
          this.$set("posts", res.data);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

// todos app
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
          this.$set("todos", res.data);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})

// users app
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
```

Which will render

<div class="demo">
  <div id="demo6-app" class="tabset">
    <!-- Tab 1 -->
    <input type="radio" name="tabset" id="tab1" aria-controls="posts" checked>
    <label for="tab1" tp-on:click="navigate('')">Posts</label>
    <!-- Tab 2 -->
    <input type="radio" name="tabset" id="tab2" aria-controls="todos">
    <label for="tab2" tp-on:click="navigate('todos')">Todos</label>
    <!-- Tab 3 -->
    <input type="radio" name="tabset" id="tab3" aria-controls="users">
    <label for="tab3" tp-on:click="navigate('users')">Users</label>
  </div>

  <router-view></router-view>

  <section id="posts" class="tab-panel">
      <h2>Posts</h2>
      <ul>
        <li tp-for="post in posts">{{ post.title }}</li>
      </ul>
  </section>
  <section id="todos" class="tab-panel">
    <h2>Todos</h2>
    <ul>
      <li tp-for="todo in todos">{{ todo.title }}</li>
    </ul>
  </section>
  <section id="users" class="tab-panel">
    <h2>Users</h2>
    <ul>
      <li tp-for="user in users">{{ user.name }}({{ user.username}}) - {{ user.email }}</li>
    </ul>
  </section>
</div>

## Adding subroutes

Each resource display a list of elements in which each element has its own detailed data and information. The idea now is to display a post body a its comments.

Let's add a new section to show post details

HTML
```html
<section id="post-detail" class="tab-panel">
  <h2>Post</h2>
  <b>{{ post.title }}</b>
  <p>{{ post.body }}</p>
</section>
```

Let's create a new Tulipan instance to handle this template

JavaScript
```javascript
new Tulipan({
  el: '#post-detail',
  route: "/posts/:postId"
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
```

Let's add a link to navigate to each post


HTML
```html
<section id="posts" class="tab-panel">
  <h2>Posts</h2>
  <ul>
    <li tp-for="post in posts">
    {{ post.title }}
    <a href="javascript:void(0)" tp-on:click="viewPost(post.id)">View</a>
    </li>
  </ul>
</section>
```

and a fix to the posts JavaScript application in order to navigate on click.

JavaScript
```javascript

new Tulipan({
  el: '#posts',
  route: "/"
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
```

All these will render the following.

<div class="demo">
  <div id="demo7-app">
    <div class="tabset">
      <!-- Tab 1 -->
      <input type="radio" name="tabset" id="tab4" aria-controls="posts2" checked>
      <label for="tab4" tp-on:click="navigate('posts2')">Posts</label>
      <!-- Tab 2 -->
      <input type="radio" name="tabset" id="tab5" aria-controls="todos2">
      <label for="tab5" tp-on:click="navigate('todos2')">Todos</label>
      <!-- Tab 3 -->
      <input type="radio" name="tabset" id="tab6" aria-controls="users2">
      <label for="tab6" tp-on:click="navigate('users2')">Users</label>
    </div>

    <router-view></router-view>
  </div>

  <section id="posts2" class="tab-panel">
      <h2>Posts</h2>
      <ul>
        <li tp-for="post in posts">
        {{ post.title }}
        <a href="javascript:void(0)" tp-on:click="viewPost(post.id)">View</a>
        </li>
      </ul>
  </section>
  <section id="todos2" class="tab-panel">
    <h2>Todos</h2>
    <ul>
      <li tp-for="todo in todos">{{ todo.title }}</li>
    </ul>
  </section>
  <section id="users2" class="tab-panel">
    <h2>Users</h2>
    <ul>
      <li tp-for="user in users">{{ user.name }}({{ user.username}}) - {{ user.email }}</li>
    </ul>
  </section>
  <section id="post-detail" class="tab-panel">
    <h2>Post</h2>
    <b>{{ post.title }}</b>
    <p>{{ post.body }}</p>
  </section>
</div>

## Handling Parameters

## Handling Query Strings