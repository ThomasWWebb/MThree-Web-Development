function clearErrors() {
    for (var loopCounter = 0 ;loopCounter < document.forms["numberFun"].elements.length;loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
        //checks if the parent element of the input being validated contains a "has-" string, 
        //indexOf() gets the position of the substring and returns -1 if it's not present
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus(); // good UX as puts cursor back in first input
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    // it's important to check for isNAN as not all browsers support a number type
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }

    if (num2 == "" || isNaN(num2)) {
        alert("Num2 must be filled in with a number.");
        document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("addResult").innerText = Number(num1) + Number(num2);
    document.getElementById("subtractResult").innerText = num1 - num2;
    document.getElementById("multiplyResult").innerText = num1 * num2;
    document.getElementById("divideResult").innerText = num1 / num2;
    return false;
    //false is returned so that the form doesn't submit and the results can still be seen
    //if true was returned then the form would submit regardless of the set action attribute for the form
}