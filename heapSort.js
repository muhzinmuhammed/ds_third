class maxHeap{
    constructor(){
        this.data=[]
    }
    peek()
    {
        return this.data[0]
    }
    push(arr){
        
        for( let i=0;i<arr.length;i++){
            this.data.push(arr[i])
            this.buildHeap()
        }
       
        
    }
    buildHeap(){
        let i=this.data.length-1
        while(i>0){
            let parentindex=Math.ceil((i/2)-1)
            if(this.data[i]>this.data[parentindex]){
                this.swap(i,parentindex)
                i=parentindex
            
            }else{
                break
            }
        }
    }

    swap(i,j){
        let temp=this.data[i]
        this.data[i]=this.data[j]
        this.data[j]=temp
    }
    
    pop(){
        if(this.data.length<2){
            return this.data.pop()
        }
        const remove=this.data[0]
        this.data[0]=this.data.pop()
        let i=0
        while(true){
            const [leftIndex, rightIndex] = [(i * 2) + 1, (i * 2) + 2]
            const leftValue=this.data[leftIndex]?? -Infinity
            const rightValue=this.data[rightIndex]?? -Infinity
            if(leftValue < this.data[i] && rightValue < this.data[i]){
                break
            }
            let large
            if(leftValue > rightValue){
                large=leftIndex
            }else{
                large=rightIndex
            }
            this.swap(i,large)
            i=large  
        }       
        
        return remove
    }

    sortHeap(){
        let sort=[]
        let n=this.data.length
        for(let i=0;i<n;i++){
            
            
           sort.unshift(this.pop())
        }
        console.log(sort)
       
    }
    
}

const mh=new maxHeap()
 

mh.push([3,4,5,6,1,9])

mh.sortHeap()
