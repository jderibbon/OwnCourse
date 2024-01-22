// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: --- done
// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window) {

    // STEP 7: --- done
    // Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1

    var byeSpeaker = {};

    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";

    // STEP 8: --- done
    // Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2

    byeSpeaker.sayBye = function (varName) {
        console.log(speakWord + " " + varName);
    }


    // STEP 9: --- done
    // Expose the 'byeSpeaker' object to the global scope.Name it
    // 'byeSpeaker' on the global scope as well.
    // xxxx.xxxx = byeSpeaker;

    window.byeSpeaker = byeSpeaker;

})(window);
