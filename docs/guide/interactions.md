# User Interaction 

In many cases when we're building a dynamic website it should have the ability to respond to *events*. It could be from a button clicked by the user till submits a form, these can be handled with Tulipan using the **tp-on** directive.


## Method Handler

Tulipan provides the `tp-on` directive to listen to DOM events:

JavaScript
```javascript

 var vm = new Tulipan({
  el: '#app',
  data: {
    name: 'Tulipan.js'
  },
  methods: {
    sayHello: function (event) {
      alert('Hello! welcome to ' + this.name + '!');
      alert(event.target.tagName);
    }
  }
})
```

HTML
```html
<div id="app">
    <button tp-on:click="sayHello">Touch this</button>
</div>
```

Wich will render

<div id="interactions1" class="demo">
  <button tp-on:click="sayHello">Touch this</button>
</div>

We can also bind inline JavaScript statements instead of a method name:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  methods: {
    print: function (msg) {
      alert(msg)
    }
  }
})
```

HTML
```html
<div id="app">
  <button tp-on:click="print('Tulipan is great!')">Push me first!</button>
  <br>
  <button tp-on:click="print('Thanks for using it!')">Push me</button>
</div>
```

Which will render

<div id="interactions2" class="demo">
  <button tp-on:click="print('Tulipan is great!')">Push me first!</button>
  <br>
  <button tp-on:click="print('Thanks for using it!')">Push me</button>
</div>

## Event Modifiers

Sometimes we need to have access to the original DOM event, we do this using the `$event` variable passed into a method, although it could be inconvenient:

JavaScript
```javascript
new Tulipan ({
    el: '#app',
    methods: {
        print: function (msg, event) {
          // now we have access to the native event
          event.preventDefault()
        }
    }
})
```

HTML
```html
<div id="app">
<button tp-on:click="print('hello!', $event)">Touch this</button>
<div>
```

Tulipan.js provides two event modifiers for `tp-on: .prevent` and `.stop`, which replace the use (inside event handlers) of `event.preventDefault()` and `event.stopPropagation()`, respectively:

```html
<!-- the click event's propagation will be stopped -->
<a tp-on:click.stop="print('something')"></a>
<!-- the submit event will no longer reload the page -->
<form tp-on:submit.prevent="onSubmit"></form>
<!-- modifiers can be chained -->
<a tp-on:click.stop.prevent="print('something else')">
<!-- just the modifier -->
<form tp-on:submit.prevent></form>
```

## Key Modifiers

When listening for keyboard events, we often need to check for key codes. Instead of remembering all of them, a better choice is the use of aliases, so Tulipan.js provides them for the most commonly used keys:

```html
<!-- only call vm.submit() when the keyCode is 13 -->
<input tp-on:keyup.13="submit">
<!-- same as above -->
<input tp-on:keyup.enter="submit">
```
Here’s the full list of key modifier aliases:

*    enter
*    tab
*    delete (captures both “Delete” and, if the keyboard has it, “Backspace”)
*    esc
*    space
*    up
*    down
*    left
*    right

