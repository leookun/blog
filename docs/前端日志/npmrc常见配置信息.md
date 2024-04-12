---
是否分享: "true"
文件夹: /前端日志
---

每个项目目录下都有一个.npmrc文件，下面是它常见的配置和含义

##更改仓库地址

```sh
registry=http://front.cmic.com.cn
```

##更改命名空间下的包的仓库地址

@vue开头的包使用registry.npmmirror.com，例如@vue/cli等

其他所有使用front.cmic.com.cn

```sh
registry=http://front.cmic.com.cn
@vue:registry=https://registry.npmmirror.com
```

##更改某个指定包名的仓库地址

@vue/cli使用test.npmmirror.com

@vue开头的包使用registry.npmmirror.com，例如@vue/cli等

esbuild使用explame.npmmirror.com

```sh
registry=http://front.cmic.com.cn
@vue:registry=https://registry.npmmirror.com
@vue/cli:registry=https://test.npmmirror.com
esbuild:registry=https://explame.npmmirror.com
```

