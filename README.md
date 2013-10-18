# stream-entropy

Measures the shannon entropy of a stream of Javascript literals.

## api

`.stream()`

Generate a writable and readable stream that accepts a stream of literals
and emits an `end` event with the shannon entropy H measure.

## example

```js
var ent = entropy.stream();
ent.on('end', function(d) {
    console.log('the shannon measure is ', d);
});

for (var i = 0; i < 10; i++) ent.write(i);
ent.end();
```

## see also

Heavily inspired by [node-entropy](https://github.com/aschuch/node-entropy).
