function countWords(inputWords)
{
  countedWords = {}

  inputWords.reduce(function(prev, current, idx, arry)
  {
    if(current in countedWords)
    {
      countedWords[current]++
    }
    else
    {
      countedWords[current] = 1
    }
    return current
  }, null)
  return countedWords
}
module.exports = countWords
