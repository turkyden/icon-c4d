import React, { useState, useEffect, useLayoutEffect } from 'react'

function Icon(_a) {
  var url = _a.url,
    _b = _a.size,
    size = _b === void 0 ? 64 : _b,
    _c = _a.interval,
    interval = _c === void 0 ? 20 : _c
  var _d = useState(0),
    y = _d[0],
    setY = _d[1]
  var _e = useState(0),
    direction = _e[0],
    setDirection = _e[1]
  useEffect(
    function() {
      var timer = window.setInterval(function() {
        setY(function(preState) {
          var nextState = preState + size * direction
          if (nextState >= -size * 20 && nextState <= 0) {
            return nextState
          } else {
            return preState
          }
        })
      }, interval)
      return function() {
        return window.clearInterval(timer)
      }
    },
    [size, interval, direction]
  )
  useLayoutEffect(function() {
    setDirection(-1)
    var timer = window.setTimeout(function() {
      setDirection(1)
    }, 2000)
    return function() {
      return window.clearInterval(timer)
    }
  }, [])
  return React.createElement('div', {
    className: 'cursor-pointer bg-no-repeat bg-cover',
    onMouseOver: function(e) {
      return setDirection(-1)
    },
    onMouseOut: function(e) {
      return setDirection(1)
    },
    style: {
      width: size,
      height: size,
      backgroundImage: 'url(' + url + ')',
      backgroundPosition: '0 0',
      backgroundPositionY: y
    }
  })
}

export default Icon
//# sourceMappingURL=index.esm.js.map
