'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MAX_UINT8 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof MAX_UINT8, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 2**8-1', function test( t ) {
	t.equal( MAX_UINT8, pow(2,8)-1, 'returns 2**8-1' );
	t.end();
});
