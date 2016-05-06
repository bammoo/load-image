# 使用方法

import {loadAllImages} from './index';

loadAllImages(imgurlList, () => console.log('on each image load.'), () => {
  // console.log('on all images load.')
})
