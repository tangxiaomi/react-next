import { withRouter } from 'next/router'; // 用来接受参数的
import Link from 'next/link';
import  axios from 'axios'; // 从远端获取数据

const Girls = ({router, list}) => { //如果不引入withRouter，就没有这个函数里的参数  因为promise的对象是list,所以可以直接使用
  return(
    <>
      <div>{router.query.name}来参观</div>
      <div>{list}</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}

// 请求的业务逻辑，必须把数据的请求放到getInitialProps中
Girls.getInitialProps = async() => { // 因为请求有时差 所以用异步进行操作  这样写只是保证在调用这个方法的时候是同步执行的
  const promise = new Promise((resolve) => {
    axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
      (res) => {
        // 获取数据做的事
        console.log('result:', res);
        resolve(res.data.data); // 获取成功了就告诉resolve，然后把结果返回出去
      }
    )
  })
  return await promise;
}

export default withRouter(Girls);  //withRouter有着路由技能的装备
