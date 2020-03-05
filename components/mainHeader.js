// 全局添加head(不是很推荐)
import Head from 'next/head';

const MainHeader = () => {
  return (
    <>
     <Head>
       {/* tab页上显示的内容 */}
       <title>技术胖是最瘦的</title>
     </Head>
    </>
  )
}

export default MainHeader;
