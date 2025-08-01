class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    if (!word) return;
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in curr.children)) {
        curr.children[ch] = new Node();
      }
      curr = curr.children[ch];
    }
    curr.isEndOfWord = true;
  }

  search(word) {
    if (!word) return false;
    return this.dfs(word, 0, this.root);
  }

  dfs(word, index, node) {
    if (!node) return false;
    if (index === word.length) return node.isEndOfWord;
    if (word[index] === ".") {
      for (const ch of Object.keys(node.children)) {
        if (this.dfs(word, index + 1, node.children[ch])) return true;
      }
      return false;
    } else {
      if (!node.children[word[index]]) return false;
      return this.dfs(word, index + 1, node.children[word[index]]);
    }
  }
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bat");
wordDictionary.addWord("cat");
wordDictionary.addWord("rat");
console.log(wordDictionary.search("mat"));
console.log(wordDictionary.search("bat"));
console.log(wordDictionary.search(".at"));
console.log(wordDictionary.search("c.."));
