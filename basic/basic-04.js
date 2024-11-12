/** 형 변환(Type conversion) */

const A = 1; // number
const B = "1"; // string

console.log(A == B); // true ->동등연산자(형변환이 일어난다)
console.log(A === B); // false -> 일치연산자 값과 타입을 모두 비교한다.

const C = 0;
const D = false;
const E = true;

console.log(C == D); // true 
console.log(C == E); // false

/** 참과 거짓(Truthy & Fasly)
 * 
 * 숫자 0은 거짓에 해당한다
 * null, undefined, false는 거짓에 해당한다
 * NaN, 빈 문자열(''), 빈 배열([]), 빈 객체({})는 거짓에 해당한다
 */

const fruits = ["사과","바나나","포도","수박","딸기"];
const emptyArr = [];

if (fruits) {
  console.log("배열 데이터 안에 아이템이 들어 있습니다")
}

if (emptyArr.length) {
  console.log("배열 데이터 안에 아이템이 들어 있습니다")
} else {
  console.log("배열 데이터 안에 아이템이 없습니다");
  console.log("빈 배열은 거짓입니다");
}
