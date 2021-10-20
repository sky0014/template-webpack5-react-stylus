export function arrayRemove(array, func) {
  if (array?.length) {
    const index = array.findIndex((v) => func(v));
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
