/** 함수의 반환 및 종료 */
function hello() {
  return "hello";
  /** return 키워드 이후에 작성된 코드는 동작하지 않습니다 */
}

function plusOne(num) {
  /** 방어코드 작성 */
  if (typeof num === "number") {
    console.log("숫자를 입력해주세요")
    return 0;
  }
  return num + 1;
}

console.log(plusOne(10));
console.log(plusOne());
