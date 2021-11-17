let a = 5;
let b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag`Hello ${ a + b } world ${ a * b }`;

let total = 30;

function passthru(literals) {
    let result = '';
    let i = 0;

    while(i < literals.length) {
        result += literals[i++];
        if( i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
console.log(msg);
