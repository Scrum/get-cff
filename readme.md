# get-cff

> Getting config from file 

[![Travis Build Status](https://img.shields.io/travis/GitScrum/get-cff.svg?style=flat-square&label=unix)](https://travis-ci.org/GitScrum/get-cff)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/get-cff.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/GitScrum/get-cff)[![node](https://img.shields.io/node/v/get-cff.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/get-cff.svg?style=flat-square)](https://www.npmjs.com/package/get-cff)[![Dependency Status](https://david-dm.org/gitscrum/get-cff.svg?style=flat-square)](https://david-dm.org/gitscrum/get-cff)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![codecov](https://img.shields.io/codecov/c/github/GitScrum/get-cff/master.svg?style=flat-square)](https://codecov.io/gh/GitScrum/get-cff)

[![npm downloads](https://img.shields.io/npm/dm/get-cff.svg?style=flat-square)](https://www.npmjs.com/package/get-cff)[![npm](https://img.shields.io/npm/dt/get-cff.svg?style=flat-square)](https://www.npmjs.com/package/get-cff)

## Why ?
Auto detect type file and load from file. Support:
- [x] js
- [x] json
- [x] dot file
- [ ] yml

## Install

```bash
npm i -S get-cff
```

> **Note:** This project is compatible with node v4+

## Usage

```js
import getCff from 'get-cff';

getCff('path/to/config/file').then(config => {
    console.log(config);
});

```
*Returns config object {property: value}*

## Options

### `path`
Type: `string`  
Default: ''  
Description: *path to you config file*  

## LICENSE

> MIT License [MIT](license)
