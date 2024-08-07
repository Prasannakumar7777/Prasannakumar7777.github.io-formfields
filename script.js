document.getElementById('addTextFieldButton').addEventListener('click', function() {
    addField('text', 'Text Field');
});

document.getElementById('addNumberFieldButton').addEventListener('click', function() {
    addField('number', 'Number Field');
});

document.getElementById('addDateFieldButton').addEventListener('click', function() {
    addField('date', 'Date Field');
});

function addField(type, labelText) {
    // Create a new div to hold the new form field
    const newFieldDiv = document.createElement('div');
    
    // Create a new input element
    const newInput = document.createElement('input');
    newInput.type = type;
    newInput.name = `dynamicField_${type}[]`;
    
    // Optionally, add a label
    const newLabel = document.createElement('label');
    newLabel.textContent = `${labelText}: `;
    
    // Append the label and input to the new div
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newInput);
    
    // Append the new div to the formFields div
    document.getElementById('formFields').appendChild(newFieldDiv);
}
