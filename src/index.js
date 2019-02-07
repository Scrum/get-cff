import fs from 'fs';
import flatry from 'flatry';
import yaml from 'js-yaml';

const methods = [
    path => require(path),
    path => JSON.parse(fs.readFileSync(path, 'utf-8')),
    path => yaml.safeLoad(fs.readFileSync(path, 'utf-8'))
];

export default path => new Promise((resolve, reject) => {
    if (typeof path !== 'string') {
        reject(new TypeError('Argument must be one of type string.'));
    }

    let err;
    let res;

    methods.find(method => {
        [err, res] = flatry(() => method(path));
        return res;
    });

    if (err) {
        console.warn(err);
    }

    resolve(res);
});
