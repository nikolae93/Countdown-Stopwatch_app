console.log("Stopwatch connected");

var tens =0;
var sec = 0;
var min =0;

var Interval;


function BeginTImer () {

  let stoti= document.getElementById("swt1");
  let secs = document.getElementById("sws1");
  let mins = document.getElementById("swm1");

    tens++; 
    
    if(tens <= 9){
        stoti.value = "0" + tens;
    }
    
    if (tens > 9){
        stoti.value = tens;
      
    } 
    
    if (tens > 99) {
    //  console.log("seconds");
      sec++;
      secs.value = "0" + sec;
      tens = 0;
      tens.value = "0" + 0;
    }
    
    if (sec > 9){
        secs.value = sec;
    }
    if(sec>59){
        min++;
        mins.value=min;
        sec=0;
        secs.value=sec;
    }
        
  }


  function startStopwatch(){
    Interval = setInterval(BeginTImer,10);
  }


  function stopStopwatch(){
    clearInterval(Interval);
  }


  function resetStopwatch(){
    tens=0;
    sec=0;
    min=0;
    document.getElementById("swt1").value=tens;
    document.getElementById("sws1").value=sec;
    document.getElementById("swm1").value=min;
  }

