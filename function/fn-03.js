function sum(a,b) {
  return a + b;
}
console.log(sum(1,2)); // 3
console.log(sum(7)); // NaN

/**매개변수 패턴 (Parameter Pattern) */
/** 기본 값(Default Value) */
function sum1(a,b = 1) {
  return a + b;
}
console.log(sum1(1,2)); // 3 
console.log(sum1(7)); // 8

/** 구조 분해 할당 */
const user = {
  name: "chorong",
  age: 27,
};

function getName(user) {
  const {name} = user;
  return name;
  // return user.name;
}
function getName2({name}) {
  return name;
}
function getEmail({email = "이메일은 없습니다."}) {
  return email;
}

const fruits = ["Apple","Banana","cherry"];
const numbers = [1,2,3,4,5];

function getSecondItem([a,b,c]){
  console.log("a; ",a);
  console.log("b; ",b);
  console.log("c; ",c);
}
console.log(getSecondItem(fruits)); // Banana

/** 나머지 매개변수 */
function add(...rest) {
console.log(rest);
console.log(arguments); // 유사 배열, 배열데이터가 아니기 때문에 활용도가 많이 떨어진다
/** acc: 누적값
 * current: 현재값
 */
return rest.reduce(function(acc, current) {
  return acc + current;
},0);
} 