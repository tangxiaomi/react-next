// style jsx的编写 next是不支持css文件的
import React, {useState} from 'react';

function Style(){
  const [color, setColor] = useState('blue');
  const changeColor = () => {
    setColor(color === 'blue' ? 'red ' : 'blue');
  }

  return (
    <>
      <div>style jsx</div>
      <span className="jspang">style jsx</span>
      <div><button onClick={changeColor}>改变颜色</button></div>
       {/* 动态的css样式 */}
      <style jsx>
        {`
          div{color: ${color}}
          .jspang{color: red;}
        `}
      </style>
    </>
  )
}

export default Style;
