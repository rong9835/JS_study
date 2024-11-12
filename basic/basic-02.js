/** 원시형 데이터 타입 */

/** 문자열, String */
const str1 = "Hello, World!"; // 큰 따옴표, 작은 따옴표 모두 사용 가능
const str2 = "world!";
const str3 = `hello, ${str2}`; // 백틱
console.log(str3);

/** 숫자, number */
/** 주의할 점
 * 숫자 데이터와 다른 타입의 값을 연산할 경우 -> 2-1로 가기
 */

const num1 = 123;
const num2 = -123; // 음수
const num3 = -123.456; 
const pi = 3.14; // 부동소수점

console.log(num3 + undefined); // 2-1: 출력 값이 NaN
console.log(typeof(num3 + undefined)); // number
console.log(typeof pi); // number

/** NaN이라는 Not a Number 라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으로 표시하여 출력, 반환한다
 * 그래서 NaN 값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 높다.
 */

const a = 0.1;
const b = 0.2;

console.log(a + b); // 0.3
console.log(typeof (a + b).toFixed(1)); // string // toFixed() 함수를 사용하여 소수점 자리수를 지정할 수 있다. 
console.log(Number (a + b).toFixed(1)); // 0.3 // Number() 함수를 사용하여 숫자 데이터로 변환할 수 있다. 

/** 불리언, boolean 
 * true와 false 두 가지 값만 가지는 논리 데이터 타입
 * true는 참, false는 거짓을 의미한다.
*/

const truthy = true;
const falsy = false;

if (truthy) {
  console.log("참입니다.");
} else {
  console.log("거짓입니다.");
}

/** null과 undefined
 * null: 값이 존재하지 않음을 의미한다. 값이 비어있다. 값을 알 수 없다. 명시적으로 표현한 것이다.
 * 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 표현할 때 사용한다.
 * 
 * undefined: 변수가 선언되었지만, 값이 할당되지 않았음을 의미합니다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 때도 undefined가 반환된다.
*/

let value1 = null; // 개발자가 의도적으로 값이 없음을 표현할 때 사용
console.log(value1); // null
console.log(typeof value1);

setTimeout(() => {
  value1 = 30;
console.log(value1);
},1000);

let value2;
console.log(value2); // undefined

/** ---------------------------------------*/

const user = {
  name: "chorong",
  age: 27,
};

console.log(user.name); // chorong
console.log(user.age); // 27
console.log(user.email); // undefined
console.log(user.password); // undefined
