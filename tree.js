/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  sumValues() {
    const toVisitQueue = [this];
    let sum = 0;

    while(toVisitQueue.length) {
      const current = toVisitQueue.shift();
      sum += current.val;
      
      for(let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return sum;
  }

  countEvens() {
    const toVisitQueue = [this];
    let evens = 0;

    while(toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if(current.val % 2 === 0){
        evens += 1;
      }
      for(let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return evens;
  }

  numGreater(lowerBound) {
    const toVisitQueue = [this];
    let count = 0;

    while(toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if(current.val > lowerBound){
        count += 1;
      }
      for(let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return count;
  }

}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    return !this.root ? 0 : this.root.sumValues();
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return !this.root ? 0 : this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return !this.root ? 0 : this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
