interface IUseLocalStorage {
  key: string;
  defaultValue?: any;
}

export default function useLocalStorage({
  key,
  defaultValue,
}: IUseLocalStorage) {
  if (typeof window === "object") {
    const storageValue = localStorage.getItem(key) ?? defaultValue;
    const setStorageValue = (nextValue: typeof defaultValue) => {
      localStorage.setItem(key, nextValue);
    };
    return [storageValue, setStorageValue];
  }
  return [defaultValue, () => {}];
}
