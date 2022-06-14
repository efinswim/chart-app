const valueSlots = () => {
  const initialValue = 0;
  const endValue = 100;
  const finalArray = [];

  for (let n = initialValue; n <= endValue; n += 5) {
    finalArray.push(String(n));
  }

  return finalArray
}

export { valueSlots }