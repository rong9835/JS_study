/** 함수
 * 1. 함수 선언문 (Declaration)
 * 2. 함수 표현식 (Expression)
 */

/** 1. 함수 선언문
 * 예) function 함수명() {}
 */

/** 2. 함수 표현식
 * 예) const 함수명 = function() {}
 */

/** 함수 호이스팅(Hoisting)
 * 자바스크립트에서 함수 호이스팅(Function Hoisting)은 함수 선언이 해당 함수의 호출보다 먼저 평가되는 개념입니다
 * 즉, 자바스크립트 엔진은 함수 선언을 코드의 실행 전에 '끌어 올려서' 처리하기 때문에, 함수가 선언되기 전에 호출해도 에러가 발생하지 않는다
 * 따라서 하단의 hello() 함수 호출의 코드가 함수 선언 이전에 작성되어도 작동하는 것이 이 이유에서 입니다
 * 
 * 단, 함수 호이스팅 현상은 '함수 선언문'에만 적용되며, '함수 표현식'은 호이스팅이 적용되지 않습니다
 */

hello(); // hello 함수 호출!
fn(); // Cannot access 'fn' before initialization // 함수 표현식은 호이스팅이 적용되지 않는다

function hello() {
  console.log("hello 함수 호출!")
};

const fn = function() {
  console.log("이 함수는 함수 표현식으로 작성되었습니다.")
};
