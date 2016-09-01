require('source-map-support').install();
import 'babel-polyfill';
const assert     = require('assert');

import {createChainableTypeChecker} from '../lib/react-chainable-type-checker.js';

describe('createChainableTypeChecker', function () {
    it('does not appear possible to implement any meaningful tests with this module' , function () {
        console.log('a'+typeof createChainableTypeChecker);
        console.log('b'+typeof  ( ()=>null ) );
        assert(typeof (createChainableTypeChecker) === typeof ( ()=>null ));
    });
});

