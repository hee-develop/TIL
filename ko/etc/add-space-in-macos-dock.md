# MacOS 독에 빈 공간 추가하기

`Written: 2021-07-25`

개발이랑 전혀 관계없는 내용이지만 어쨌든 공부(?)했으므로 정리.

MacOS의 독은 구분선을 추가한다거나 그룹을 지정하는 게 불가능해 굉장히 불편한데, 구분선 비스무리한 빈 공간을 추가하는 방법이 있다.

```
% defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}'
% killall Dock
```

`small`말고 일반 spacer를 사용하면 아이콘 1개 정도의 빈 공간을 생성할 수 있지만 쓸데없이 커서 사용하진 않았다.

출처 : https://apple.stackexchange.com/questions/250723/adjust-width-of-spacer-between-mac-os-dock-icons/273540#273540
