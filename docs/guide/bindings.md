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

You can also create custom filters and pipe them in order to perform most advanced data processing.

## Class and Style Bindings

We often have to manipulate an element's class and its inline styles. Tulipan.js handle them using **tp-bind** providing special enhancements when is used for class and style, which avoid string manipulation errors. Besides Strings, the expressions can also evaluate to Objects or Arrays.

### Binding HTML Classes

We can pass an Object to `tp-bind:class` to change classes on the fly. Observe that the `tp-bind:class` directive can co-exist with the plain `class` attribute:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    showAlertSuccess: true,
    showAlertDanger: false
  }
})
```

HTML
```html
<div id="app">
  <div class="static" tp-bind:class="{'alert alert-success' : showAlertSuccess, 'alert alert-danger' : showAlertDanger}"></div>
</div>
```

Which will render

```html
<div calss="static alert alert-success"></div>
```

Keep in mind that if `showAlertSuccess` and `showAlertDanger` changes, the class list will too.

Let's say that `showAlertSuccess` turns into `false` and `showAlertDanger` is `true`, then the class list will become `"static alert alert-danger"`. 

You can also bind an Object as follows:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    myObject:{ 
    'showAlertSuccess': true,
    'showAlertDanger': false
    }
  }
})
```

HTML
```html
<div id="app">
  <div class="static" tp-bind:class="myObject"></div>
</div>
```

This will render the same as above.

We can pass an Array to `tp-bind:class` to apply a list of classes:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    showAlertSuccess: 'alert alert-success',
    showActive: 'active'
    showClose: 'close'
  }
})
```

HTML
```html
<div id="app">
  <div tp-bind:class="[showAlertSuccess, showActive, showClose]"></div>
</div>
```

Which will render

```html
<div calss="alert alert-success active close"></div>
```

### Binding Inline Styles

With Tulipan.js you can bind styles using `tp-bind:style` directive, which has pretty easy syntax. Despite it's a JavaScript object it looks like CSS. Let's check out this example:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    activeColor: 'red',
    fontSize: 30
  }
})
```

HTML
```html
<div id="app">
  <div tp-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</div>
```

Which will render

```html
<div style="color: red; font-size: 30px;"></div>
```

We can bind in a cleaner way using a style object:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    myStyleObject:{ 
    color: 'red',
    fontSize: '30px'
    }
  }
})
```

HTML
```html
<div id="app">
  <div tp-bind:style="myStyleObject"></div>
</div>
```
This will render the same. 

We can observe that Object syntax is used in conjunction with computed properties to return Objects.

It is also posible to apply many style objects to the same element using Array syntax for `tp-bind:style` directive:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    myFirstStyleObject:{ 
    color: 'green',
    fontSize: '50px'
    },
    mySecondStyleObject:{
      fontFamily: 'verdana',
      textAlign: 'center'
    }
  }
})
```

HTML
```html
<div id="app">
  <div tp-bind:style="[myFirstStyleObject, mySecondStyleObject]"></div>
</div>
```

Which will render

```html
<div style="color: green; font-size: 50px; font-family: verdana; text-align: center;"></div>
```