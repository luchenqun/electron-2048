# electron-2048

> 一个使用Electron写的一个 2048 小游戏。

#### 目的
预热一下Electron开发技术，结合公司使用的Web前端开发框架Vue，Element-ui，Vue-router等，开发一个桌面应用。如果想以此为模板开发应用。使用命令`git checkout template`切换到template分支，以此为基础，开发你的基于Electron + Vue + Vue-router 的Web开发方式的桌面应用。

#### 构建步骤

``` bash
# 安装依赖
npm install

# 启动应用，系统会自动检测你修改的文件热启动应用localhost:9080
npm run dev

# 编译一个可发布的应用，执行该命令之后，会在build目录下面生成一个最终可执行文件。
npm run build

```

#### 目录结构
```
├── appveyor.yml           #
├── build                  # 编译的一些资源依赖
│   └── icons              # 
│       ├── 256x256.png    # Linux平台图标 
│       ├── icon.icns      # Mac OS 平台图标
│       └── icon.ico       # Windows 平台图标
├── dist                   # 
│   ├── electron           # 使用webpack打包后的electron源代码
│   └── web                # 使用webpack打包后的web源代码(暂时没提供命令)
├── package.json           # 描述包的文件
├── package-lock.json      # 
├── README.md              # 项目藐视
├── src                    # 开发目录
│   ├── index.ejs          # 页面入口
│   ├── main               # 
│   │   ├── index.dev.js   # Electron页面开发环境初始化
│   │   └── index.js       # Electron页面环境初始化
│   └── renderer           # Vue开发目录
│       ├── App.vue        # 
│       ├── assets         # 
│       │   └── logo.png   # 
│       ├── components     # 
│       │   └── Game.vue   # 
│       ├── main.js        # 
│       └── router         # 
│           └── index.js   # 
└── static                 # 资源路径
```

#### 注意事项
1. 使用Electron开发，不要使用cnpm install 安装，开发可能没什么问题，但是安装可能找不到对应的包。因为cnpm install为了加速安装，会生成一些链接，electron的打包软件没做对应的优化。
2. 如果在页面引入jQuery，需要这样`<script>window.$ = window.jQuery = require('../public/lib/jquery/dist/jquery.js')</script>`。因为 nwjs/electron 环境里有 module jquery 的 loader 认为是通过 commonjs 挂载的 所以他不会自动挂到全局。
3. npm 要安装electron，会非常慢，可以在安装之前在git bash里面执行一下`export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"`。当然，有些东西如果install失败，那么可能需要借助比如Proxifier + ShadowSocks全局翻墙。呵呵哒！你懂的！

#### 开发列表
- [x] 完成基本游戏逻辑
- [ ] 提供账号注册
- [ ] 提供排名榜
