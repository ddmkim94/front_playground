'use strict';
// Variable
// let (added in ES6): mutable (변하는)
/* 
    전역 변수 => 파일 어디서나 사용 가능!
    함부로 사용하면 안됨! => 애플리케이션 실행 시점 ~ 종료 시점 메모리에 계속 남아있음!! (최소한으로 사용하자!)
    function, class, if, for 안에서 만들어서 사용! 
*/

let globalName = 'global name';
{
  // block scope
  let name = 'dongmin'; // local variable!!
  console.log(name);
  name = 'jungAh';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!!)
// var hoisting (끌어올리다!): 어디에 "선언"했는지 상관없이 항상 "선언"을 가장 위로 끌어올려주는 것!
// 호이스팅 대상: var 변수, 함수 선언문 (함수 표현식은 포함 X)
// has no block scope
{
  {
    {
      {
        age = 10;
        var age;
        console.log(age);
      }
    }
  }
}
console.log(age);

// Constant (immutable)
// favor immutable data type always for a few reasons:
// - security
// - thread safety: 애플리케이션 -> 프로세스 -> 쓰레드
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);

// primitive, single item: number, string, boolean, null, undefined
// object, box container
// function, first-class function

// number
let num1 = 19; // integer
let num2 = 19.2; // decimal number
console.log(`num1=${num1}, typeof=${typeof num1}`);
console.log(`num1=${num2}, typeof=${typeof num2}`);

// number - special numeric values: infinity, -infinity, NaN (Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'hello' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
let char = 'c';
let str1 = 'hello, my happy';
console.log(`char=${char}, typeof=${typeof char}`); // template literals (string)
console.log(`str1=${str1}, typeof=${typeof str1}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const test1 = 3 < 1;
const test2 = undefined;
const test3 = '';
console.log(test1);
console.log(test2);
console.log(test3);

// null
let nothing = null;
console.log(`nothing=${nothing}, typeof=${typeof nothing}`);

// undefined
let x = undefined;
console.log(`x=${nothing}, typeof=${typeof x}`);

// Dynamic typing: js는 런타임 시점에 할당된 값에 따라 타입이 변경됨!
// 런타임: 프로그램이 동작하는 시점
let text = 'hello';
console.log(`text=${text}, typeof=${typeof text}`);
text = 15;
console.log(`text=${text}, typeof=${typeof text}`);
text = '7' + 10;
console.log(`text=${text}, typeof=${typeof text}`);
text = '8' / '2';
console.log(`text=${text}, typeof=${typeof text}`);
