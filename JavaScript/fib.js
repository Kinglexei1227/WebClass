function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const memo = {};

function fib(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fib(n - 1) + fib(n - 2);
}
