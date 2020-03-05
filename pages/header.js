// 自定义header更加友好的SEO
// import Head from 'next/head';
import MainHeader from '../components/mainHeader';
import '../static/test.css'
// babel-plugin-import 实现按需加载
import { Button } from 'antd'; // 配置了babel所以他会按需加载

function Header(){
  return (
    <>
     {/* <Head>
       <title>技术胖是最胖的</title>
       <meta charSet="utf-8"/>
     </Head> */}
     <MainHeader/>
     <div>jspang.com</div>
     <Button>按钮</Button>
    </>
  )
}

export default Header;
