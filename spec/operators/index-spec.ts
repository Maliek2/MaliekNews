import * as index from 'rxjs/operators';
import { expect } from 'chai';

describe('operators/index', () => {
  it('should export operators', () => {
    expect(index.audit).to.exist;
    expect(index.auditTime).to.exist;
    expect(index.buffer).to.exist;
    expect(index.bufferCount).to.exist;
    expect(index.bufferTime).to.exist;
    expect(index.bufferToggle).to.exist;
    expect(index.bufferWhen).to.exist;
    expect(index.catchError).to.exist;
    expect(index.combineAll).to.exist;
    expect(index.combineLatestAll).to.exist;
    expect(index.concatAll).to.exist;
    expect(index.concatMap).to.exist;
    expect(index.concatMapTo).to.exist;
    expect(index.count).to.exist;
    expect(index.debounce).to.exist;
    expect(index.debounceTime).to.exist;
    expect(index.defaultIfEmpty).to.exist;
    expect(index.delay).to.exist;
    expect(index.delayWhen).to.exist;
    expect(index.dematerialize).to.exist;
    expect(index.distinct).to.exist;
    expect(index.distinctUntilChanged).to.exist;
    expect(index.distinctUntilKeyChanged).to.exist;
    expect(index.elementAt).to.exist;
    expect(index.every).to.exist;
    expect(index.exhaust).to.exist;
    expect(index.exhaustAll).to.exist;
    expect(index.exhaustMap).to.exist;
    expect(index.expand).to.exist;
    expect(index.filter).to.exist;
    expect(index.finalize).to.exist;
    expect(index.find).to.exist;
    expect(index.findIndex).to.exist;
    expect(index.first).to.exist;
    expect(index.groupBy).to.exist;
    expect(index.ignoreElements).to.exist;
    expect(index.isEmpty).to.exist;
    expect(index.last).to.exist;
    expect(index.map).to.exist;
    expect(index.mapTo).to.exist;
    expect(index.materialize).to.exist;
    expect(index.max).to.exist;
    expect(index.mergeAll).to.exist;
    expect(index.mergeMap).to.exist;
    expect(index.flatMap).to.exist;
    expect(index.mergeMap).to.exist;
    expect(index.mergeMapTo).to.exist;
    expect(index.mergeScan).to.exist;
    expect(index.min).to.exist;
    expect(index.multicast).to.exist;
    expect(index.observeOn).to.exist;
    expect(index.pairwise).to.exist;
    expect(index.partition).to.exist;
    expect(index.pluck).to.exist;
    expect(index.publish).to.exist;
    expect(index.publishBehavior).to.exist;
    expect(index.publishLast).to.exist;
    expect(index.publishReplay).to.exist;
    expect(index.reduce).to.exist;
    expect(index.repeat).to.exist;
    expect(index.repeatWhen).to.exist;
    expect(index.retry).to.exist;
    expect(index.retryWhen).to.exist;
    expect(index.refCount).to.exist;
    expect(index.sample).to.exist;
    expect(index.sampleTime).to.exist;
    expect(index.scan).to.exist;
    expect(index.sequenceEqual).to.exist;
    expect(index.share).to.exist;
    expect(index.shareReplay).to.exist;
    expect(index.single).to.exist;
    expect(index.skip).to.exist;
    expect(index.skipLast).to.exist;
    expect(index.skipUntil).to.exist;
    expect(index.skipWhile).to.exist;
    expect(index.startWith).to.exist;
    expect(index.switchAll).to.exist;
    expect(index.switchScan).to.exist;
    expect(index.switchMap).to.exist;
    expect(index.switchMapTo).to.exist;
    expect(index.take).to.exist;
    expect(index.takeLast).to.exist;
    expect(index.takeUntil).to.exist;
    expect(index.takeWhile).to.exist;
    expect(index.tap).to.exist;
    expect(index.throttle).to.exist;
    expect(index.throttleTime).to.exist;
    expect(index.timeInterval).to.exist;
    expect(index.timeout).to.exist;
    expect(index.timeoutWith).to.exist;
    expect(index.timestamp).to.exist;
    expect(index.toArray).to.exist;
    expect(index.window).to.exist;
    expect(index.windowCount).to.exist;
    expect(index.windowTime).to.exist;
    expect(index.windowToggle).to.exist;
    expect(index.windowWhen).to.exist;
    expect(index.withLatestFrom).to.exist;
    expect(index.zipAll).to.exist;
  });
});
