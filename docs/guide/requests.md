# Web Requests

Our data in a Single Page Application often comes from a back-end service or RESTful API, or any other HTTP service. In order to retrieve information from any web source, Tulipan.js has integrated a small but yet complete library to perform asynchronous requests. Let's practice with a simple GET requests to show dogs images.

## GET from [Dog API](https://dog.ceo/dog-api/)

HTML

```html
<div id="app">
  <button tp-on:click="fetchDog()">Click Me!</button>
  <br>
  <img src="{{ dog_url }}" alt="Dog"> 
</div>
```

JavaScript
```javascript
new Tulipan({
  el: '#app',
  data: {
    dog_url: 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_2508.jpg'
  },
  methods: {
    fetchDog: function () {
      this.$http.get('https://dog.ceo/api/breeds/image/random')
        .then(function (res){
          this.$set("dog_url", res.data.message);
        }, function(err){
          console.log(err);
        }) 
    }
  }
})
```

Which will render

<div id="demo5-app" class="demo">
  <button tp-on:click="fetchDog()">Click Me!</button>
  <br>
  <img src="{{ dog_url }}" alt="Dog"> 
</div>

