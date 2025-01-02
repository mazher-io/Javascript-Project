function testScope(){
    let a = 10;
    if (true){
        let a = 20;
        console.log(a);
    }
    console.log(a);
}

testScope();

const createCounter = () => {

}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


