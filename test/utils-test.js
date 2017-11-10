import {test} from 'tape-async';
import * as d3 from '../'


test('test isObject', (t) => {
    t.ok(d3.isObject({}));
    t.notOk(d3.isObject([]));
    t.notOk(d3.isObject(''));
    t.notOk(d3.isObject(new Date));
    t.end();
});

test('test isArray', (t) => {
    t.ok(d3.isArray([]));
    t.notOk(d3.isArray({}));
    t.notOk(d3.isArray(''));
    t.notOk(d3.isArray(new Date));
    t.end();
});

test('test isDate', (t) => {
    t.ok(d3.isDate(new Date));
    t.notOk(d3.isDate({}));
    t.notOk(d3.isDate(''));
    t.notOk(d3.isDate([]));
    t.end();
});

test('test isError', (t) => {
    t.ok(d3.isError(new Error('test')));
    t.notOk(d3.isError({}));
    t.notOk(d3.isDate(''));
    t.notOk(d3.isDate([]));
    t.end();
});

test('test isPromise', (t) => {
    t.ok(d3.isPromise(new Promise(()=>{})));
    t.notOk(d3.isPromise({}));
    t.end();
});

test('test resolved Promise', async (t) => {
    var p = await d3.resolvedPromise('ok');
    t.equal(p, 'ok');
    p = d3.resolvedPromise(new Error('not ok'));
    try {
        await p
    } catch (e) {
        t.equal(''+e, 'Error: not ok');
    }
});


test('test pop', (t) => {
    t.equal(d3.pop(), undefined);
    t.equal(d3.pop({}), undefined);
    var o = {a:1, b:2, c:3};
    t.equal(d3.pop(o, 'x'), undefined);
    t.equal(d3.pop(o, 'b'), 2);
    t.equal(d3.pop(o, 'b'), undefined);
    //
    t.equal(d3.pop([]), undefined);
    o = [1,2,3];
    o.bla = 'foo';
    t.equal(d3.pop(o, 1), 2);
    t.equal(d3.pop(o, 1), 3);
    t.equal(d3.pop(o, 'x'), undefined);
    t.equal(d3.pop(o, 'bla'), 'foo');
    t.equal(o.length, 1);
    t.end();
});

test('test assign', t => {
    var o = d3.assign({}, {a: 4});
    t.equal(o.a, 4);
    t.end();
});
