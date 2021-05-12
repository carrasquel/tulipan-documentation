# Renderings

With Tulipan you can render any data type using the magic words reserved for development. In this guide you can find from simple rendering to conditional rendering.

## List Renderings

Tulipan carries custom directives so you can apply a bunch of things to the DOM. One directive is **tp-for** which allows you to render sequential elements.

JavaScript
```javascript

new Tulipan({
  el: '#app',
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
```

HTML
```html
<div id="app">
  <ul>
    <li tp-for="cocktail in cocktails">
      {{ cocktail }}
    </li>
  </ul>
</div>
```

Which will render

<div id="renderings1" class="demo">
  <ul>
    <li tp-for="cocktail in cocktails">
      {{ cocktail }}
    </li>
  </ul>
</div>

You can also provide an argument to render the index of the element.

JavaScript
```javascript

new Tulipan({
  el: '#app',
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
```

HTML
```html
<div id="app">
  <ul>
    <li tp-for="(index, cocktail) in cocktails">
      {{ index }} - {{ cocktail }}
    </li>
  </ul>
</div>
```

Which will render

<div id="renderings2" class="demo">
  <ul>
    <li tp-for="(index, cocktail) in cocktails">
      {{ index }} - {{ cocktail }}
    </li>
  </ul>
</div>

This way you can use it to perform user actions in a specific element.

JavaScript
```javascript

new Tulipan({
  el: '#app',
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
```

HTML
```html
<div id="app">
  <ul>
    <li tp-for="(index, cocktail) in cocktails">
      {{ index }} - {{ cocktail }} (<span tp-on:click="display(index)"><b>Click Me!</b></span>)
    </li>
  </ul>
</div>
```

Which will render

<div id="renderings3" class="demo">
  <ul>
    <li tp-for="(index, cocktail) in cocktails">
      {{ index }} - {{ cocktail }} (<span tp-on:click="display(index)"><b>Click Me!</b></span>)
    </li>
  </ul>
</div>

## Conditional Rendering 

Tulipan.js makes it possible to use conditional rendering to toggle the presence of any element in the DOM based on certain conditions. It uses **tp-if**, **tp-show**, and **tp-else** for this purpose.

### tp-if and tp-else

The `tp-if` can be used to conditionally render elements or blocks, you can use it to assign boolean variables to toggle elements in the DOM based on their value as follows:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data:{
    yes: true
  }
})
```

HTML
```html
<div id="app">
  <span>Hi! Can you see me?</span>
  <br>
  <strong tp-if="yes">Yes, I can see you!</strong>
</div>
```

Which will render

<div id="renderings4", class="demo">
  <span>Hi! Can you see me?</span>
  <br>
  <strong tp-if="yes">Yes, I can see you!</strong>
</div>


The `tp-else` directive can be used to render a block that does not satisfy the condition of the `tp-if` directive. To work, this directive must immediately follow the `tp-if` directive. Let's check out this example:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data:{
    yes: false
  }
})
```

HTML
```html
<div id="app">
  <span>Hi! Can you see me?</span>
  <br>
  <strong tp-if="yes">Yes, I can see you!</strong>
  <strong tp-else>No, I can't see you!</strong>
</div>
```

Which will render

<div id="renderings5", class="demo">
  <span>Hi! Can you see me?</span>
  <br>
  <strong tp-if="yes">Yes, I can see you!</strong>
  <strong tp-else>No, I can't see you!</strong>
</div>

Sometimes you may want to toggle more than one element, but `tp-if` has to be attached to a single element. So in those cases, you can use `tp-if` on a `<template>` element as follows:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data:{
    showTemplate: true
  }
})
```

HTML
```html
<div id="app">
  <template tp-if="showTemplate">
    <h1>Hi! This is a hidden template</h1>
    <p>You can see me because showTemplate is true</p>
  </template>
</div>
```
Which will render

<div id="renderings6" class="demo">
  <template tp-if="showTemplate">
    <h1>Hi! This is a hidden template</h1>
    <p>You can see me because showTemplate is true</p>
  </template>
</div>

### tp-show

The directive `tp-show` is another option for conditionally displaying elements, its usage is pretty much the same as `tp-if` as you may expect:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data:{
    yes: true
  }
})
```

HTML
```html
<div id="app">
  <span>Did you say hello?</span>
  <br>
  <strong tp-show="yes">Yes, I say hello!</strong>
</div>
```

Which will render

<div id="renderings7" class="demo">
  <span>Did you say hello?</span>
  <br>
  <strong tp-show="yes">Yes, I say hello!</strong>
</div>

### tp-if or tp-show?

Despite the usage is almost the same, `tp-if` and `tp-show` have differences you have to know to use them properly.

When using `tp-if`, Tulipan.js performs a partial compilation/teardown process because the template content inside `tp-if` can also contain data bindings or child components. Such a process ensures that these elements are properly destroyed and re-created during toggles.

The directive `tp-if` is also lazy, which means if the initial condition is false on the initial render, the partial compilation won't start until it becomes true for the first time. The compilation will be cached subsequently. 

In contrast, `tp-show` is much simpler since the element is always compiled and preserved.

Overall, `tp-if` has higher toggle costs while `tp-show` has higher initial render costs. It's recommended to use `tp-show` if you have to toggle something frequently, otherwise `tp-if`.

