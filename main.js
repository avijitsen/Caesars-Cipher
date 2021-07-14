function rot13(str) { // LBH QVQ VG!
    var x="";
    for(var i =0;i<str.length;i++){
      var y = str.charCodeAt(i);
      var z;
      if(y>=65 && y<78){
        z= String.fromCharCode(y+13);
      }
        
      else if(y>=78) {
         z=String.fromCharCode(y-13);
      }
      else {
            z = String.fromCharCode(y);
        }
      
      x+=z;
    }
    return x;
  }
  
  // Change the inputs below to test
  rot13("SERR CVMMN!");