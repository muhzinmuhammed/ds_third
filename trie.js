class Node{
    constructor(){
        this.children={}
        this.isEndofWord=false
    }
    
}

class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node =this.root
        for (let i = 0; i < word.length; i++) {
           const char=word[i]
           if (!node.children[char]) {
            node.children[char]=new Node()
            
           }
           node=node.children[char]
            
        }
        node.isEndofWord=true
    }

   search(word){
    let node=this.root
    for (let i = 0; i < word.length; i++) {
       const char=word[i]
       if (!node.children[char]) {
        return false
        
       }
       node=node.children[char]
        
    }
    return node.isEndofWord
   }
    startwith(prefix){
        let node = this.root
        for (let i = 0; i < prefix.length; i++) {
            const char=prefix[i]

            if (!node.children[char]) {
               return false
                
               }
               node=node.children[char]
                
            }
            return true


    }
    
}
const trie=new Trie()
trie.insert("APPLE")
trie.insert("APPI")
trie.insert("AUU")
console.log(trie.root.children.A);


