
## 介绍
一个基于React的简单的显示进度条环形动画的库。

## 安装
> yarn install

## usage
```javascript
import React from 'react'
import { render } from 'react-dom'
import Progress from 'gogolee-react-progress-circle';
import 'gogolee-react-progress-circle/lib/main.css';

const App = () => {
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
```

## Options
- `number` number类型，表示当前进度条百分比，取值为0到100
- `width` number类型，环形图宽度
- `height` number类型，环形图高度
- `isTextShown` boolean类型， 表示是否希望环形图显示百分比值，默认为true，即显示

## Other
支持在环形图内显示自定义标签
