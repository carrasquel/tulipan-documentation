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