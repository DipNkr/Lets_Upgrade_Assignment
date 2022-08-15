 let arr = [{
     "name":"India",
     "capital":"Delhi",
     "population":138000000
 },
 {
     "name":"Thailand",
     "capital":"Bangkok",
     "population":539000000
 },
 {
     "name":"XYZ",
     "capital":"ABC",
     "population":1500
 }
 ]
 
 for (let i=0;i<=2;i++){
     if(arr[i].population<2000){
         console.log(arr[i].name)
     }
     
 }
