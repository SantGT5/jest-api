import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

test("increment", () => {
    const { result } = renderHook(useCounter);
    act(() => { result.current.increment() });
    expect(result.current.count).toBe(1);
    act(() => { result.current.decrement() })
    expect(result.current.count).toBe(0);
  });

  test("decrement", () => {
      const { result } = renderHook( useCounter )
      expect( result.current.count ).toBe(0)
      act(() => { result.current.decrement() })
      expect( result.current.count ).toBe(-1)
  })
