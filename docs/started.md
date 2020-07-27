
# Getting Started

You can start coding with Tulipan.js fast and simple, let's dive into the most basic with Tulipan, let's code our first application. A to-do list app.

## Data bindings

The first thing to grasp is the binding of the model's data into our HTML. Since Tulipan uses DOM templating rules we can start with the following code.

HTML
```html

<div id="app">
  {{ todo }}
</div>

```

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    todo: 'clean the room!'
  }
})

```

Which will render

<div id="app" class="demo">
  clean the room!
</div>

## Two-way binding

Now we want to render based on user interaction, we can use an input to bind the user input into the DOM.

```html
<div id="app">
  <p>{{ todo }}</p>
  <input tp-model="todo">
</div>
```

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    todo: 'clean the room!'
  }
})
```

Which will render

<div id="demo1-app" class="demo">
  <input tp-model="todo">
  <p>{{ todo }}</p>
</div>

the main difference in this case is that we used a html custom attribute *tp-model*, this attribute is inspected by Tulipan to perform the two-way binding. In the following examples we will use this same format *tp-attr* to perform other actions.

## Binding sequences

Sometimes we need to render a list of items, in our case is a list of to-dos.

HTML
```html
<div id="app">
  <ul>
    <li tp-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>
```

JavaScript
```javascript
new Tulipan({
  el: '#app',
  data: {
    todos: [
      { text: 'Clean the room!' },
      { text: 'Take out trash!' },
      { text: 'Buy groceries' }
    ]
  }
})
```

Which will render

<div id="demo2-app" class="demo"  style="visibility: hidden" tp-bind:style="{ visibility: visible }">
  <ul>
    <li tp-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>
<div id="demo2-pdf" class="demo" style="visibility: visible" tp-bind:style="{ visibility: visible }">
  <ul>
    <li>
      Clean the room!
    </li><li>
      Take out trash!
    </li><li>
      Buy groceries
    </li>
  </ul>
</div>

As you can see we can also bind properties from our data, and using the *tp-for* attribute we can tell Tulipan to iterate over a set of elements.

## Adding elements dynamically

Let's now try to add new elements with our input.

HTML
```html
<div id="app">
  <span>Enter to-do: </span><input tp-model="newTodo" tp-on:keyup.enter="addTodo">
  <ul>
    <li tp-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>
```

JavaScript
```javascript
new Tulipan({
  el: '#app',
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
```

Which will render the following

<div id="demo3-app" class="demo">
  <span>Enter to-do: </span><input tp-model="newTodo" tp-on:keyup.enter="addTodo">
  <ul>
    <li tp-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>

This time you can add new to-dos to the list by pressing enter on the text input. A new thing introduced in this exercise was the capability of adding a custom method to our *ViewModel*, and trigger this method through user input.

## Let's remove some elements

We now have graps some of the basics in our application, let's put some code to remove those finished to-dos.

HTML
```html
<div id="app">
  <span>Enter to-do: </span><input tp-model="newTodo" tp-on:keyup.enter="addTodo">
  <ul>
    <li tp-for="todo in todos">
      <span>{{ todo.text }}</span>
      <button tp-on:click="removeTodo($index)">X</button>
    </li>
  </ul>
</div>
```

JavaScript
```javascript
new Tulipan({
  el: '#app',
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
```

Which will render

<div id="demo4-app" class="demo">
  <span>Enter to-do: </span><input tp-model="newTodo" tp-on:keyup.enter="addTodo">
  <ul>
    <li tp-for="todo in todos">
      <span>{{ todo.text }}</span>
      <button tp-on:click="removeTodo($index)">X</button>
    </li>
  </ul>
</div>

pretty cool right?

This was the basic on Tulipan.js, in the following sections you will find how to perform more advanced front-end features. So you can create Single Page Applications as soon as you can say Tulipan.