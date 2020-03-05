// 这个文件是Next.js的总配置文件

const withCss = require('@zeit/next-css'); // 让文件可以import css文件

// 官方规定的配置文件

if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}


module.exports = withCss({}); // 因为只使用了withCss,所以其他的功能不动 就用{}