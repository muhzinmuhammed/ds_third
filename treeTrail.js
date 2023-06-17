class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class binarySearch{
    constructor(){
        this.root=null
    }

    insertTree(value){
        let current=this.root
        const newNode=new Node(value)
        if (current==null) {
            this.root=newNode
            return
            
        }

        while (true) {
            if (value<current.value) {

                if (current.left==null) {

                    current.left= new Node(value)
                    break
                    
                }else{
                    current=current.left
                }
                
            }
            else{
                if (current.right==null) {

                    current.right= new Node(value)
                    break
                    
                }else{
                    current=current.right
                }

            }
            
        }
    }

    search(value){
        let current=this.root
        while (current) {

            
            if (value<current.value) {
                current=current.left
                
            }
            else if (value>current.value) {
                current=current.right
                
            }
            else{
                return true
            }
            
        }
        return false
    }
    min(root){
        if (!root.left) {
            return root
            
        }else{
            return this.min(root.value)
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root==null) {
            return root
            
        }
        if (value<root.value) {
            root.left=this.deleteNode(root.left,value)
            
        }
        else if (value>root.value) {
            root.right=this.deleteNode(root.right,value)
            
        }else{
            if (!root.left&&!root.right) {

                return null
                
            }
            else if (!root.left) {
                return right
            }
            else if (!root.right) {
                return left
                
            }

            root.value=this.min(root.right)
            root.right = this.deleteNode(root.right, root.value);
        }
        return root
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
            
        }
    }
    preorder(root){
        if (root) {
            this.preorder(e)
            
        }
    }
    findClosest(target){
        let current=this.root
        let closest=current.value
        while (current) {
            if (Math.abs(target-closest)>Math.abs(target-current.value)) {
                closest=current.value
                
            }

            if (target<current.value) {
                current=current.left
                
            }
            else if (target>current.value) {
                current=current.right
                
            }
            else{
                break
            }
        }
        return closest

    }
    validate(){
        return this.check(this.root,-Infinity,Infinity)
    }
    check(root,minVal,maxVal){
        if (root==null) {
            return true
            
        }

        if (root.value>maxVal||root.value<minVal) {
            return false
            
        }
        return this.check(root.left,minVal,root.value)&&
         this.check(root.right,root.value,maxVal)
    }
}

const bst=new binarySearch()
bst.insertTree(30)
bst.insertTree(40)
bst.insertTree(50)
console.log(bst.search(30));
console.log(bst.delete(50));
bst.inOrder(bst.root)

console.log(bst.findClosest(45));
console.log(bst.validate());