# Bindings

User inputs and user interaction with your models are done through bindings, in this guide you will find code examples of bindings between models and form elements suchas inputs.

## Text Binding

The most common form of binding, is text binding, this way we can sync our model with the DOM, the standard format in order to bind text or other data simple data type (integer, float, boolean), is to use double mustache *{{ }}* syntax:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    message: 'This is an example text'
  }
})
```

HTML
```html
<div id="app">
    <span>{{ message }}</span>
</div>
```

Which will render

<div id="bindings1" class="demo">
    <span>{{ message }}</span>
</div>

Keep in mind that you can only bind data within the same context application, DOM child nodes provided by the **el** parameter.

## HTML Binding

Sometimes, we retrieve data from our server or any other API service, in the form of raw HTML. and we need to render this HTML instead of showing it as code. In order to do this we can use the triple mustache syntax *{{{  }}}*:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    raw: '<span><b>This is an example text</b></span>'
  }
})
```

HTML
```html
<div id="app">
    {{{ raw }}}
</div>
```

Which will render

<div id="bindings2" class="demo">
    {{{ raw }}}
</div>

Keep in mind that bindings within the raw HTML are ignored.

## Binding Expressions

We can also do some basic JavaScript expressions in order to process our data before rendering.

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    age: 21,
    older: true,
    cocktail: "Vodka Martini"
  }
})
```

HTML
```html
<div id="app">
   <span>Age: {{ age }}</span>
   <span> - Is older?: {{ older ? 'YES' : 'NO' }}</span>
   <span> - Favorite Cocktail: {{ cocktail.toUpperCase() }}</span>
</div>
```

Which will render

<div id="bindings3" class="demo">
   <span>Age: {{ age }}</span>
   <span> - Is older?: {{ older ? 'YES' : 'NO' }}</span>
   <span> - Favorite Cocktail: {{ cocktail.toUpperCase() }}</span>
</div>

You can also create custom filters and pipe them in order to perform most advanced data processing.s
