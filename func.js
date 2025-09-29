let a = 10;
let b = 5;
let res = add(a, b);
console.log(res);
greeting(`John`);
let c = "Peter";
greeting(c)
greeting();
greeting("");

function add(a, b) {
    return a + b;
}

function greeting(name="Anonymous") {
    //name= name || "Anonymous";
   // name = name ?? "Anonymous";
        console.log(`Hello ${name}`);
}
