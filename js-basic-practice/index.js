let hoge = 'Hello World!!!';

const hoho = 'Hello World, hoho!';
console.log(hoge);

// hoho = 'hehe';
console.log(hoho);

let inoki = ['one', 'two', 'three'];
console.log(inoki[1]);

let index = 0;
while(index < 5){
    index++;
}
console.log(index);

for(let i = 0; i < inoki.length; i++) {
    console.log(inoki[i]);
}

const test = () => {
    //ここに実行したい命令を書く
    console.log("hoge");
};


//object
const obj = {
    color: 'pink', 
    size: 'large',
    perfume: 'mint',
};



console.log(obj.color);
// console.log(obj.printHello());
console.log(obj);
console.log(window.innerHeight);
console.log(window.innerWidth);
// window.alert('hello');

function printHello() {
    window.alert('hello hoge');
}

// console.log(document);
document.getElementsByTagName('button')[0].addEventListener('click', printHello);
