/**
 * @version 0.0.1
 */

const loadImage = function (path, i, callback) {
  var img = new Image();
  if(callback) {
    // 暂时成功失败都执行一样的
    var cb = function() {
      img.onload = null;
      img.onerror = null;
      callback(path, i);
      img = null;
    }

    // TODO: 失败回调
    img.onerror = function () {
      // console.log(path);
      cb(false);
    }
    img.onload = function () {
      cb();
    }
  }
  img.src = path;
}

const loadAllImages = function(imgs, callback, endCb) {
  var len = imgs.length
    , i
    ;

  callback || (callback = function() {});
  endCb || (endCb = function() {});

  var count = imgs.length;

  // this callback counts down the things to do.
  var imgLoadedCb = function (path, idx) {
    count --;
    // console.log(len - count);
    callback(path, len - count, len);
    if (0 === count) {
      endCb();
    }
  }

  // 同步加载多张
  for (i = 0; i < imgs.length; i++) {
    // 'do' each thing, and await callback.
    loadImage(imgs[i], i, imgLoadedCb);
  }

}

export default {
  loadAllImages
}
