/**
 * Copyright (C) 2017 yanni4night.github.io
 * test.js
 *
 * changelog
 * 2017-11-25[00:20:13]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

import test from 'ava';
import transform from './';

test('transform "a(0x0061)" to 0x0061', t => {
    t.deepEqual(transform(0x61), 0x61);
});

test('transform "Σ(0x03a3)" to 0xcea3', t => {
    t.deepEqual(transform(0x03a3), 0xcea3);
});

test('transform "中(0x4e2d)" to e4b8ad', t => {
    t.deepEqual(transform(0x4e2d), 0xe4b8ad);
});
