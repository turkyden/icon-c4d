import React, { useState, useEffect, useLayoutEffect } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useIcon(_ref) {
  var src = _ref.src,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 64 : _ref$size,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 20 : _ref$interval;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      y = _useState2[0],
      setY = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      direction = _useState4[0],
      setDirection = _useState4[1];

  useEffect(function () {
    var timer = window.setInterval(function () {
      setY(function (preState) {
        var nextState = preState + size * direction;

        if (nextState >= -size * 20 && nextState <= 0) {
          return nextState;
        } else {
          return preState;
        }
      });
    }, interval);
    return function () {
      return window.clearInterval(timer);
    };
  }, [size, interval, direction]);
  useLayoutEffect(function () {
    setDirection(-1);
    var timer = window.setTimeout(function () {
      setDirection(1);
    }, 2000);
    return function () {
      return window.clearInterval(timer);
    };
  }, []);
  var defaultStyles = {
    display: 'block',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  return {
    onMouseOver: function onMouseOver(e) {
      return setDirection(-1);
    },
    onMouseOut: function onMouseOut(e) {
      return setDirection(1);
    },
    style: _objectSpread2(_objectSpread2({}, defaultStyles), {}, {
      width: size,
      height: size,
      backgroundImage: "url(".concat(src, ")"),
      backgroundPosition: '0 0',
      backgroundPositionY: y
    })
  };
}
function Icon(iconProps) {
  var props = useIcon(iconProps);
  return /*#__PURE__*/React.createElement("div", Object.assign({}, props));
}

export default Icon;
export { useIcon };
