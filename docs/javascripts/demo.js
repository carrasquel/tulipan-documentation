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