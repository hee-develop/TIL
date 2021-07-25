# 추상화(abstraction)

`Written: 2021-07-17`

개발할 때 '추상화'라는 말을 참 많이 듣는다. 그런데 '추상화'는 구체적으로 무얼 의미하는걸까?
언어라는 게 사실 단어의 의미가 정확히 어떤 것을 의미하는지 몰라도 대략적으로 의미가 전달이 되기 때문에, 솔직히 조금 두루뭉술하게 이해하고 있는 것 같아 정리해보았다.

### 사전적인 의미
'추상(抽象)' : 사물이나 개념에서 공통되는 특성이나 속성을 추출하여 파악하는 작용.

### 컴퓨터공학에서의 추상화
'추상'은 공통되는 특성이나 속성을 추출한다고 하였다. 컴퓨터공학에서의 추상화는 추출한 특징으로 하나의 **모델**을 만드는 것이다.
객체지향 프로그래밍에서는 이런 모델을 추상 클래스로 명명해 사용하고 있다.

### 추상화의 추상화
추상화한 개념을 다시 추상화하면 더 사용하기 편해질까? 이에 대한 답은 '상황에 따라 다르다'이다.  
프론트엔드 프레임워크에서 거의 필수적으로 사용되는 `VirtualDOM`은 `DOM`을 추상화한 개념이다. 그런데 `DOM`은 HTML 요소를 한 번 추상화한 개념이므로, `VirtualDOM`은 추상화한 개념을 추상화한 것이 된다. 추상화가 두 번이나 됐지만 `VirtualDOM`을 사용하게 된 배경을 이해하면 
일반적으로 불필요한 추상화 레이어를 추가하게 되면 오히려 직관적이지 않은 코드가 될 가능성이 있다. 예를 들어 `number === 1`, `number === 2` 이라는 조건문을 추상화해 `is(number, 1)` `is(number, 2)`와 같은 조건문으로 작성했다고 치자. `number === 1`이라는 코드는 누가 봐도 바로 이해할 수 있는 직관적이며 단순한 코드이다. 이를 굳이 `is`라는 비교 연산 메서드로 추상화시키면 `is`함수가 무엇을 하려고 하는지 찾아봐야 한다는 문제점이 생기게 된다. 이런 경우, 추상화는 오히려 불필요한 작업이 될 수 있다.

### 추상화의 장점
추상화의 특징으로 '어떻게 구현됐는지 알지 못해도 사용할 수 있다'는 점이 있다. 거꾸로 말하면, 사용하는 쪽에서 추상화 된 대상에 대해 알 수 없다는 얘기가 된다. 즉, 추상화된 대상의 하위 계층에 직접 접근할 수 없으므로 보안상 이점이 생기게 된다.