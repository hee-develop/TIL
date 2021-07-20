# Gatsby + TS 에서 import alias 사용하기

`Written: 2021-07-21`

### TL;DR
`yarn add gatsby-alias-imports`

&&

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          config: `config/`,
          "@utils": "src/utils/"
        }
      }
    }
  ]
}
```

### 원인
gatsby 내장 webpack에서 alias를 인식하지 못했다.

### 과정
0. `tsconfig.json` 파일을 수정해 트랜스컴파일 과정에서 alias된 경로가 입력되게 하고 싶었다.
  - IDE에서는 에러가 사라졌는데 컴파일 시 에러는 그대로다. 트랜스컴파일 과정에서 제대로 주입이 안된 것 같다.
1. gatsby 내장 webpack을 설정할 수 있는 `setWebpackConfig` API 를 사용하면 `webpack.config.js`에서 쓰는 것처럼 webpack을 설정할 수 있다.
  - 왠지 모르겠는데 해도 그대로였다. 반영이 안 됐다.
2. `.eslintrc.js`를 수정해서 resolver를 입력하면 ESLint 설정을 변경할 수 있다.
  - 린터만 수정해주지 실제 경로를 삽입해주지는 않는다. 실패
3. gatsby 플러그인을 사용한다.
  - [gatsby-alias-imports](https://www.gatsbyjs.com/plugins/gatsby-alias-imports/) 라는 플러그인을 사용했다.
  - 홈페이지에 나와있는대로 설정했더니 문제 없이 잘 됐다.
  - 궁금해서 내부 코드를 보니 [1번과 똑같은 설정을 하고 있다](https://www.gatsbyjs.com/plugins/gatsby-alias-imports/). 1번은 왜 안 된거지?

개츠비의 장점은 플러그인이므로 플러그인으로 해결하는 것은 나쁘지 않은 생각인 것 같다..
