var index = 0

function reduce(arr, fn, initial)
{
  if(arr.length - 1 < index) return initial
  var funcResult = fn(initial, arr[index], index++, arr)
  return reduce(arr, fn, funcResult)
}
module.exports = reduce

/*meh, I hated this solution (╯°□°）╯︵ ┻━┻
┬──┬ ノ( ゜-゜ノ) */
