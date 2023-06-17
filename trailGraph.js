class Graph{
    constructor(){
        this.adjecencyList={}
        
    }
    addvertex(vertex){
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex]=new Set()
            
        }
        
    }
    addEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1]) {
            this.addvertex[vertex1]

            
        }
        if (!this.adjecencyList[vertex2]) {
            this.addvertex[vertex2]

            
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)

    }

    removeVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            return null
            
        }

        for (const adjecencyList of this.adjecencyList[vertex]) {

            this.removeEdge(vertex,adjecencyList)
            
        }
        delete this.adjecencyList[vertex]
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + "->"+[...this.adjecencyList[vertex]]);
        }
    }
  Bfs(startvertex){
    const visited = {};
      const queue = [startvertex];
      visited[startvertex] = true;
      const result=[]
      while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex)
       
  
        this.adjecencyList[vertex].forEach(neighbor => {
          if(!visited[neighbor]){
              visited[neighbor] = true
              queue.push(neighbor)
          }    
      });

   }
    return result
  }

 Dfs(start){
    let visited=new Array(this.adjecencyList[start])
    for (let i = 0; i < this.start; i++) {
        visited[i]=false
        
    }
    this.dfs(start,visited)

 }

 dfs(start,visited){
    visited[start]=true
    console.log(start);
    for (const edge of this.adjecencyList[start]) {
        let n=edge
        if (!visited[n]) {
            visited[n]=true
            this.dfs(n,visited)
                    
        }
        
    }


 }


}

const graph=new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addvertex("D")
graph.addvertex("E")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("A","A")
graph.addEdge("B","B")
graph.addEdge("D","E")
graph.addEdge("E","A")



graph.Dfs("A")