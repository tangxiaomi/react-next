import React from 'react';
import Link from 'next/link'; // ①标签式跳转
import Router from 'next/router'; // ②编程式跳转 耦合性比较低

// ③传参 只能使用query?id = 1进行传参    不支持path:id来传参
const Home=() => { // 有返回值 + 业务逻辑的时候用{}   仅仅有返回值的时候用（）
  function gotoA(){
    Router.push('/jspangA')
  }

  function gotoBlue(){
    Router.push({
      pathname: '/girls',
      query: {name: 'blue'}
    })
  }

  // 路由的钩子事件(6个)；
  // routeChangeStart ==> 路由发生变化之前
  // routeChangeComplete ==> 发生结束变化时
  // beforeHistoryChange ==>  浏览器history触发前
  // routeChangeError ==> 路由跳转发生错误的时候
  // hashChangeStart ==> 转变成hash路由模式
  // hashChangeComplete ==> 
  Router.events.on('routeChangeStart',(...args) => {
    //要做的事放这里
    console.log('1.routechangestart->路由开始变化，参数为', ...args)
  })

  Router.events.on('routeChangeComplete',(...args) => {
    //要做的事放这里 取消loading动画， 去掉一些反复的逻辑
    console.log('2.routeChangeComplete->路由变化结束，参数为', ...args)
  })

  Router.events.on('beforeHistoryChange',(...args) => {
    //要做的事放这里
    console.log('3.beforeHistoryChange->浏览器history触发前', ...args)
  })

  Router.events.on('routeChangeError',(...args) => {
    //要做的事放这里
    console.log('4.routeChangeError->路由跳转发生错误的时候', ...args)
  })

  Router.events.on('hashChangeStart',(...args) => {
    //要做的事放这里
    console.log('5.hashChangeStart->路由跳转发生错误的时候', ...args)
  })

  Router.events.on('hashChangeComplete',(...args) => {
    //要做的事放这里
    console.log('6.hashChangeComplete->路由跳转发生错误的时候', ...args)
  })

  return (
      <>
        <div>我是首页---路由的两种跳转方式</div>
        <div><Link href="/jspangA"><a>A页面</a></Link></div>
        <div><Link href="/jspangB"><a>B页面</a></Link></div>
        <div>
          <button onClick={gotoA}>jspang A</button>
        </div>

        <div>我是首页---传参的方式</div>
        {/* 标签式 */}
        <div>
           <Link href={{pathname: '/girls', query: {name: 'red'}}}><a>小红</a></Link>
           <br/>
           <Link href="/girls?name=blue"><a>小蓝</a></Link>
        </div>
        {/* 编程式 */}
        <div>
          <button onClick={gotoBlue}>选小蓝</button>
        </div>

        <div>构建hash</div>
        <div>
           <Link href="#jspang"><a>哈希</a></Link>
        </div>
      </>
  )
}

export default Home;


//  Next.js的生产环境的打包
