module.exports = {
    "ecmaFeatures": {
        "modules": true,
        "module":  true
    },
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node" : true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        
    ],
    "rules": {
    }
};