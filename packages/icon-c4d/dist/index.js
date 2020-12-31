'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var React = require('react')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e }
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React)

function Icon(_a) {
  var url = _a.url,
    _b = _a.size,
    size = _b === void 0 ? 64 : _b,
    _c = _a.interval,
    interval = _c === void 0 ? 20 : _c
  var _d = React.useState(0),
    y = _d[0],
    setY = _d[1]
  var _e = React.useState(0),
    direction = _e[0],
    setDirection = _e[1]
  React.useEffect(
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
  React.useLayoutEffect(function() {
    setDirection(-1)
    var timer = window.setTimeout(function() {
      setDirection(1)
    }, 2000)
    return function() {
      return window.clearInterval(timer)
    }
  }, [])
  return React__default['default'].createElement('div', {
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

exports.default = Icon
//# sourceMappingURL=index.js.map
