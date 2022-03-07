(function() {
  'use strict';
  
  let score = "dd";
  let copy = score;

  console.log(score, copy);

  // 변수에는 값이 전달되는 것이 아니라 메모리 주소가 전달되기 때문에, 이는 변수와 같은 식별자는 값이 아니라 메모리 주소를  기억하고 있기 때문
  // 다시 말해 score의 값에는 메모리 주소가 있고, score 값을 copy 변수에 초기화 해줬지만 copy에 들어간 값은 같은 값일 뿐 실제로는 메모리 주소가 다르다.
  score = "ddd";
  console.log(score, copy);

  // 변수에 원시 값을 갖는 변수를 할당하면 변수 할당 시점이든, 두 변수 중 어느 하나의 변수에 값을 재할당하는 시점이든
  // 결국은 두 변수의 원시 값은 서로 다른 메모리 공간에 저장된 별개의 값이 되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할 수 없다.
}());