---
是否分享: "true"
文件夹: /运维
---


nodejs官方放弃对 CentOS/RHEL 7 支持，原因是 CentOS 7 系统附带 glibc 2.17，glibc 2.17已经不支持nodejs18以上。

# 安装思路

使用非官方构建的已经将glibc内置的nodejs安装包，下载地址 [https://github.com/momiji/nodejs-unofficial-builds/releases](https://github.com/momiji/nodejs-unofficial-builds/releases) ，例如下载的是<span style="color:rgba(16,185,129,1)">node-v18.14.2-linux-x64-glibc-217.tar</span>

## 安装

第一步，下载完成后，传到服务器

```bash
tar -xvf node-v18.14.2-linux-x64-glibc-217.tar.gz
```

第二步，将解压的文件移动到 /usr/local/nodejs 下面

```bash
mv  ./node-v18.14.2-linux-x64-glibc-217/ /usr/local/nodejs
```

第三步，将npm和node可执行文件软连接到 /usr/bin/

```bash
sudo ln -s /usr/local/nodejs/bin/npm /usr/bin/
sudo ln -s /usr/local/nodejs/bin/node /usr/bin/
```

第四步，检查可用性

```bash
node -v
npm -v
```

##相关issues

[https://github.com/luckyyyyy/blog/issues/64](https://github.com/luckyyyyy/blog/issues/64)

[https://github.com/nodejs/node/issues/43246](https://github.com/nodejs/node/issues/43246)