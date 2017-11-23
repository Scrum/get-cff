import path from 'path';
import isPromise from 'is-promise';
import getCff from '../src/index';

test('processing should return promise', () => {
	expect(isPromise(getCff())).toBeTruthy();
});

test('processing should return data from js file', async () => {
	const file = path.resolve('test/files/jsFile.js');
	const config = await getCff(file);
	expect(config.property).toBe('value');
});

test('processing should return data from json file', async () => {
	const file = path.resolve('test/files/jsonFile.json');
	const config = await getCff(file);
	expect(config.property).toBe('value');
});

test('processing should return data from dot file', async () => {
	const file = path.resolve('test/files/.dotFile');
	const config = await getCff(file);
	expect(config.property).toBe('value');
});

test('processing should return data from yaml file', async () => {
	const file = path.resolve('test/files/yamlFile.yml');
	const config = await getCff(file);
	expect(config.property).toBe('value');
});
