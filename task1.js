var findLatestWeight = function(weights, i = weights.length - 1) {
  const cur = weights.length - 1 === i;

  if (i === 0) return weights[0];

  weights.sort((a, b) => a - b);
  weights[i - 1] = (weights[i] === weights[i-1]) ? 0 : weights[i] - weights[i-1];

  return findLatestWeight(weights, i - 1);
}

var weights = [4,2,5,1,1,23];

function findLatestWeight(weights) {
  weights.sort((a, b) => a - b);
  if(weights.size())
}
