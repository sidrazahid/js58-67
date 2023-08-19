   // i.
   const mainContent = document.getElementById("main-content");

   // ii. 
   const children = mainContent.children;
   console.log(children);

   // iii. 
   const renderElements = document.querySelectorAll(".render");
   renderElements.forEach((element) => {
       console.log(element.innerHTML);
   });

   // iv. 
   const firstNameInput = document.getElementById("first-name");
   firstNameInput.value = "John";

   // v.
   const lastNameInput = document.getElementById("last-name");
   lastNameInput.value = "Doe";

   const emailInput = document.getElementById("email");
   emailInput.value = "johndoe@example.com";

   // 
   document.write("<h2>Results:</h2>");

   // i.
   const formContent = document.getElementById("form-content");
   document.write(`<p>Node type of element with id "form-content" is: ${formContent.nodeType}</p>`);

   // ii. 
   const lastNameElement = document.getElementById("lastName");
   document.write(`<p>Node type of element with id "lastName" is: ${lastNameElement.nodeType}</p>`);
   const childNode = lastNameElement.firstChild;
   document.write(`<p>Node type of child node of "lastName" is: ${childNode.nodeType}</p>`);

   // iii. 
   childNode.nodeValue = "Updated Last Name: Smith";

   // iv. 
   const mainContentFirstChild = mainContent.firstElementChild;
   const mainContentLastChild = mainContent.lastElementChild;
   document.write(`<p>First child of "main-content" is: ${mainContentFirstChild.textContent}</p>`);
   document.write(`<p>Last child of "main-content" is: ${mainContentLastChild.textContent}</p>`);

   // v. 
   const lastNameNextSibling = lastNameElement.nextElementSibling;
   const lastNamePreviousSibling = lastNameElement.previousElementSibling;
   document.write(`<p>Next sibling of "lastName" is: ${lastNameNextSibling.textContent}</p>`);
   document.write(`<p>Previous sibling of "lastName" is: ${lastNamePreviousSibling.textContent}</p>`);

   // vi.
   const emailElement = document.getElementById("email");
   const emailParentNode = emailElement.parentNode;
   document.write(`<p>Parent node of "email" is: ${emailParentNode.nodeName}</p>`);
   document.write(`<p>Node type of element with id "email" is: ${emailElement.nodeType}</p>`);