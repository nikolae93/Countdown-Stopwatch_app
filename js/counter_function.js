// document.getElementById("one_btn").addEventListener("click",Start_timer);

 async function Start_timer(id_min,id_sec,m,s){



  await  setInterval(()=>
     
        {
            m= Number(m);
            s=Number(s);

            
       
                if(s>0){
    
                 s--;
                 document.getElementById(`${id_sec}`).value=s;
                 document.getElementById(`${id_sec}`).innerHTML=s;
    
                }else{
                    if(m>0){
                        s=60;
                        m--;
                        document.getElementById(`${id_sec}`).innerHTML=s; 
                        document.getElementById(`${id_sec}`).vaulue=s;
                        document.getElementById(`${id_min}`).innerHTML=m; 
                        document.getElementById(`${id_min}`).value=m;   
                        
                    }else{
                        clearInterval();
                    }
                    
                }
                clearInterval();
                return;
                // console.log(m,s);
         

        }
    
    
    
    ,1000);

}





