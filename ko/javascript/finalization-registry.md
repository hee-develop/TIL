# FinalizationRegistry

`Written: 2021-08-21`

ES2021에서 추가된 새로운 객체. 설정한 대상이 GC되었을 때 지정해 둔 콜백을 실행시킨다.

```tsx
const registry = new FinalizationRegistry(heldValue => { /* ... */ });
registry.register(targetObject, 'GC됨');
```

`register`메소드로 대상 object를 설정한다. 두 번째 인자로 `heldValue`를 받는데, 이는 콜백(finalizer)에 전달하는 값을 의미한다.
당연히 첫 번째 인자의 값을 전달해서는 안되며(콜백에서 참조하게 되기 때문) 그 외에는 아무런 값이든 넣을 수 있다.

WeakRef는 브라우저에서도 유용하게 쓸 수 있을 것 같은데, FinalizationRegistry는 GC를 강제할 수 없는 브라우저의 환경상 디버깅할 때만 유용하게 쓸 수 있을 것 같다..
