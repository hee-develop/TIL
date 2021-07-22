# eslint와 prettier 빠르게 적용하기

`Written: 2021-07-23`

## eslint 설치

`npx`를 이용하면 빠르게 설정할 수 있다.

```
% npx eslint --init
✔ How would you like to use ESLint? problems
✔ What type of modules does your project use? esm
✔ Which framework does your project use? react
✔ Does your project use TypeScript? Yes
✔ Where does your code run? browser
✔ What format do you want your config file to be in? JavaScript
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
✔ Would you like to install them now with npm? Yes
```

React 프로젝트에 넣을 예정이었고, ESModule(`require`대신 `import`)과 브라우저에서만 돌릴 것이라는 것, 그리고 `.eslintrc.js` 파일로 출력하게끔 설정했다.

## eslint 간단 설정
위 명령을 실행하는 것만으로 eslint의 설정은 끝이다. eslint의 권장 설정이 자동으로 설정되어 있어 그대로 사용해도 괜찮다.
근데 기본 설정에서 `.eslintrc.js`파일도 린터의 대상이 되어 버려 `module.exports`에서 경고가 뜨므로 무시해 줄 필요가 있다.
무시하는 방법은 `eslintrc`에 `ignorePatterns`로 설정하는 방법과, `.eslintignore`파일을 작성하는 방법이 있다. 아직 무시할 내용이 많지 않으므로 `ignorePatterns`로 작성한다.

설정 파일은 보통 최상위 경로에 `*.js` 형식으로 저장되므로, `/*.js`라고 적어 두면 최상위 경로의 설정 파일만 무시할 수 있다. 무시 패턴은 알아보기 쉽게 규칙(`rules`) 위에 작성하면 좋다.

```js
modules.exports = {
  ...

  'ignorePatterns': [
    '/*.js',
  ],
  'rules': {

  },
  ...
}
```

## prettier 설치
```
npm i -D prettier
```

그리고 최상위 경로에 `.prettierrc` 파일을 만든 뒤, 간단한 설정을 해 둔다.

```json
{
  "semi": true,
  "endOfLine": "lf",
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

`eslint`와 달리 무시 설정은 다른 파일로밖에 설정이 안 되는 것 같다. `.prettierignore` 파일을 만들고 다음을 입력한다.
```
/*.js
```

`eslint`때와 마찬가지로 최상위 경로의 설정 파일은 적용하지 않도록 하였다.

### VSCode에서 저장할 때 자동으로 prettier가 적용되게 수정
`cmd + shift + P`(윈도우라면 cmd 대신 alt?)를 누르고 `Preferences: Open Workspace Settings (JSON)`을 선택. 자동으로 `settings.json` 파일이 생성된다.

다음과 같이 입력한다.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

이제 VSCode에서 저장할 때마다 prettier가 자동 적용되는 것을 확인할 수 있다.
