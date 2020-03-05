// react中模块的理解是指的外部库
import React, {useState}  from 'react';
// import moment from 'moment'; // 不是主要的业务逻辑，所以不用及时去加载这些外部库 所以使用懒加载
// 格式化时间 ==》 lazy loading实现模块加载，moment就是一个模块
import dynamic from 'next/dynamic'; // 用来懒加载组件

const CustomCom = dynamic(import('../components/customCom')); // ②只有执行到渲染CustomCom的时候才会加载进来，控制台可以看出来

function Time(){
  const [time, SetTime] = useState(Date.now());
  const formatTime = async() => {
    const moment = await import('moment'); // ① 引入的时候是需要时间的,这些外部库 在需要的时候再进入
    SetTime(moment.default(Date.now()).format())
  }

  return (
    <>
     <div>显示时间为： {time}</div>
     <CustomCom></CustomCom>
     <button onClick={formatTime}>改变时间格式</button>
    </>
  )
}

export default Time;
