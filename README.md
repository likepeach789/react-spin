
## 介绍
一个基于React的简单的显示进度条环形动画的库。

## 安装
> yarn add gogolee-react-progress-circle

## 用法
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

| 属性 | 描述 |
| --- | --- |
| number | 必填, number类型，表示当前进度条百分比，取值为0到100|
| width | 可选, number类型，环形图宽度， 默认100px|
| height | 可选, number类型，环形图高度， 默认100px|
| isTextShown | 可选,  boolean类型， 表示是否希望环形图显示百分比值，默认为true，即显示|
| strokeColor | 可选， string类型，表示环形图的颜色，默认#5116d0


## 用法
``` javascript
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
```

