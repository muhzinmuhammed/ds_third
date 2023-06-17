class MinHeap {
    constructor() {
      this.data= []
    }
  
    peak() {
      return this.data[0]
    }
  
    push(value) {
      this.data.push(value)
      let i = this.data.length - 1
      while (i > 0) {
        const parentIndex = Math.ceil((i / 2) - 1)
        if (this.data[i] < this.data[parentIndex]) {
          this.swap(i, parentIndex)
          i = parentIndex
        } else {
          break
        }
      }
    }
  
    pop() {
      if (this.data.length < 2) {
        return this.data.pop()
      }
      const min = this.data[0]
      this.data[0] = this.data.pop()
      let i = 0
      while (true) {
        const [leftIndex, rightIndex] = [(i * 2) + 1, (i * 2) + 2]
        const leftValue = this.data[leftIndex] ?? Infinity
        const rightValue = this.data[rightIndex] ?? Infinity
        if (leftValue > this.data[i] && rightValue > this.data[i]) {
          break
        }
        let smallestIndex
        if(leftValue < rightValue){
          smallestIndex=leftIndex
        }else{
          smallestIndex=rightIndex
        }
        this.swap(i, smallestIndex)
        i = smallestIndex
      }
      return min
    }
    
    swap(i1, i2) {
      const val1 = this.data[i1]
      this.data[i1] = this.data[i2]
      this.data[i2] = val1
    }
}

const heap = new MinHeap()
heap.push(2)
heap.push(1)
heap.push(3)
heap.push(5)
// heap.pop()
// heap.pop()

// console.log(heap.peak())
console.log(heap)
