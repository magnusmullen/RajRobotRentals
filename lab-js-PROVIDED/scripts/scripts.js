/* YOUR NAME: Magnus Mullen

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/* Makes sure everything is loaded before it calls for elements by ID (without this it will be called by null)*/
document.addEventListener("DOMContentLoaded", function () {
    /****************** create variables ******************/
    /* create variables to hold the values for modelName and duration */

    // setting variables (modelName's starting default will be XYZ)
    let modelName = "XYZ";
    let duration = 120;

    /****************** helper function ******************/
    /* create a function called recalculate() which will
        - create a variable to represent the calculated-cost span element. That will look something like:
            // let costLabel = document.getElementById("calculated-cost");
        - check the value of the modelName variable, and use that to calculate the new total cost:
            e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
            if modelName is currently "CPRG", duration * 213 gives us the new total cost.
        - set the value of the calculated-cost element's innerHTML to this new value
    */

    function recalculate() {
        // Gets the span element by its ID
        let costLabel = document.getElementById("calculated-cost");
        
        // variable to storex the cost
        let cost = 0;

        // Checksalue of modelName and calculates the cost
        if (modelName == "XYZ") {
            cost = duration * 100;
        } else if (modelName == "CPRG") {
            cost = duration * 213;
        }

        // Updates the innerHTML with the new cost
        costLabel.innerHTML = cost;
    }

    /****************** model button logic ******************/

    /* 
    - first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
    - second, create a function called changeModel() which checks the value of the model name variable. This function will:
        - create a variable to represent the model-text span element
        - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
        - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
        - then, recalculate() the total cost.
    - finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
        // modelButton.addEventListener("click", changeModel);

    // variable for the "Switch Model" button
    let modelButton = document.getElementById("model-button"); 

    // Function to switch model and update UI
    function changeModel() {
        // Gets model-text span
        let modelText = document.getElementById("model-text");

        // Switch modelName and update UI
        if (modelName == "XYZ") {
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
        } else if (modelName == "CPRG") {
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
        }

        // Recalculate cost
        recalculate();
    }

    // Attaches click event to "Switch Model" button
    modelButton.addEventListener("click", changeModel);

    /****************** duration button logic ******************/
    /*  - first, create a variable to represent the "Change Duration" pseudo-button.
        - then, create a function called changeDuration() that will
            - create a variable to represent the duration-text span element
            - prompt() the user for a new duration
            - save the result of the prompt() to the duration variable
            - change the innerHTML of the duration-text span element to this new value
            - recalculate() the total cost/
        - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
    */

    // variable for "Change Duration" button
    let durationButton = document.getElementById("duration-button");

    // Function to change the duration
    function changeDuration() {
    // Gets duration-text span
        let durationText = document.getElementById("duration-text");
        
        // Prompt user for new duration and save
        let newDuration = prompt("Enter the new duration:");

        duration = Number(newDuration);

        // Update duration-text span with new duration
        durationText.innerHTML = duration;

        // Recalculate total cost after updating duration
        recalculate();
    }

    // Updates duration when loaded 
    function loadDuration() {
        let durationText = document.getElementById("duration-text");
        durationText.innerHTML = duration;
        recalculate();
    }

    loadDuration();

    // Attach click event to "Change Duration" button
    durationButton.addEventListener("click", changeDuration);
});
