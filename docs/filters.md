# Filters

Data can be unprocessed and raw, and you might want to render data in a different format, filters allow you to process data right before rendering.

Let's take a look at the following example.

JavaScript
```javascript
new Tulipan({
  el: '#app',
  data: {
    percents: [38.564, 49.242, 80.231],
    smalls: [0.000231, 0.000034, 0.00000045, 0.2],
    calories: [200, 500, 700, 150]

  },
  methods: {
  },

  filters: {
    sum: function (value) {
      return value.reduce(function(a,b){
        return a + b
      }, 0);
    },

    scientific: function (value) {
      if (value != null){
        return value.toExponential(2);
      }
      return value;
    },

    percent: function (value) {
      if (value != null){
        return value.toFixed(2) + " %";
      }
      return value;
    }
  }
})
```

HTML
```html
<div id="app">
  Percents:
  <ul>
    <li tp-for="value in percents">
      {{ value | percent }}
    </li>
  </ul>
  Scientific:
  <ul>
    <li tp-for="value in smalls">
      {{ value | scientific }}
    </li>
  </ul>
  Sum:
  <ul>
    <li>{{ calories | sum }}</li>
  </ul>
</div>
```

Which will render
<div id="demo8-app" class="demo">
  Percents:
  <ul>
    <li tp-for="value in percents">
      {{ value | percent }}
    </li>
  </ul>
  Scientific:
  <ul>
    <li tp-for="value in smalls">
      {{ value | scientific }}
    </li>
  </ul>
  Sum:
  <ul>
    <li>{{ calories | sum }}</li>
  </ul>
</div>

As you can see in the JavaScript code, you can define you own filters using custom defined functions in the *filters* properties for the Tulipan instance.

You can also pipe your filters together using the pipe *|* operator, this will send the output of one filter the input of the next filter.