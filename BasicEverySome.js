function checkUsersValid(goodUsers)
{
  return function allUsersValid(submittedUsers)
  {
    if (submittedUsers.every(function(subUser)
    {
      return goodUsers.some(function(goodUser)
      {
        return subUser.id == goodUser.id
      })
    }))
    return true
  }
}
module.exports = checkUsersValid
