class heap{
    constructor(){
        this.data=[]
    }

    push(arr){
        for (let i = 0; i < arr.length; i++) {
            this.data.push(arr[i])
            this.buildHeap()
            
        }
    }
  buildHeap(){
    let i=this.data.length-1
    while (i>0) {
        let parentIndex=Math.ceil((i/2)-1)
        if (this.data[i]>this.data[parentIndex]) {
            this.swap(i,parentIndex)
            i=parentIndex
            
        }else{break}
    }
  }

    swap(i,j){
        let temp=this.data[i]
        this.data[i]=this.data[j]
        this.data[j]=temp
    }
    pop(){
        if (this.data.length<2) {
            return this.data.pop()
            
        }

        let remove=this.data[0]
        this.data[0]=this.data.pop()

        let i=0
        while (true) {
            let [leftIndex,rightIndex]=[(i*2)+1,(i*2)+2]
          let leftValue=this.data[leftIndex]??-Infinity
          let rightValue=this.data[rightIndex]??-Infinity
          if(leftValue < this.data[i] && rightValue < this.data[i]){
            break
        }
          let large
          if (leftValue>rightValue) {
            large=leftIndex
            
          }
          else{
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

const ss=new heap()
ss.push([3,4,5,6,1,9])
console.log(ss);

ss.sortHeap()