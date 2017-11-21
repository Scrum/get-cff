import isPromise from 'is-promise';
import getCff from '../src/index';

test('processing should return promise', () => {
	expect(isPromise(getCff())).toBeTruthy();
});
