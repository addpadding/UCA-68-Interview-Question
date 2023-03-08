console.log("script");


// defference between == & ===
{
    var x = 5;
    var y = 5;

    x == y // value = 5 => true

    x === y // value + type = number & number => true

    var x = 5;
    var y = "5";

    x == y // value = 5 => true

    x === y // value + type = number & string => false
}

// defference between let & var
{
    var a = 1
    let l1 = 1

    var a; // hosting top page
    console.log(x); // undefined
    var x = 5

    let l2; // not hosting
    console.log(l2); // error
    let l3 = 5


    {
        let x = 5;
    }
    console.log(x); // error

    function test() {
        var a = 5;

        if (true) {
            var t = 5 // var = function scope
            let b = 6 // let = block scope
        }

        console.log(a); // 5
        console.log(t); // 5
        console.log(b); // error
    }
}

// defference between const & let
{
    let a = 5
    a = 6

    const b = 6
    // b = 7; // TypeError

    const d = []
    d.push(1)
    d.push(2)
}

// ways to convert string to number
{
    var x = "12"
    parseInt(x) // 12

        + x

    Number(x)
}

// defference BOM & DOM
{
    D = document // => HTML page

    b = window // => Browsser
}

// defference null & undefined
{
    var x; // value => undefined

    var x = 5;
    x = null; // value => empty

    console.log(typeof undefined); // = undefined
    console.log(typeof null); // = object
}

// [] == []
{
    // [] = 1245 => false

    // [] = 56987 => false
}

// function named &  fn expression
{

    x1() // x1
    //x2() => // error

    function x1() {
        console.log("x1")
    }

    var x2 = function () {
        console.log("x2")
    }

}

// 1 > 2 > 3  &  1 < 2 < 3
{
    console.log(1 > 2 > 3); //  false > 3
    console.log(0 > 3); // false

    console.log(1 < 2 < 3); // true < 3
    console.log(1 < 3); // true 
}

// (0 || 1) &  (1 || 2) &  (0 || 2) & (1 || 2)
{
    console.log((0 || 1)) // = 1
    console.log((1 || 2)) // = 1

    console.log((0 || 2)) // = 0
    if (0) {
        console.log(2);
    }

    console.log((1 || 2)) // = 2
    if (1) {
        console.log(2);
    }

}

// a = "b" , b = "a" c = {b:2}, d = {a: 5} c[a] d[b] c[b]

var a = "b"
var b = "a"
var c = { b: 2 }
var d = { a: 5 }

console.log(c[a]); // => c ["b"] = 2

var obj = {
    a: 1,
    b: 2
}

obj.a
obj[a]

console.log(d[b]); // => d ["a"] = 5

console.log(c[b]); // => c ["a"] = error
