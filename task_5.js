function showUser(id) {
    if (id < 0) {
      throw new Error("ID must not be negative");
    }
    return { id };
  }
  
  function showUsers(ids) {
    const validUsers = [];
    for (const id of ids) {
      try {
        const user = showUser(id);
        validUsers.push(user);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    return validUsers;
  }
  
  const result = showUsers([7, -12, 44, 22]);
  console.log(result);
  