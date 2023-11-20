module.exports = {
  env: {
    NODE_ENV: '"development"',
    // BASE_ENV: '"http://zhaowenchao.top/prod-api"',
    BASE_ENV: '"http://192.168.60.142:9090"',
  },
  defineConstants: {},
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240, // 文件大小限制
          },
        },
      },
    },
  },
  mini: {},
  h5: {
    devServer: {
      host: "0.0.0.0",
      port: 10086,
    },
  },
};
