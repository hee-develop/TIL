# React useState / useRef hooks의 차이

`Written: 2021-08-03`

함수 컴포넌트는 렌더링 될 때마다 함수 내의 처리를 모두 실행한다. 때문에 함수 내부에 값을 저장하는 것은 hooks을 이용해 다른 곳에 저장해 두어야한다.
기본으로 제공하는 hooks는 여러가지가 있지만 데이터를 저장하는 방법은 크게 `useState`와 `useRef`가 있다. React를 처음 쓸 때는 `useMemo`도 값을 저장하는거라고 생각했는데 Vue의 `computed`와 비슷한 존재라는 것을 알게 되어 비교 대상에서 제외했다.

### useState
말 그대로 **상태**를 가진다. 사용할 때는 `getter / setter`를 지정하고, 값을 바꿀 때 `setter`을 불러서 상태를 변경시킬 수 있다.
~~**값의 상태가 변하면 컴포넌트가 이를 감지해 다시 렌더링한다**.~~

### useRef
말 그대로 **참조**를 가진다. DOM을 가리킬 때 사용하는 `ref`와 같은 이름이고 실제로 ref를 가리킬 때 사용할 수 있으나 그 `ref`와는 다른 개념이다.
useRef는 가변적인 값을 갖고 있어서 언제든지 수동으로 값을 바꿀 수 있다. useState는 값이 불변(state는 불변값을 가지며 값을 변경할 때 `setter`를 부른다)하므로 직접 접근해 값을 바꾸어서는 안된다.
useRef의 값은 object로 래핑되어 있어서, 값을 참조할 때는 `.current`로 접근한다.
**state와 달리 값이 바뀌어도 컴포넌트는 렌더링을 하지 않는다**.

~~input태그의 값을 `state`로 설정해두면, **input의 값이 바뀔 때마다 컴포넌트가 렌더링된다**. 즉 불필요한 렌더링 과정이 반복되므로 성능에 영향을 미칠 수 있다. 이럴 때 `ref`로 값을 지정해 두면, input의 값이 바뀌어도 컴포넌트를 재랜더링하지 않으므로 불필요한 연산을 줄일 수 있다.~~

*08-04추가: 참고했던 글에서는 `state`가 바뀌면 `repaint`된다고 써 있었는데, 2021년 지금 크롬으로 다시 확인해 본 결과 최적화를 해 둔건지 `state`가 바뀌어도 컴포넌트가 `repaint`되는 일은 없었다. 즉 input태그를 쓸 때 `useRef`를 쓰면서 얻을 수 있는 성능상의 이점은 사실상 없어진 셈이다. `useState`여도 괜찮을 듯.

### 참고
https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/
