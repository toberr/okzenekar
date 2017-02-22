export default function progressBar (options) {
  var containerWidth = x => options.container.offsetWidth;
  var eventHandler = function (e) {
    if (
      (e.type === 'touchmove') ||
      (e.type === 'mousemove' && e.buttons === 1) ||
      (e.type === 'click')
    ){
      var x = e.clientX - Math.floor(options.container.getBoundingClientRect().left),
          max = containerWidth();

      if (x >= 0 && x <= max) {
        options.pointer.style.left = x + 'px';
        options.current.style.width = x + 'px';

        if (typeof options.cb === 'function') {
          options.cb(Math.floor((x / containerWidth()) * 100), e.type);
        }
      }
    }
  };

  ['touchmove', 'mousemove', 'mouseup', 'click'].forEach(function (type) {
    options.container.addEventListener(type, eventHandler, false);
  });

  return function (percent) {
    options.pointer.style.left = percent + '%';
    options.current.style.width = percent + '%';

    if (typeof options.cb === 'function') {
      options.cb(percent);
    }
  }
};