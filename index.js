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

    // four counters
    if( event.target.id == 'four_btn1' ) {
        Start_timer("min_in41","sec_in41", document.getElementById("min_in41").value , document.getElementById("sec_in41").value );
    };
    if( event.target.id == 'four_btn_reset1' ) {
        console.log("Clear");

     clearAllIntervals();
    };

    if( event.target.id == 'four_btn2' ) {
        Start_timer("min_in42","sec_in42", document.getElementById("min_in42").value , document.getElementById("sec_in42").value );
    };
    if( event.target.id == 'four_btn_reset2' ) {
        console.log("Clear");

     clearAllIntervals();
    };

    if( event.target.id == 'four_btn3' ) {
        Start_timer("min_in42","sec_in43", document.getElementById("min_in43").value , document.getElementById("sec_in43").value );
    };
    if( event.target.id == 'four_btn_reset3' ) {
        console.log("Clear");

     clearAllIntervals();
    };

    if( event.target.id == 'four_btn4' ) {
        Start_timer("min_in42","sec_in44", document.getElementById("min_in44").value , document.getElementById("sec_in44").value );
    };
    if( event.target.id == 'four_btn_reset4' ) {
        console.log("Clear");

     clearAllIntervals();
    };

    // four counters end

    if( event.target.id == 'one_btn_stopwatch' ) {
        // console.log("Stopwatch works");
        startStopwatch();
   
    };

    if( event.target.id == 'one_btn_stopwatch_stop' ) {
        stopStopwatch();
   
    };

    if( event.target.id == 'one_btn_reset_stopwatch' ) {
        resetStopwatch();
   
    };
    

    // do not cross
  } );


  function clearAllIntervals(){
    for(i=0; i<150; i++)
        {
            window.clearInterval(i);
        }
  }