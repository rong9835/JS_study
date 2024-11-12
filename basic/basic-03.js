/** 참조형 데이터 타입*/

/** 배열 */

const fruits = new Array("사과","바나나","망고","딸기");
console.log(fruits); // ["사과", "바나나", "망고", "딸기"]

/** 배열 리터럴
 * 배열을 만드는 방식으로 대괄호([])라는 기호를 통해 만들었는데 이것을 리터럴 방식으로 만들ㄹ었다고 한다
 */

const animals = ["고양이","강아지","토끼","말","호랑이"];
console.log(animals); // ["고양이", "강아지", "토끼", "말", "호랑이"]
console.log(animals[1]); // 강아지 => 배열 데이터를 인덱싱한다 라고 합니다. 그리고 각각의 데이터 하나하나를 배열의 아이템이라고 합니다.
console.log(animals[2]); // 토끼
console.log(animals[animals.length-1]); // 호랑이 // 배열의 마지막 요소를 가져오는 방법
console.log(animals.length-1); // 4
console.log(animals[0]); // 고양이 => 인덱스의 시작은 0부터 시작합니다.

/** 객체 */
const user = new Object(); //생성자 함수를 통해 객체를 생성한다
user.name = "chorong";
user.age = 27;
user.jop = "programmer";

console.log(user); // key-value 형태로 조회가 된다. key는 속성 혹은 프로퍼티 (property)라고 부르고, value는 값이라고 부른다.

/** 객체 리터럴 
 * 객체를 만드는 방식으로 중괄호({})라는 기호를 통해 만들었는데 이것을 리터럴 방식으로 만들었다고 한다.
 */

const userA = {
  name: "chorong",
  age: 27,
  jop: "programmer",
};

const userB = {
  name: "jane",
  age: 30,
  jop: "designer",
};

const userC = {
  name: "mike",
  age: 25,
  jop: "developer",
};

console.log(userA); // {name: "chorong", age: 27, jop: "programmer"}
//대괄호 표기법
console.log(userA["name"]); // chorong
//점표기법
console.log(userA.name); // chorong
