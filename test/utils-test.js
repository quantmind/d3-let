import {test} from 'tape';
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

test('test extend', (t) => {
    t.equal(d3.extend(), undefined);
    t.notEqual(d3.extend({}, undefined), {});
    t.deepEqual(d3.extend({}, undefined), {});
    t.deepEqual(d3.extend({}, {bla:'foo'}, undefined), {bla: 'foo'});
    t.end();
});
