const calPlay = (count) => {
  if (count < 10000) return `${count}`;
  if (count >= 10000 && count < 10000000) return `${parseInt(count / 10000)}万`;
  return `${parseInt(count / 10000000)}千万`;
};

export default calPlay;
