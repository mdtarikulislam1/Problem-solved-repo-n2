function friend(friends) {
  let result = [];
  let mapedData = friends.map((f) => {
    if (f.length === 4) {
      result.push(f);
    }
  });
  return result;
}

const data = ["Ryan", "Kieran", "Jason", "Yous"];

console.log(friend(data));
