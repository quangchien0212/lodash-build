import { jest } from "@jest/globals";
import throttle from "../throttle";

describe("throttle", function () {
  jest.useFakeTimers();
  test("should throttle a function", function () {
    var callCount = 0;

    var throttled = throttle(function (value) {
      ++callCount
      return value
    }, 1000)

    const result = throttled('a')
    expect(result).toEqual('a')
    expect(callCount).toEqual(1)
    jest.advanceTimersByTime(900);
    throttled()
    expect(callCount).toEqual(1)
    jest.advanceTimersByTime(900);
    throttled()
    expect(callCount).toEqual(2)
  });
});
