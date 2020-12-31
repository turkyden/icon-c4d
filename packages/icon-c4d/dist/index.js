'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function useIcon(_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? 64 : _b, _c = _a.interval, interval = _c === void 0 ? 20 : _c;
    var _d = React.useState(0), y = _d[0], setY = _d[1];
    var _e = React.useState(0), direction = _e[0], setDirection = _e[1];
    React.useEffect(function () {
        var timer = window.setInterval(function () {
            setY(function (preState) {
                var nextState = preState + size * direction;
                if (nextState >= -size * 20 && nextState <= 0) {
                    return nextState;
                }
                else {
                    return preState;
                }
            });
        }, interval);
        return function () { return window.clearInterval(timer); };
    }, [size, interval, direction]);
    React.useLayoutEffect(function () {
        setDirection(-1);
        var timer = window.setTimeout(function () {
            setDirection(1);
        }, 2000);
        return function () { return window.clearInterval(timer); };
    }, []);
    var defaultStyles = {
        display: 'block',
        cursor: 'pointer',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return {
        onMouseOver: function (e) { return setDirection(-1); },
        onMouseOut: function (e) { return setDirection(1); },
        style: __assign(__assign({}, defaultStyles), { width: size, height: size, backgroundImage: "url(" + src + ")", backgroundPosition: '0 0', backgroundPositionY: y })
    };
}
function Icon(iconProps) {
    var props = useIcon(iconProps);
    return (React__default['default'].createElement("div", __assign({}, props)));
}

exports.default = Icon;
exports.useIcon = useIcon;
//# sourceMappingURL=index.js.map
