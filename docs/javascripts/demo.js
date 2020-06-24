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
        ]
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

// materialize

$(document).ready(function(){
  $('.tabs').tabs();
});