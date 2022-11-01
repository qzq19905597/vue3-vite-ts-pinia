# 简介
### demo
# 技术栈
### Vue 3 + TypeScript + Vite + Pinia + Vue-Router + Less
## 分支规范
* **staging** 测试环境部署，保护分支，只能通过MR合入修改 测试环境运行代码托管分支
* **preview** 预发布环境部署，保护分支，只能通过MR合入修改 预发布环境运行代码托管分支
* **alpha** 开发版环境部署，保护分支，只能通过MR合入修改  开发版运行代码托管分支
* **master** 稳定版环境部署分支，保护分支，只能通过MR合入修改 稳定版运行代码托管分支
* **feat-xxx** 开发功能分支，从master拉出来的，在此分支开发功能；
* **fix-xxx** 修复bug分支，从master拉出来的，在此分支修复bug；

## 目录规范
```sh
.
├── dist                      ### 编译产物，用于线上部署
├── public                    ### 编译前目录
│   └── favicon.ico
├── src
│   ├── assets                ### 图片等资源文件
│       ├── img               ### 图片文件
|       └── less              ### less文件
│   ├── components            ### 公共组件
|   ├── config                ### 和服务端相关使用的常量
│   ├── constant              ### 全局使用的常量
│   ├── directive             ### 自定义指令集合
│   ├── interface             ### 全局类型定义
│   ├── page                  ### 页面
│   │   └── ...               ### ...其他页面
│   ├── services              ### 后端 api 接口
│   ├── stores                ### 全局状态管理
│   ├── utils                 ### 公共方法
│   ├── App.vue               ### App组件
│   ├── main.ts               ### 入口文件
│   ├── router.ts             ### 路由文件
│   └──  typings.d.ts         ### 声明文件
├── .eslintignore             ### eslint 要忽略的文件
├── .eslintrc.cjs             ### eslint 规则配置文件
├── .gitignore                ### git 要忽略的文件
├── .prettierrc.cjs           ### 代码格式化配置文件
├── index.html 
├── package-lock.json         ### npm 锁定包版本文件
├── package.json              ### npm 包管理文件             
├── README.md                 ### 项目说明文件
├── tsconfig.json             ### ts 配置文件
├── tsconfig.node.json        ### node代码中 ts 配置文件
└── vite.config.ts            ### vite 配置文件
```



## 编码规范
* **文件命名** src目录下 组件命名为**大驼峰**，其他文件为**小驼峰**

# 代码格式化和校验
## 代码保存自动格式化
代码的高亮和格式化校验依赖vscode拓展``volar + eslint`` 安装这俩依赖以后，本地ctrl+s保存代码后会自动格式化代码。
## 代码提交校验
当执行git commit时，会校验**commit的格式**和不符合规范的**代码**，当代码存在不符合规范的问题时无法正常提交commit,需要手动修改或者运行命令 ``npm run eslint:fix``会自动修复问题代码，然后才可以继续提交。
# script 命令介绍
* ``npm run dev`` 本地启动服务
* ``npm run build:staging`` 编译出测试环境静态资源
* ``npm run build:preview`` 编译出预发布环境静态资源
* ``npm run build:alpha`` 编译出线上开发版环境静态资源
* ``npm run build:prod`` 编译出线上稳定版环境静态资源
* ``npm run preview`` 本地启动服务预览打包在dist文件夹的内容
* ``npm run tslint`` 校验ts代码
* ``npm run eslint`` 校验代码
* ``npm run eslint:fix`` 修复不符合规范的代码

# 参考文档
* 代码提交类型检查 https://github.com/typicode/husky  https://blog.csdn.net/huangpb123/article/details/102690412
* 代码提交commit格式校验 https://github.com/conventional-changelog/commitlint

* 状态管理pinia https://pinia.web3doc.top/getting-started.html
* vue3  https://cn.vuejs.org/
* vite  https://cn.vitejs.dev/config/