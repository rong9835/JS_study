/** this
 * 일반 함수의 this는 호출 위치에서 정의
 * 화살표 한수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
 * 렉시컬: 함수가 동작될 수 있는 유효한 범위를 의미
 */

const user = {
  firstName: "Chorong",
  lastName: "Park",
  age: 27,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(user.getFullName()); // Chorong Park


const user2 = {
  firstName: "Chorong",
  lastName: "Park",
  age: 27,
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`;
  } 
};
console.log(user2.getFullName()); // undefined undefined

function user3() {
  this.firstName = "길동";
  this.lastName = "홍";
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

console.log(user3.getFullName()); // 길동 홍