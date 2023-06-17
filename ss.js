class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=new Node()
    }

    insertTree(value){
        let current=this.root
        let newNode=new Node(value)
        if (current==null) {
            this.root=newNode
            return
            
        }

        while (true) {
            if (value<current.value) {
                if (current.left==null) {
                    current.left=new Node(value)
                    break

                    
                }else{
                    current=current.left
                }
                
            }else{
                if(value>current.value){
                    if (current.right==null) {
                        current.right=new Node(value)
                        break
                        
                    }else{
                        current=current.right
                    }
                }
            }
        }
    }

    inorder(root){
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
            
        }
    }
}

const tree=new Tree()
tree.insertTree(50)
tree.insertTree(30)
tree.insertTree(40)
tree.insertTree(50)
console.log(tree.inorder(tree.root));

console.log(tree.root);