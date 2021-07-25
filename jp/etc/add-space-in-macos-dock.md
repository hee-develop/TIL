# MacOS Dockに空白を入れる

`Written: 2021-07-25`

開発となんの関係もないけどとりあえず学んだので書いた。

MacOSのDockは区切り線やグループ指定などができないため非常に不便だ。調べると小さい空白を入れることはできるらしく、試してみた。

```
% defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}'
% killall Dock
```

`small`の代わりに普通のを入れるとアイコン１個くらいの空白になるが、デカすぎるので私は使わない。

ref : https://apple.stackexchange.com/questions/250723/adjust-width-of-spacer-between-mac-os-dock-icons/273540#273540
