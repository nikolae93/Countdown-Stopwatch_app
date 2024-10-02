// console.log("JS connected");

document.body.addEventListener( 'click', function ( event ) {
    if( event.target.id == 'one_btn' ) {
        Start_timer("min_in1","sec_in1", document.getElementById("min_in1").value , document.getElementById("sec_in1").value );
    };
    if( event.target.id == 'one_btn_reset' ) {
            console.log("Clear");

         clearAllIntervals();
    };
  } );


  function clearAllIntervals(){
    for(i=0; i<150; i++)
        {
            window.clearInterval(i);
        }
  }