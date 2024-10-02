// console.log("JS connected");

document.body.addEventListener( 'click', function ( event ) {

    // One counter
    if( event.target.id == 'one_btn' ) {
        Start_timer("min_in1","sec_in1", document.getElementById("min_in1").value , document.getElementById("sec_in1").value );
    };
    if( event.target.id == 'one_btn_reset' ) {
            console.log("Clear");

         clearAllIntervals();
    };
    // One counter end

    // Two counters
    if( event.target.id == 'two_btn' ) {
        Start_timer("min_in21","sec_in21", document.getElementById("min_in21").value , document.getElementById("sec_in21").value );
    };
    if( event.target.id == 'two_btn_reset' ) {
        console.log("Clear");

     clearAllIntervals();
    };

/* ---------------------------------------------------------------------------------------------- */

    if( event.target.id == 'two_btn2' ) {
        Start_timer("min_in22","sec_in22", document.getElementById("min_in22").value , document.getElementById("sec_in22").value );
    };
    if( event.target.id == 'two_btn_reset2' ) {
        console.log("Clear");

    clearAllIntervals();
    };

    // Two counters END


  } );


  function clearAllIntervals(){
    for(i=0; i<150; i++)
        {
            window.clearInterval(i);
        }
  }