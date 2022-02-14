import { TimePasedPipe } from './time-pased.pipe';

describe('TimePasedPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePasedPipe();
    expect(pipe).toBeTruthy();
  });
});
