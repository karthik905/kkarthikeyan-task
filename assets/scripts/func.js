// function to get the value of a valid input element

const getInputValue = function(id){

    return document.getElementById(id).value;

}

// function to set the value for a valid input element

const setInputValue = function(id, value){

    document.getElementById(id).value = value;

}

//function to get the element with a matching idS

const getElement = (id) => document.getElementById(id)