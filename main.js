// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator

// let item = formData[0];
let formFields = document.getElementById("fields");


formData.forEach(function(fieldData) {

    let input = document.createElement("input");

    input.setAttribute("type", fieldData.type);
    input.setAttribute("placeholder", fieldData.label);
    input.setAttribute("id", fieldData.id);

    if(fieldData.type === "select") {
      let selectBox = document.createElement("select");
      selectBox.setAttribute("placeholder", fieldData.label);

      formFields.appendChild(selectBox);

      fieldData.options.forEach(function(dataSelect) {
        let contentSelect = document.createElement("option");

        contentSelect.setAttribute("label", dataSelect.label);
        contentSelect.setAttribute("value", dataSelect.value);

        selectBox.appendChild(contentSelect);

    });



      // let selectText = document.createTextNode(fieldData.type);
      // let selectButton = document.createElement("option");
      //
      // selectButton.appendChild(selectText);
      // selectButton.setAttribute("disabled", "");
      // selectButton.setAttribute("selected");
      //
      // input.appendChild(selectButton);
      //
      // let selectOptions = data.options;
      // selectOptions.forEach(function(optionsItem) {
      //   let optionText = document.createTextNode(optionsItem.label)
      //   let optionButton = document.createElement("option");
      //
      //   optionsButton.appendChild(optionText);
      //
      //   input.appendChild(optionButton);

    } else if(fieldData.type === "textarea") {
        let textAreaButton = document.createElement("textarea");
        textAreaButton.setAttribute("placeholder", "fielData.label");
        formFields.appendChild(textAreaButton);
    } else {
      formFields.appendChild(input);
    }


});

      // input.setAttribute("type", fieldData.type);
      // input.setAttribute("placeholder", fieldData.label);
      // input.setAttribute("id", fieldData.id);












  //
  // let dataType    = document.createElement("type");
  // let dataLabel   = document.createElement("label");
  // let dataId      = document.createElement ("id");
  // let dataIcon    = document.createElement ("icon");
  // let dataOptions = document.createElement ("options");
  // let
  //
  //
  //
  // formBuilder.appendChild(dataType);
  // formBuilder.appendChild(dataLabel);
  // formBuilder.appendChild(dataId);
  // formBuilder.appendChild(dataIcon);
  // formBuilder.appendChild(dataType);


// ( function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------
