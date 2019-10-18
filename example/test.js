const babel = require('@babel/core');
const code = `
let d = () => { return 'dd' };
[1, 2, 3, [2]].flat();
Promise.resolve(3);
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

Array.from(1);


class A {
    test() {
        console.log('test');
    }
}

function* foo() { }

var sym = Symbol();

console.log(arr[Symbol.iterator]());

"foobar".includes("foo");


`;
const ast = babel.transform(code, {
    presets: [
        // '@babel/preset-env',
        [
            '@babel/preset-env',
            {
                targets: {
                    ie: '10',
                    edge: "16",
                    chrome: "76",
                    safari: "12.1",
                },
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ],
    // plugins: [],
    plugins: ["@babel/plugin-transform-runtime"]
});
console.log(ast.code);