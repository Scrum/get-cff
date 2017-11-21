import test from 'ava';
import isPromise from 'is-promise';
import getCff from '../src/index.js';

test('processing should return promise', t => {
	t.true(isPromise(getCff()));
});
