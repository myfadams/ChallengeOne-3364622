class Trie {
  constructor() {
    this.endsWith = false;
    this.children = Array(26).fill(null);
  }
}

const root = new Trie();

function insert(root, string) {
  let curr = root;
  for (let i=0; i < string.length; i++) {
    const pos = string[i].charCodeAt(0) - 'a'.charCodeAt(0);
    console.log(string[i])
    if (!curr.children[pos]) {
      const node =new Trie();
      node.children[pos] = string[i];
    }
    curr=curr[pos];
  }

  curr.endsWith=true;
}

insert(root, "cat")

