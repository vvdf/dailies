var searchInsert = (nums, target) => {
if (target <= nums[0]) {
    return 0;
  } else if (target === nums[nums.length - 1]) {
    return nums.length - 1;
  } else if (target > nums[nums.length - 1]) {
    return nums.length;
  } else if (nums.length === 2) {
    return 1;
  }

  const bstSearchStep = (idx, prevStep = (nums.length - 1 * 2), prevDir = 'r') => {
    if (nums[idx] === target) {
      return idx;
    }
    
    let nextDir = nums[idx] < target ? 'r' : 'l';
    let nextStep = Math.ceil(prevStep / 2);

    // if traversing single steps and we reach a prevDirection change
    // we've found it's ideal position, return the larger idx
    if (nextStep === 1 && nextDir === 'r' && prevDir === 'l') {
      if (nums[idx] > target) {
        return idx;
      }
      return idx + 1;
    }
    return bstSearchStep(nextDir === 'r' ? idx + nextStep : idx - nextStep, nextStep, nextDir);
  }

  return bstSearchStep(0);
};