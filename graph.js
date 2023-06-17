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
            
            return
        }
        for (let  adjecencentVertex of this.adjecencyList[vertex]) {
            
            this.removeEdge(vertex,adjecencentVertex)
        }
        delete this.adjecencyList[vertex]
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjecencyList[vertex1].has(vertex2)
        &&
        this.adjecencyList[vertex2].has(vertex1)
        )
}
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + "->"+[...this.adjecencyList[vertex]]);
        }
    }

    Bfs(startingvertex) {
      const visited = {};
      const queue = [startingvertex];
      visited[startingvertex] = true;
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

Dfs(v){
  let visited = new Array(this.adjecencyList[v]);
  for(let i = 0; i < this.V; i++){
      visited[i] = false;
  }
  this.DFS(v, visited);
}
DFS(v, visited)
{  
  visited[v] = true;
 console.log(v);
  for(let edge of this.adjecencyList[v])
  {
      let n = edge
      if (!visited[n]){
          this.DFS(n, visited);
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

// graph.display()
// 