const merge = (input) => {
  let result = [];

  const overlapCheck = (tupleA, tupleB) => {
    // check for overlap NOT adjacency
    if (tupleB[0] <= tupleA[1] && tupleA[1] <= tupleB[1]
      || tupleB[0] <= tupleA[0] && tupleA[0] <= tupleB[1]
      || tupleA[0] <= tupleB[1] && tupleB[1] <= tupleA[1]
      || tupleA[0] <= tupleB[0] && tupleB[0] <= tupleA[1]) {
      return true;
    }
    return false;
  };

  const mergeTuples = (tupleA, tupleB) => {
    return [tupleA[0] <= tupleB[0] ? tupleA[0] : tupleB[0], tupleA[1] >= tupleB[1] ? tupleA[1] : tupleB[1]];
  };

  for (let i = 0; i < input.length; i++) {
    let initialMergeFound = false;
    for (let j = 0; j < result.length && !initialMergeFound; j++) {
      if (overlapCheck(input[i], result[j])) {
        result[j] = mergeTuples(input[i], result[j]);
        initialMergeFound = true;
      }
    }

    if (!initialMergeFound) {
      result.push(input[i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    let mergeFound = false;
    for (let j = i + 1; j < result.length && !mergeFound; j++) {
      if (overlapCheck(i !== j && result[i], result[j])) {
        result[i] = mergeTuples(result[i], result[j]);
        result.splice(j, 1);
        mergeFound = true;
      }
    }

    if (mergeFound) {
      i--;
    }
  }

  return result;
};