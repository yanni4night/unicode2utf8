/**
 * Copyright (C) 2017 yanni4night.github.io
 * index.js
 *
 * changelog
 * 2017-11-24[23:55:49]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

(function(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define('unicode2utf8', [], factory);
    else if (typeof exports === 'object')
        exports['unicode2utf8'] = factory();
    else
        root['unicode2utf8'] = factory();
})(this, function() {
    return function unicode2utf8(code) {
        switch (true) {
            case (code <= 0x007F):
                return code;
                break;
            case (code >= 0x0080 && code <= 0x07FF):
                return ((((code >> 6) & 0b11111) | 0b11000000) << 8) | ((code & 0b111111) | 0b10000000)
            case (code >= 0x0800 && code <= 0xFFFF):
                return ((((code >> 12) & 0b1111) | 0b11100000) << 16) | ((((code >> 6) & 0b111111) | 0b10000000) <<
                    8) | ((code & 0b111111) | 0b10000000)
            case (code >= 0x10000 && code <= 0x10FFFF):
                return ((((code >> 18) & 0b111) | 0b11110000) << 24) | ((((code >> 12) & 0b111111) | 0b10000000) <<
                    16) | ((((code >> 6) & 0b111111) | 0b10000000) << 8) | ((code & 0b111111) | 0b10000000);
            default:
                throw new Error('Out of bound of UTF-8');
        }
    };
});