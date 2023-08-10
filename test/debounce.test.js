import debounce from "../debounce";
import { jest } from "@jest/globals";

describe("debounce", function () {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
  test("should debounce a function", function () {
    var callCount = 0;

    var debounced = debounce(
      function () {
        ++callCount;
      },
      100,
      {}
    );

    debounced()
    jest.advanceTimersByTime(50);
    expect(callCount).toEqual(0)
    debounced()
    jest.advanceTimersByTime(101);
    debounced()
    expect(callCount).toEqual(1)
  });

  test("should execute a function when out of max wait", function () {
    var callCount = 0;

    var debounced = debounce(
      function () {
        ++callCount;
      },
      100,
      {
        maxWait: 200
      }
    );
    debounced()
    expect(callCount).toEqual(0)
    jest.advanceTimersByTime(75);
    debounced()
    jest.advanceTimersByTime(75);
    debounced()
    jest.advanceTimersByTime(75);
    expect(callCount).toEqual(1)
  });
});
