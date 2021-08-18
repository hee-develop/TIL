# React의 Function Component에서 Destruction하기

`Written: 2021-08-18`

Class Component는 소멸자 메소드가 따로 제공되지만 Function Component는 그렇지 못하다.

그러나 hook를 이용하면 구현할 수 있다.

```jsx
useState(() => {
  // ...
  return () => { /* 소멸자 */ }
}, [])
```

예를 들어, 어떠한 컴포넌트에서 키보드 입력에 대한 리스너를 걸었을 때, 해당 컴포넌트가 없어지면 리스너도 끊어 두어야 할 필요가 있다.

```tsx
export const useGlobalKeyDownEvent = (keyDownListener: ((this: Window, ev: KeyboardEvent) => any) | null) => {
  useEffect(() => {
    if (!keyDownListener) return

    window.addEventListener('keydown', keyDownListener)
    return () => window.removeEventListener('keydown', keyDownListener)
  }, [keyDownListener])
}
```

이런 식으로 만들어 두면, 이벤트를 걸어두었던 컴포넌트가 없어질 때 아래의 `() => window.removeEventListener` 가 동작하게 된다.
