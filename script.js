let count = 0;

let cc = card => {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: 
        count++;
        break
    case 10:
    case "J": 
    case "Q":
    case "K":
    case "A":
        count--;
        break           
  }
  return count>0 ? `${count} Bet` : `${count} Hold`
}

cc(10); cc("J"); cc("K");cc("Q");cc("A")
