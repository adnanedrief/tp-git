const screenn=document.getElementById("screen-span")
const components=document.querySelectorAll(".component")
const operations=document.querySelectorAll(".op")
components.forEach(addToscreen)
let result=0;
let s=""
function addToscreen(element){

    element.addEventListener("click",(event)=>{
    
    if(screenn.innerText=="0"){
    screenn.innerText=""}
    
    if(element.innerText=="c"){
        screenn.innerText="0"
        result=0;
        s=""
    }
    
    else{
       if(element.innerText=="sp"){
              screenn.innerText=screenn.innerText.slice(0,screenn.innerText.length -1)
              s=s.slice(0,s.length-1)
       }
       
        else if(element.innerText!="="){
        screenn.innerText+=element.innerText
        s=getResult1(element)
       
        
       }
        
        else{
        
       result=getResult(s)
        
        s=""
        screenn.innerText=""+result
        }
      } 
      
    
    
    
    })

    

}
function getResult1(element){

       let f=""
       s+=element.innerText
      
       for(let i of s ){
              
             f+=i

       }

       return f
      
}
function getResult(s){
       let f=""
       let opNumber=0;
       for(let i of s ){
              
             if(['+','-','*','/'].indexOf(i)!=-1){
              console.log(i)
              opNumber++;
              if(opNumber==1){
                     result+=Number(f)
              }
              else{switch(i){
                     case "+":
                            result+=Number(f)
                            break;
                     case "-":
                            result-=Number(f)
                            console.log(result)
                            break;
                     case "*":
                            result*=Number(f);
                            break;
                     case "/":
                            result/=Number(f)
                            break;
                     
                       
              }}
              f=""
              op=i
              
             
             }
             else{
              f+=i
             }
             

       }
       console.log(f)
       switch(op){
              case "+":
                     result+=Number(f)
                     op=""
                     break;
              case "-":
                     result-=Number(f)
                     op=""
                     break;
              case "*":
                     result*=Number(f);
                     op=""
                     break;
              case "/":
                     result/=Number(f)
                     op=""
                     break;
              
                
       }
      
return result;      
}

