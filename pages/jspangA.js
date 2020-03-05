import Link from 'next/link';

export default () => (
  <>
   <div>JSpang a page</div>
   {/* 内部跳转 */}
   <Link href='/'>
     {/* link下边只能有一个根元素，不能有并列的兄弟元素， 所以可以用a标签进行包裹 */}
     <a>返回首页</a>
    </Link>
  </>
)