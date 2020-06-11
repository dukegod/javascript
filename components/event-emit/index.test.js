import assert from 'assert';
import EventEmitter from './index';

describe('类型', () => {
  describe('实例化', () => {
    it('done', done => {
      const emitter = new EventEmitter();
      emitter.on('A', () => { console.log('A'); });
      emitter.on('B', params => {
        console.log(params);
      });
      emitter.on('A', params => {
        console.log(params);
        assert.ok();
      });
      emitter.emit('A');
      emitter.emit('B');
      done();
    });
  });
});
