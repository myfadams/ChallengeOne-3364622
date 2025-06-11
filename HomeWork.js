// class Trie{
//     constructor (){
//         this.array=[];
//     }
//     insert(string){
//         this.array.push(string)
//     }
//     search(word){
//         for (let i=0;i<this.array.length;i++ ){
//             if(word==this.array[i]){
//                 return true;
//             }
//             return false
//         }
//     }

//     startsWith(char){
//         for (let i=0;i<this.array.length;i++ ){
//             if(this.array[i].startsWith(char)){
//                 return true;
//             }
//             return false
//         }
//     }

    
// }


// const trie=new Trie()

// trie.insert("apple")
// console.log(trie.search("apple"))
// console.log(trie.search("app"))
// console.log(trie.startsWith("app"))
// trie.insert("app")
// trie.search("app")