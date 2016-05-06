# 使用方法

es2015 语法

```js
import {loadAllImages} from './index';

loadAllImages(imgurlList, () => console.log('on each image load.'), () => {
  // console.log('on all images load.')
})
```
