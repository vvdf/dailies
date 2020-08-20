// delete node in a bst

const deleteNode = (root, key) => {

	const step = (currIndex = 0, depth = 0) => {
		// traverse bst to find reference/location of key
			// go in the direction comparing current value of node, with desired key, and moving accordingly
			// note: jumping max width of current depth in order to locate kids of current node
		if (key === root[currIndex]) {
			// delete current node and fix bst accordingly
			let idxOfChild = currIndex + Math.pow(2, depth);
			// swap current index with its child
			root.splice(currIndex, 1);
		} else if (key < root[currIndex]) {
			// step to left child, on next depth wrt current parent
		} else {
			// step to right child, on next depth wrt current parent
		}
		
	}

	// if key not found, return root
	// if key is found
		// delete the node:
		// begin recursively stitching the bst back together, moving heaviest child to place of
		// parent until heaviest child moved has no kids of their own
		// HOPEFULLY THIS WILL RESULT IN A BALANCED BST BUT WE'LL SEE

	// return root

	step();

	return root;
};

console.log("dogs in the background");

/*

	Given a root node reference of a BST, and a key, delete the node with the given key, in the BST
	return the root node reference, possibly updated

	can be divided into two stages
	- search for node to remove
	- if node is found, delete the node


	time complexity: O(height of tree)

	example:
	input: root [5, 2, 6, 4, null, 7], key 3
	output: [5, 4, 2, null, null, 7]


	input: root [5, 3, 6, 2, 4, null, 7], key 5

	0: [[5]],
	1: [3, 6]
	2: [[2, 4], [5.5, 7]]
	3: [[[0, 1], ]]

	2, 3, 4, 5, 6, 7

	2, 4, 5, 6, 7

	     5
 2 or 4	   6 or 7

root 6, key 4

		  6
	   /    \
	  4      8
	 / \    / \
	2   5  7   9 
   / \
  1   3

		  6
	   /     \
	  5       8
	 / \     / \
	2   _   7   9 
   / \
  1   3<

  		  6
	   /     \
	  2       8
	 / \     / \
	1   5   7   9 
   / \
  0   3<
 / \
_  1.5

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7


In: root tree node, target node to delete
Out: root tree node of possibly modified tree
Con: O(tree height) time complexity
Edge:
	- delete root node
	- delete non existent node
	- delete any node (base case)


*/
