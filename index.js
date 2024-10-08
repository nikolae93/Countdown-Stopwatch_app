
document.body.addEventListener( 'click', function ( event ) {

    // One counter
    if( event.target.id == 'one_btn' ) {
        Start_timer("min_in1","sec_in1", document.getElementById("min_in1").value , document.getElementById("sec_in1").value,"one_btn" );
    };
    if( event.target.id == 'one_btn_reset' ) {
            clearInterval(obj_intervals["one_btn"]);
    };
    // One counter end

    // Two counters
    if( event.target.id == 'two_btn' ) {
        Start_timer("min_in21","sec_in21", document.getElementById("min_in21").value , document.getElementById("sec_in21").value,"two_btn" );
    };
    if( event.target.id == 'two_btn_reset' ) {
        clearInterval(obj_intervals["two_btn"]);
    };

/* ---------------------------------------------------------------------------------------------- */

    if( event.target.id == 'two_btn2' ) {
        Start_timer("min_in22","sec_in22", document.getElementById("min_in22").value , document.getElementById("sec_in22").value,'two_btn2' );
    };
    if( event.target.id == 'two_btn_reset2' ) {
      clearInterval(obj_intervals["two_btn2"]);
    };

    // Two counters END

    // four counters
    if( event.target.id == 'four_btn1' ) {
        Start_timer("min_in41","sec_in41", document.getElementById("min_in41").value , document.getElementById("sec_in41").value,'four_btn1' );
    };
    if( event.target.id == 'four_btn_reset1' ) {
        clearInterval(obj_intervals["four_btn1"]);
    };

    if( event.target.id == 'four_btn2' ) {
        Start_timer("min_in42","sec_in42", document.getElementById("min_in42").value , document.getElementById("sec_in42").value,'four_btn2' );
    };
    if( event.target.id == 'four_btn_reset2' ) {
        clearInterval(obj_intervals["four_btn2"]);
    };

    if( event.target.id == 'four_btn3' ) {
        Start_timer("min_in42","sec_in43", document.getElementById("min_in43").value , document.getElementById("sec_in43").value,"four_btn3" );
    };
    if( event.target.id == 'four_btn_reset3' ) {
        clearInterval(obj_intervals["four_btn3"]);
    };

    if( event.target.id == 'four_btn4' ) {
        Start_timer("min_in42","sec_in44", document.getElementById("min_in44").value , document.getElementById("sec_in44").value,"four_btn4" );
    };
    if( event.target.id == 'four_btn_reset4' ) {
        clearInterval(obj_intervals["four_btn4"]);
    };

    // four counters end

    if( event.target.id == 'one_btn_stopwatch' ) {
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


  // Dev and test function
  function clearAllIntervals(){
    for(i=0; i<150; i++)
        {
            window.clearInterval(i);
        }
  }