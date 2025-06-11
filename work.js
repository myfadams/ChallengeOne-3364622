class Trie {
  constructor() {
    this.children = Array(26).fill(null);
    this.isEndChar = false;
  }
}

function insert(root, key) {
  let curr = root;

  for (let c of key) {
    let pos = c.charCodeAt(0) - "a".charCodeAt(0);
    if (curr.children[pos] === null) {
      let newNode = new Trie();

      curr.children[pos] = newNode;
    }

    curr = curr.children[pos];
  }

  curr.isEndChar = true;
}

function search(root, key) {
  let curr = root;
  for (let c of key) {
    let pos = c.charCodeAt(0) - "a".charCodeAt(0);
    // console.log(pos)
    if(!curr?.children[pos]){
        return false
    }
    curr=curr.children[pos]
    
  }

  return curr.isEndChar;
}
function startsWith(root, key)
{
    let curr = root;
    for (let c of key) {
        let pos = c.charCodeAt(0) - "a".charCodeAt(0);

       
        if (curr.children[pos] === null) {
            return false;
        }
        curr = curr.children[pos];
    }

    return true;
}

const root = new Trie()
insert(root, "apple")
console.log(search(root, "apple"))
console.log(search(root, "app"))
console.log(startsWith(root, "app"))
insert(root, "app")
console.log(search(root, "app"))