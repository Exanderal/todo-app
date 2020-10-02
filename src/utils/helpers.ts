interface ITodos {
  id: string;
  desc: string;
  checked: boolean;
}

export function removeIdFromList(list: ITodos[], idToRemove: string): ITodos[] {
  return list.filter((cur) => {
    return cur.id !== idToRemove;
  });
}

export function saveTodosToLocalStorage(list: ITodos[]) {
  localStorage.setItem("todosList", JSON.stringify(list));
}
