/** prototype */

// const fruits = ["사과","바나나","체리"];
const fruits = new Array("사과","바나나","체리");
console.log(fiuits); // ["사과","바나나","체리"]
console.log(fruits.length); // 3
console.log(first.includes("바나나")); // true
console.log(first.includes("오렌지")); // false

/** 프로토타입 
 * 아래 코드는 getName이라는 함수를 새롭게 만드는 것
*/
Array.prototype.getName = function () {
  console.log(this); // ["사과","바나나","체리"]
};
fruits.getName();

const newArr = [];
newArr.getName(); // []

/** 정리하자면, 프로토타입이라는 것은 new 키워드를 통해서 만든 생성자 함수에서 반환한 결과
 * 여기서는 fruits라는 배열 데이터 혹은 인스턴스라고 일컫는다.
 * 이렇게 인스턴스에서 쓸 수 있는 별도의 속성이나 메서드를 등록하는 객체
 * 
 * 우리가 원시 타입, 참조 타입들도 마찬가지로 다양하나 데티어들은 생성자 함수를 통해서 반환된 결과이고
 * 우리가 그동안 생성자 함수를 사용하지 않고, 각각의 데이터를 만든 것은 더 쉽게 만들 수 있게 각각의 리터럴 방식으로 만들었을 뿐이다
 */

const user = {
  firstName: "Chorong",
  lastName: "park",
  getFullName: function() {
    /** 객체 데이터 내부에서 일반 함수를 통해 메서드를 만들게 되면 this라는 키워드를 통해 접근 할 수 있었죠? */
    return `$(this.firstName) $(this.lastName)`;
  }
  /** 또한, 객체 데이터 내부에 있는 속성에서 function 키워드를 사용하는 일반함수를 할당한다면 속성 뒤에 있는 콜론(:) 기호와 function 키워드를 생략할 수 있습니다 */
};

const user2 = {
  firstName: "Jane",
  lastName: "Kim",
};
/** 객체 데이터의 메서드를 일반 함수로 만들면, 일반 함수에서의 this는 함수가 호출되는 곳에서 정의한다고 배웠습니다
 * 즉 user가 this가 됩니다
 */

console.log(user.getFullName()); // Chorong park

/** 만약 user2 객체 데이터에서도 fullName을 반환하는 메서드를 만들어야 한ㄴ다면 어떻게 할 수 있을까요? 
 * 1. getFullName을 복사해서 user2 내부에 똑같이 만드는 방법
 * 
 * 1번 방식을 따르면, 정확하게 같은 로직을 가지고 있는 함수가 2번 만들어졌어요. 굉장히 비효율적
 * 
 * 2. user.getFullName.call(user2); // => 재활용하는 코드의 가독성도 떨어지고 메서드를 빌려쓰는 구조에서 본래의 객체도 참조해야하고 복잡해진다.
*/

/** 이러한 단점을 보완하기 위해 우리가 쓸 수 있는 것이 바로 프로토타입이다 */

