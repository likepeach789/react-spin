import React from 'react'
import { render } from 'react-dom'
import Progress from '../../src/index';

// Test Library
// import Progress from 'gogolee-react-progress-circle';
// import 'gogolee-react-progress-circle/lib/main.css';

  // 引入组件
const App = () => {
    return (
      <div style={{width: 300, heihgt: 300, margin: '0 auto'}}>
        <h4>默认用法</h4>
        <Progress number={20} />
        <hr/>

        <h4>设置stroke颜色</h4>
        <Progress number={20} strokeColor="red" />
        <hr/>

        <h4>设置大小</h4>
        <Progress number={40} strokeColor="red" width={50} height={50}/>
        <hr />

        <h4>隐藏百分比数字</h4>
        <Progress number={40} isTextShown={false} />
        <hr />

        <h4>显示自定义文本</h4>
        <Progress number={30} isTextShown={false}>
          <div style={{color: 'lightpink'}}>
            hey yo~
          </div>
        </Progress>

      </div>
    );
}
render(<App />, document.getElementById('root'))


