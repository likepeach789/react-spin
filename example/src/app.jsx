import React from 'react'
import { render } from 'react-dom'
// import Progress from '../../src/index';
// import { Remarkable } from 'remarkable';
// const ReactMarkdown = require('react-markdown')
// Test Loibrary
import Progress from 'gogolee-react-progress-circle';
import 'gogolee-react-progress-circle/lib/main.css';

  // 引入组件
const App = () => {
  const input = '> js function'
  // md.render(input);
    return (
      <div style={{width: 300, heihgt: 300, margin: '0 auto'}}>
        <h4>默认用法</h4>
        <Progress number={20} width={100} height={100}/>

        <hr/>

        <h4>显示自定义文本</h4>
        <Progress number={30} width={100} height={100} isTextShown={false}>
          <div style={{color: 'lightpink'}}>
            hey yo~
          </div>
        </Progress>
      </div>
    );
}
render(<App />, document.getElementById('root'))


