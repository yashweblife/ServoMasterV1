export const makeRandString = (size: number = 10): string => {
  const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var op = "";
  for (var i = 0; i < size; i++) {
    op += a[Math.floor(Math.random() * a.length)];
  }
  return op;
};
