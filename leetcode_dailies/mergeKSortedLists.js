
function mergeKLists (arrayOfLLNodes) {
  let head = null;
  let tail = null;
  
  const nodesExist = () => {
    for (let i = 0; i < arrayOfLLNodes.length; i++) {
      if (arrayOfLLNodes[i] !== null) {
        return true;
      }
    }
    return false;
  };
  
  while (nodesExist()) {
    let currentLowestValue = null;
    let currentLowestIndex = 0;
    for (let i = 0; i < arrayOfLLNodes.length; i++) {
      if (arrayOfLLNodes[i] !== null && currentLowestValue === null) {
        currentLowestValue = arrayOfLLNodes[i].val;
        currentLowestIndex = i;
      } else if (arrayOfLLNodes[i] !== null && arrayOfLLNodes[i].val < currentLowestValue) {
        currentLowestValue = arrayOfLLNodes[i].val;
        currentLowestIndex = i;
      }
    }
    
    let newNode = new ListNode(currentLowestValue);
    arrayOfLLNodes[currentLowestIndex] = arrayOfLLNodes[currentLowestIndex].next;
    
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }
  
  return head;
}

