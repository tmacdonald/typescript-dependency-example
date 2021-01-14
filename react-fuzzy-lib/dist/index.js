var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function CounterComponent(_a) {
    var _b = _a.initialCounter, initialCounter = _b === void 0 ? 0 : _b, _c = _a.incrementAmount, incrementAmount = _c === void 0 ? 1 : _c;
    var _d = useState(initialCounter), counter = _d[0], setCounter = _d[1];
    function increment() {
        setCounter(function (counter) { return counter + incrementAmount; });
    }
    return (_jsxs(_Fragment, { children: [_jsx("span", { children: counter }, void 0),
            _jsx("button", __assign({ onClick: increment }, { children: "+" }), void 0)] }, void 0));
}
