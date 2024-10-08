
// Object of all possible intervals
var obj_intervals = {
    "one_btn":0,
    "two_btn":0,
    "two_btn2":0,
    "four_btn1":0,
    "four_btn2":0,
    "four_btn3":0,
    "four_btn4":0,
};

// Main timer function
 async function Start_timer(id_min,id_sec,m,s,int_id){

    obj_intervals[int_id] = await  setInterval(()=>
     
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
                
        }
    
    ,1000);

}





