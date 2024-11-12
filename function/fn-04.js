/** 화살표 함수 */

function sum(a,b) {
  return a + b;
}
console.log(1,2); // 3
console.log(10,20); // 30

/** 화살표 함수란 무엇일까?
 * function 키워드를 사용하지 않는다
 * return 키워드로 로직이 시작하는 경우에는 return 키워드로 실행문이 바로 시작되면, retrun 키워드와 중괄호를 제거하여 사용할 수 있다.
 * 매개변수를 가질 수 있는데 만약 매개변수가 단 한 개만 있다고 가정하면 매개변수를 감싸고 있는 소괄호를 생략할 수 있다.
 */

const sum1 = (a, b) => {
  return a + b;
}
const sum2 = (a, b) => a + b; // return 키워드와 중괄호를 제거하여 사용할 수 있다.
console.log(sum1(1,2)); // 3
console.log(sum2(10,20)); // 30

const a = (x) => {
  console.log("x: ",x); // 로직이 return 으로 바로 시작하지 않기 때문에 해당코드는 생략이 불가하다
};

const b = () => {
  return {value: 1};
}

const c = () => {
  balue: 1;
}; //중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에, 자바스크립트 문법적으로 이해할 수 없으므로 에러가 발생한다.

const d = () => ({value: 1}); // 객체를 반환할 때는 소괄호로 감싸줘야 한다.