# create-react-app 으로 만드는 리액트 엡에 Sass 추가하기

`Written: 2021-07-26`

**TL;DR** : `yarn add sass`

`create-react-app`, 줄여서 `CRA`는 높은 추상화로 webpack 등의 설정이 거의 필요하지 않다는 것이 가장 큰 장점인 것 같다. 템플릿을 이용하면 더욱 빠른 시작이 가능하다.

이번에 공부하면서 만든 앱은 PWA&TS 템플릿이었는데, 이 템플릿은 CSS 전처리기가 설정이 되어 있지 않았기 때문에 별도로 Sass를 넣으려고 했다.

[공식 홈페이지](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)에서 친절하게 안내되어 있어 이대로 진행했더니 다음과 같은 에러가 발생했다.

```
Error: Node Sass version 6.0.1 is incompatible with ^4.0.0 || ^5.0.0.
```

인터넷을 찾아보니, `CRA`에서 지원하는 `node-sass`의 버전이 낮아서, 최신 버전(6.0.1)을 아직 지원하지 않는 모양이다.

그래서 가장 최신 버전의 `^5.0.0`을 설치하려고 했더니, 왜인지 설치가 안 됐다.

npm에 들어가 보니 다음과 같은 말이 적혀 있다.

```
Warning: LibSass and Node Sass are deprecated. While they will continue to receive maintenance releases indefinitely, there are no plans to add additional features or compatibility with any new CSS or Sass features. Projects that still use it should move onto Dart Sass.
```

그렇다. deprecated되었다. (그런데 태그 `5.0.0`은 아직 살아있는데 왜 설치가 안 되는지는 잘 모르겠다)

가이드에 안내되어 있는 내용대로 `dart-sass`를 설치.

```
% yarn add sass
```

그리고 `*.sass|scss`를 import하면 준비가 끝난다.
