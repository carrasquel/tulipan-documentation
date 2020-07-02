# Storing

Tulipan.js let's you store data in the browser, the basic function is to store key/value pairs that you can associate with your application session or state. Primary use of browser storage is to reduce overloading the server with http requests.

## Simple usage

A Tulipan instance exposes store through the *$store* especial property, exposing a simple API for cross-browser local storage:

```js
vm = new Tulipan({});

// Store current user
vm.$store.set('user', { name:'Napoleon' });

// Get current user
vm.$store.get('user');

// Remove current user
vm.$store.remove('user');

// Clear all keys
vm.$store.clearAll();

// Loop over all stored values
vm.$store.each(function(value, key) {
  console.log(key, '==', value)
})
```

It is recommender to use it inside your web requests to check for data expiration.



