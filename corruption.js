// HELPER FUNCTIONS ----------------------------

/* Fisher-Yates shuffle */
function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

/* Show trial image */
function showTrial(img) {
  $('#fixation').show();

  setTimeout(function() {
    $('#fixation').hide();
    $('#trialImage').attr("src",
      "https://web.stanford.edu/~rmw237/Political%20Officials/" + img);
    $('#trial').show();

    setTimeout(function() {
      $('#trialImage').hide();
    }, 2000);
  }, 1000);
}

// VARIABLES ----------------------------
var trialOrder = shuffle([0, 1, 2, 3]);
var images = ["1.0.jpg", "1.1.jpg", "10.0.jpg", "10.1.jpg"];

// , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
var curTrial = 0;
var nTrials = 4; // 16
var startTrialTime;
var rt = [];
var response = [];

/* Wait for clicks */
// $('#startExperiment').click(nextTrial());


// MAIN EXPERIMENT FUNCTION ----------------------------
function nextTrial() {
  // get the data from the last trial
  // not on the first time, but every other time.
  if (curTrial == 0) {
    $("#instructions").hide();
  } else {
    $("#trial").hide();

    // clear radio button
    rt.push((new Date()).getTime() - startTrialTime);
    response.push($("input[type='radio']:checked").val());
    $("input:radio").attr("checked", false);
  }

  // done with experiment
  if (curTrial >= nTrials) {
    $('#submitButton').show();

    // taking a break
  }
  // else if (curTrial % 15 == 0) {
    // SHOW BREAK SLIDE

    // otherwise, show rest of experiment
  // }
  else {
    startTrialTime = (new Date()).getTime();
    showTrial(images[trialOrder[curTrial]]);
    curTrial++;
  }
}
