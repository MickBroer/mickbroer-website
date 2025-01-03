const elements = {
    wrijfMuziek: {elem: document.getElementById("wrijfMuziek"), isSelected: false},
    kapwerkzaamheden: {elem: document.getElementById("kapwerkzaamheden"), isSelected: false},
    zenderKamers: {elem: document.getElementById("zenderKamers"), isSelected: false},
    zender: {elem: document.getElementById("zender"), isSelected: false},
    juni2022: {elem: document.getElementById("juni2022"), isSelected: false},
    bladeren: {elem: document.getElementById("bladeren"), isSelected: false}
  };
  const iframe = document.getElementById("showcase");
  
  // Function to update the style of elements
  function updateElementStyle(key, isSelected) {
    const element = elements[key].elem;
    if (isSelected) {
      element.style.color = "black";
      element.innerHTML = element.innerHTML.replace("[___]", "[ █ ]");
      elements[key].isSelected = true;
    } else {
      element.style.color = "rgb(132, 116, 116)";
      element.innerHTML = element.innerHTML.replace("[ █ ]", "[___]");
      elements[key].isSelected = false;
    }
  }
  
  // Function to reset all elements except the selected one
  function resetElements(exceptKey) {
    Object.keys(elements).forEach(key => {
      if (key !== exceptKey && elements[key].isSelected) {
        updateElementStyle(key, false);
      }
    });
  }
  
  // Adding event listeners
  Object.keys(elements).forEach(key => {
    const element = elements[key].elem;
  
    // Mouseover event
    element.addEventListener("mouseover", () => {
      if (!elements[key].isSelected) {
        element.style.color = "black";
      }
    });
  
    // Mouseout event
    element.addEventListener("mouseout", () => {
      if (!elements[key].isSelected) {
        element.style.color = "rgb(132, 116, 116)";
      }
    });
  
    // Click event
    element.addEventListener("click", () => {
      const isSelected = !elements[key].isSelected;
      resetElements(key); // Reset all elements except the current one
      updateElementStyle(key, isSelected); // Update the current element based on its new state
      iframe.src = isSelected ? `/${key}` : ""; // Update the iframe src only if the element is selected
    });
  });
  