var canPlaceFlowers = function(flowerbed, n) {
    var a = flowerbed.length;
    var count = 0;

    for (var i = 0; i < a; i++) {
        if ((i== 0|| flowerbed[i-1]== 0)&& flowerbed[i] == 0 && (i== a - 1 || flowerbed[i + 1] === 0))
        {
            flowerbed[i] = 1;  
            count++;          
        }   
                          
            
        
    }

    if (count>=n) {
        return true
        
    }else{
        false
    }

    
};




console.log(canPlaceFlowers([1,0,0,0,1],1));