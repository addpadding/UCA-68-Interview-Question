console.log("script");

{
    var child1 = document.getElementById("child1")
    var child2 = document.getElementById("child2")
    var parent = document.getElementById("parent")

    parent.addEventListener("click", function (e) {
        console.log("parent");
    })


    child1.addEventListener("click", function (e) {
        console.log("child1")
        e.stopPropagation()
    })

    child2.addEventListener("click", function () {
        console.log("child2")
    }, true)

}

{
    var obj = {
        name: "hamza"
    }

    Object.freeze(obj)
    Object.seal(obj)

    obj.name = "hamada"
    obj.title = "front-end"

    console.log(obj)
}

{
    // IIFE
    (function x() {
        console.log("xssss");
    })()
}

{
    function data() {
        return "code"
    }

    let t = data`test`
    let t1 = data("test")
    console.log(t);
    console.log(t1);
}

{
    let fun1 = function () {
        return {
            a: 1
        }
    }

    let fun2 = function () {
        return;
        {
            a: 1
        }
    }

    console.log(fun1())
    console.log(fun2())
}

{
    var C = {
        a: function () {
            console.log("a")
            return this // C
        },
        b: function () {
            console.log("b")
            return this // C
        },
    }
    C.a().b().a()
}

{
    (function () {
        console.log(1); // 1
        setTimeout(function () { console.log(2), 1000 })
        setTimeout(function () { console.log(3), 0 })
        console.log(1); // 4
    })()
    // 1 4 3 2
}

{
    console.log(1 + "2" + "2"); // 122
    console.log(1 + +"2" + "2"); // 32
    console.log(1 + -"1" + "2"); // 02
    console.log(+"1" + "1" + "2"); // 122
    console.log(+"A" - "B" + "2"); // NAN 2
    console.log(+"A" - "B" + 2); // NAN
}

{
    // [] + []

    // "" + ""
}
