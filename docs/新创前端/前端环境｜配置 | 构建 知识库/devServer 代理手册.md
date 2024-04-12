---
分享: "true"
---


`vue.config.js` 中有这样一段配置，假设项目启动后访问地址为 [http://localhost:8080/xxx](http://localhost:8080/xxx)

其中 <code><span style="color:rgba(245,158,11,1)">^/api/sfile</span></code> 表示的是下面这段，**注意后面是完整的 /api/开头的路径**

[http://localhost:8080](http://localhost:8080)<span style="color:rgba(245,158,11,1)">/api/sfile</span><span style="color:rgba(16,185,129,1)">/xxx </span>=> [http://xcdev.cmic.com.cn](http://xcdev.cmic.com.cn)<span style="color:rgba(245,158,11,1)">/api/sfile</span><span style="color:rgba(16,185,129,1)">/xxx</span>

其中 <code><span style="color:rgba(245,158,11,1)">^/api/aprmsService</span></code> 表示的是下面这段：

[http://localhost:8080](http://localhost:8080)<span style="color:rgba(245,158,11,1)">/api/aprmsService</span><span style="color:rgba(16,185,129,1)">/xxx </span>=> [http://10.17.86.101:8595](http://10.17.86.101:8595)<del><span style="color:rgba(244,63,94,1)">/api/</span></del><span style="color:rgba(245,158,11,1)">aprmsService</span><span style="color:rgba(16,185,129,1)">/xxx</span>

[安装和部署](../%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/%E5%AE%89%E8%A3%85%E5%92%8C%E9%83%A8%E7%BD%B2.md#)

**注意配置看多了一个**<code><span style="color:rgba(16,185,129,1)">pathRewrite</span></code>,它把<code><span style="color:rgba(16,185,129,1)"> ^/api</span></code>替换为<code><span style="color:rgba(16,185,129,1)">""</span></code>,注意后面是的/api/被删除了,所以<code><span style="color:rgba(16,185,129,1)">pathRewrite</span></code>是对最终代理目标的地址进行重写，所以配置的原则是要先确定后端的实际访问地址是多少，在通过devServer进行配置。

```javascript
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/api/sfile': {
        target: 'http://xcdev.cmic.com.cn',
        changeOrigin: true,
        logLevel: 'debug',
      },
      '^/api/aprmsService': {
        target: 'http://10.17.86.101:8595',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
            '^/api': ''  
        }
      },
    },
  },
});

```

