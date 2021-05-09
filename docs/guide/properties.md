# Properties

Tulipan.js lets you use computed properties to make any logic that requires more than one expression. This is very convenient because to avoid performance issues Tulipan.js limits binding expressions to only one, which could be restrictive.

## Computed properties

With Tulipan.js we can declare computed properties. 

Let's declare this one called myDadAge, which is 35 by default, the age my dad was when I was born. He gets older as I do, so to calculate his current age we can use a getter function for the property vm.myDadAge:


JavaScript
```javascript

var vm = new Tulipan({
  el: '#app',
  data: {
    myAge: 20
  },
  computed: {
    // a computed getter
    myDadAge: function () {
      // `this` points to the vm instance
      return this.myAge + 35
    }
  }
})
```

HTML
```html
<div id="app">
  I am {{ myAge }} years old, and my dad is {{ myDadAge }} years old.
</div>
```

Which will render

<div id="properties1" class="demo">
    I am {{ myAge }} years old, and my dad is {{ myDadAge }} years old.
</div>

Tulipan is aware that vm.myDadAge depends on vm.myAge, so it will update any bindings that depends on vm.myDadAge when vm.myAge changes.

Computed properties can also be used when you have data that changes based on other data as follows:

JavaScript
```javascript

var vm = new Tulipan({
  el: '#app',
  data: {
    temperatureInCelsius: 24, 
  },
  computed: {
    temperatureInFahrenheit: function(){
        return this.temperatureInCelsius*1.8 + 32
    }  
  }
})
```

HTML
```html
<div id="app">
  The temperature is {{ temperatureInFahrenheit }}°F.
</div>
```

Which will render

<div id="properties2" class="demo">
    The temperature is {{ temperatureInFahrenheit }}°F.
</div>


## Computed setters

Computed properties are by default getter-only, but you can also provide a setter when you need it:

JavaScript
```javascript

var vm = new Tulipan({
  el: '#app',
  data: {
    firstName: 'Daniel', 
    lastName: 'Smith',
    role: 'Engineer',
    currentProject: 'Dogs App'
  },
  computed: {
    employee: {
    // getter
    get: function () {
      return this.role + ' ' + this.firstName + ' ' + this.lastName + ', currently working on ' + this.currentProject
    },
    // setter
    set: function (newValue) {
      var dataItems = newValue.split(' ')
      this.firstName = dataItems[0]
      this.lastName = dataItems[dataItems.length - 3]
      this.role = dataItems[dataItems.length - 2]
      this.currentProject = dataItems[dataItems.length - 1]
    }
  }
}
})
```

HTML
```html
<div id="app">
  {{ employee }}
</div>
```

Which will render

<div id="properties3" class="demo">
    {{ employee }} 
</div>