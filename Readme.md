
# indexOf

  Find index of object with value

## Installation

    $ component install JayceTDE/indexOf

## API

```js

var indexOf = require('indexOf');

var arr = [
    {
        a: 'A'
      , b: 'B'
      , c: 'C'
      , d: 'D'
    },
    {
        a: 'Z'
      , b: 'Y'
      , c: 'X'
      , d: 'W'
    },
    {
        a: 'A'
      , b: 2
      , c: 3
      , d: 4
    }
];

indexOf(arr, { a: 'A' });       // 0
indexOf(arr, { a: 'A', b: 2 }); // 2
indexOf(arr, { x: 0 });         // -1

```

## License

  MIT
