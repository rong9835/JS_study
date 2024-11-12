/** 식별자
 * 식별자는 코드 내의 변수, 함수 혹은 속성을 식별하는 문자열이다.
 * 자바스크립트의 식별자는 대소문자로 구별하며 유니코드 글자, $, _, 숫자(0-9)를 사용할 수 있지만, 숫자로 시작할 수 없다.
 * 공백문자 역시 사용할 수 없다. 길이의 제한을 두고 있진 않습니다. 너무 길게 명명하면 해당 식별자가 어떤 역할을 하는지 파악하기 어려워질 수 있다.
 */

/**
 * let : 키워드
 * age : 식별자
 * 30 : 데이터
 */

let age = 30;

function setAge() {}

const obj = {
  age: 10,
  ["my name"]: "chorong",
};
console.log(obj["my name"]);
console.log(obj.age);

/** 상수
 * 상수는 대문자로 네이밍하는 것이 관례/관습이다.
 * 대문자로 작성되었다는 것만으로도 해당 식벽자 '상수'라는 것을 알 수 있기 때문이다.
 */

const NATIONALITY = "Korean";

/** 식별자 표기법
 * 카멜 케이스(camelCase) : 첫 글자는 소문자로 시작하고, 이후 각 단어의 첫 글자는 대문자로 표기하는 방법 예) camelCase
 * 스네이크 케이스(snake_case) : 모든 단어를 소문자로 표기하고, 단어 사이에 언더바(_)를 넣는 방법 예) snake_case
 * 파스칼 케이스(PascalCase) : 모든 단어의 첫 글자를 대문자로 표기하는 방법 예) PascalCase
 * 케밥 케이스(kebab-case) : 모든 단어를 소문자로 표기하고, 단어 사이에 하이픈(-)을 넣는 방법 예) kebab-case
 */




