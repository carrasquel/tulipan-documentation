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

## Form Input Bindings

### Basics Usage 

Updating data based on input users is pretty easy using Tulipan.js, with the **tp-model** directive you can create two-way data binding on form input and text area elements. Let's see some examples:

#### Text

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    message: ''
  }
})
```

HTML
```html
<div id="app">
  <span>This is a message: {{ message }}</span>
  <br>
  <input type="text" tp-model="message" placeholder="you can edit me!">
</div>
```

Which will render

<div id="bindings4" class="demo">
  <span>This is a message: {{ message }}</span>
  <br>
  <input type="text" tp-model="message" placeholder="you can edit me!">
</div>

#### Multiline text

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    message: ''
  }
})
```

HTML
```html
<div id="app">
  <span>Hi! I'm a message:</span>
  <p>{{ message }}</p>
  <br>
  <textarea tp-model="message" placeholder="You can write a lot of lines!"></textarea>
</div>
```

Which will render

<div id="bindings5" class="demo">
  <span>Hi! I'm a message:</span>
  <p>{{ message }}</p>
  <br>
  <textarea tp-model="message" placeholder="You can write a lot of lines!"></textarea>
</div>

#### Checkbox

Single checkbox:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    checked: false
  }
})
```

HTML
```html
<div id="app">
  <input type="checkbox" id="checkbox" tp-model="checked">{{checked}}
</div>
```

Which will render
<div id="bindings6" class="demo">
  <input type="checkbox" id="checkbox" tp-model="checked">{{checked}}
</div>

Multiple checkbox:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    checkedLanguages: []
  }
})
```

HTML
```html
<div id="app">
  <span>You can pick many languages!</span>
  <br>
  <input type="checkbox" id="python" value="Python" tp-model="checkedLanguages">
  <label for="python">Python</label>
  <input type="checkbox" id="javascript" value="JavaScript" tp-model="checkedLanguages">
  <label for="javascript">JavaScrpit</label>
  <input type="checkbox" id="go" value="Go" tp-model="checkedLanguages">
  <label for="go">Go</label>
  <br>
  <span>I choose: {{ checkedLanguages | json }}</span>
</div>
```

Which will render

<div id="bindings7" class="demo">
  <span>You can pick many languages!</span>
  <br>
  <input type="checkbox" id="python" value="Python" tp-model="checkedLanguages">
  <label for="python">Python</label>
  <input type="checkbox" id="javascript" value="JavaScript" tp-model="checkedLanguages">
  <label for="javascript">JavaScrpit</label>
  <input type="checkbox" id="go" value="Go" tp-model="checkedLanguages">
  <label for="go">Go</label>
  <br>
  <span>I choose: {{ checkedLanguages | json }}</span>
</div>

#### Radio

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    picked: ''
  }
})
```

HTML
```html
<div id="app">
  <span>You can pick only one language!</span>
  <br>
  <input type="radio" id="python" value="Python" tp-model="picked">
  <label for="python">Python</label>
  <br>
  <input type="radio" id="javascript" value="JavaScript" tp-model="picked">
  <label for="javascript">JavaScript</label>
  <br>
  <input type="radio" id="go" value="Go" tp-model="picked">
  <label for="go">Go</label>
  <br>
  <span>I want to study: {{ picked }}</span>
</div>
```

Which will render

<div id="bindings8" class="demo">
  <span>You can pick only one language!</span>
  <br>
  <input type="radio" id="python" value="Python" tp-model="picked">
  <label for="python">Python</label>
  <br>
  <input type="radio" id="javascript" value="JavaScript" tp-model="picked">
  <label for="javascript">JavaScript</label>
  <br>
  <input type="radio" id="go" value="Go" tp-model="picked">
  <label for="go">Go</label>
  <br>
  <span>I want to study: {{ picked }}</span>
</div>

#### Select

Single select:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    selected: ''
  }
})
```

HTML
```html
<div id="app">
<span>You can select one</span>
<br>
<select tp-model="selected">
  <option selected>PHP</option>
  <option>Ruby</option>
  <option>C#</option>
</select>
<span>Selected: {{ selected }}</span>
</div>
```

Which will render

<div id="bindings9" class="demo">
<span>You can select one</span>
<br>
<select tp-model="selected">
  <option selected>PHP</option>
  <option>Ruby</option>
  <option>C#</option>
</select>
<span>Selected: {{ selected }}</span>
</div>

Multiple select:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    selected: ''
  }
})
```

HTML
```html
<div id="app">
<span>You can select some of them</span>
<br>
<select tp-model="selected" multiple>
  <option selected>PHP</option>
  <option>Ruby</option>
  <option>C#</option>
</select>
<span>Selected: {{ selected | json}}</span>
</div>
```

Which will render

<div id="bindings10" class="demo">
<span>You can select some of them</span>
<br>
<select tp-model="selected" multiple>
  <option selected>PHP</option>
  <option>Ruby</option>
  <option>C#</option>
</select>
<span>Selected: {{ selected | json}}</span>
</div>

### Value Bindings

You may notice that for radio, checkbox, and select options, the binding values the `tp-model` are strings, or booleans if we're talking about checkboxes. For example:

```html
<!-- `picked` is a string "Python" when checked -->
<input type="radio" tp-model="picked" value="Python">
<!-- `toggle` is either true or false -->
<input type="checkbox" tp-model="toggle">
<!-- `selected` is a string "JavaScript" when selected -->
<select tp-model="selected">
  <option value="JavaScript">JavaScript</option>
</select>
```
Anyway, sometimes we want to bind a dynamic property on a Tulipan instance. We can do this using `tp-bind`, besides this option allows binding the input value to non-string values.

#### Checkbox

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    checked: false,
    a: true,
    b: false
  }
})
```

HTML
```html
<div id="app">
  <input type="checkbox" id="checkbox" tp-model="checked" tp-bind:true-value="a" tp-bind:false-value="b">{{checked}}
</div>
```

Which will render
<div id="bindings11" class="demo">
  <input type="checkbox" id="checkbox" tp-model="checked" tp-bind:true-value="a" tp-bind:false-value="b">{{checked}}
</div>

#### Radio

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    pick: '',
    a: 'Apple',
    b: 'Banana',
    c: 'Cherry'
  }
})
```

HTML
```html
<div id="app">
  <span>Fruits</span>
  <input type="radio" tp-model="pick" tp-bind:value="a">{{a}}
  <input type="radio" tp-model="pick" tp-bind:value="b">{{b}}
  <input type="radio" tp-model="pick" tp-bind:value="c">{{c}}
    <br>
  <span>I want to buy: {{ pick }}</span>
</div>
```

Which will render

<div id="bindings12" class="demo">
<span>Fruits: </span>
  <input type="radio" tp-model="pick" tp-bind:value="a">{{a}}
  <input type="radio" tp-model="pick" tp-bind:value="b">{{b}}
  <input type="radio" tp-model="pick" tp-bind:value="c">{{c}}
  <br>
  <span>I want to buy: {{ pick }}</span>
</div>

#### Select Options

We can even combine `tp-bind:value` directive with `tp-for` directive to dynamically render the options as follows:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    selected:'Python',
    options: [
      {languague: 'PHP'},
      {languague: 'Python'},
      {languague: 'C#'}
    ] 
  }
})
```

HTML
```html
<div id="app">
<span>You can select one</span>
<br>
<select tp-model="selected">
  <option tp-for="option in options" tp-bind:value="option.languague">{{option.languague}}</option>
</select>
<span>Selected: {{ selected }}</span>
</div>
```


Which will render

<div id="bindings13" class="demo">
<span>You can select one</span>
<br>
<select tp-model="selected">
  <option tp-for="option in options" tp-bind:value="option.languague">{{option.languague}}</option>
</select>
<span>Selected: {{ selected }}</span>
</div>


### Param Attributes 

#### Lazy

You can add the lazy attribute to make sure the `tp-model` syncs the input with the data after change events:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    message: ''
  }
})
```

HTML
```html
<div id="app">
  <span>This is a lazy message: {{ message }}</span>
  <br>
  <input type="text" tp-model="message" lazy placeholder="you can edit me!">
</div>
```

Which will render

<div id="bindings14" class="demo">
  <span>This is a lazy message: {{ message }}</span>
  <br>
  <input type="text" tp-model="message" lazy placeholder="you can edit me!">
</div>

#### Number

This attribute allows numbers only as inputs:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    age: 0
  }
})
```

HTML
```html
<div id="app">
  <span>Please insert your age: {{ age }}</span>
  <br>
  <input tp-model="age" number>
</div>
```

Which will render

<div id="bindings15" class="demo">
  <span>Please insert your age: {{ age }}</span>
  <br>
  <input tp-model="age" number>
</div>

#### Debounce

This param makes it possible to set a minimum delay after each keystroke before the input is synced to the model:

JavaScript
```javascript

new Tulipan({
  el: '#app',
  data: {
    message: ''
  }
})
```

HTML
```html
<div id="app">
  <span>This is a message: {{ message }}</span>
  <br>
  <input type="text" tp-model="message" debounce="500" placeholder="you can edit me!">
</div>
```

Which will render

<div id="bindings16" class="demo">
  <span>This is a message: {{ message }}</span>
  <br>
  <input type="text" tp-model="message" debounce="500" placeholder="you can edit me!">
</div>
