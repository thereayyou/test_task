export const getDefiniteId = () => {
  const id = Number(window.location.href.split("")[window.location.href.length - 1]);

  return id
};
