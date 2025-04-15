function nSidedShape(n) {
    const shapes = [
      "circle",       // index 0 → not used
      "circle",     
      "semi-circle", 
      "triangle",  
      "square",   
      "pentagon",     
      "hexagon",      
      "heptagon",     
      "octagon",      
      "nonagon",   
      "decagon"    
    ];
  
    return shapes[n];
  }

  console.log(nSidedShape(5));
  console.log(nSidedShape(3));
  console.log(nSidedShape(8));  
  