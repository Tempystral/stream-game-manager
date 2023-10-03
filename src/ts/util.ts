import localforage from "localforage";

type Result =
  | { success: true; value: unknown }
  | { success: false; error: Error };

async function getLocalForageSafe(key: string): Promise<Result> {
  const item = await localforage.getItem(key);

  if (item === null) {
    // The item does not exist, thus return an error result
    return {
      success: false,
      error: new Error(`Item with key "${key}" does not exist`)
    };
  }

  let res: unknown;

  try {
    res = JSON.parse(item as string);
  } catch (error) {
    return {
      success: false,
      error: error as Error
    };
  }
  return {
    success: true,
    value: res
  };
}

export { getLocalForageSafe };
