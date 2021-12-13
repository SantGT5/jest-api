import { act, renderHook } from "@testing-library/react-hooks";
import { usePokemon } from "./usePokemon";

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe("mi primer test useEffect", () => {
    test("test toBeCalledWith", async () => {
      global.fetch = jest.fn();

      await act(async () => renderHook(() => usePokemon("ivysaur")));

      expect(global.fetch).toBeCalled();
      expect(global.fetch).toBeCalledWith(
        "https://pokeapi.co/api/v2/pokemon/ivysaur"
      );
    });

  test("handles loading state correctly", async () => {
    const { deferred, promise } = getControlledPromise();

    global.fetch = jest.fn(() => promise);

    const { result, waitForNextUpdate } = renderHook(usePokemon);

    expect(result.current.isLoading).toBe(true);
    deferred.resolve();

    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  test("handle successfull state correctly", async () => {
    const { deferred, promise } = getControlledPromise();

    global.fetch = jest.fn(() => promise);

    const { result, waitForNextUpdate } = renderHook(usePokemon);
    deferred.resolve({ json: () => ({ pokemon: "pikachu" }) });

    await waitForNextUpdate();
    expect(result.current.pokemon).toStrictEqual({ pokemon: "pikachu" });
  });
});
