interface ITodos {
  id: string;
  desc: string;
  checked: boolean;
}

export function removeIdFromList<T extends { id: string }>(
  list: T[],
  idToRemove: string
) {
  return list.filter((cur) => {
    return cur.id !== idToRemove;
  });
}

export function saveTodosToLocalStorage(list: ITodos[]) {
  localStorage.setItem("todosList", JSON.stringify(list));
}
