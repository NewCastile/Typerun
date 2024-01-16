export const aplhSortedArray = <T extends object>({
  sortDirection = "DESC",
  sortingProp,
  arr,
}: {
  sortDirection?: "ACS" | "DESC";
  sortingProp: string;
  arr: Array<T>;
}) => {
  if (!arr.length) return arr;
  const [arrFirstElement] = arr;

  if (!(sortingProp in arrFirstElement)) return arr;

  const sortedArray = arr.sort((prev, next) => {
    const prevValue = prev[sortingProp as keyof T];
    const nextValue = next[sortingProp as keyof T];

    if (prevValue < nextValue) {
      return sortDirection === "DESC" ? -1 : 1;
    } else if (prevValue > nextValue) {
      return sortDirection === "DESC" ? 1 : -1;
    } else {
      return 0;
    }
  });

  return sortedArray;
};
