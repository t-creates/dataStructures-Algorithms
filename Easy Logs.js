/* Easy Logs

Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

*/

// Solution #0
function logs(x , a, b){
  return (Math.log(a) + Math.log(b)) / Math.log(x)
}

// Solution #1
function logs1(x , a, b){
  return (Math.log(a*b) / Math.log(x));
  }

  // Solution #1
  logs = (x, a, b) => Math.log(a * b) / Math.log(x)