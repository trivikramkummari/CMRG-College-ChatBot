//Home Section
function showHome() {
    hideAllSections();
    document.getElementById("home").style.display = "block";
}

//About Section
function showAbout() {
    hideAllSections();
    document.getElementById("about").style.display = "block";
}

//Contact Section
function showContact() {
    hideAllSections();
    document.getElementById("contact").style.display = "block";
}

function hideAllSections() {
    var sections = document.getElementsByClassName("content");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}

//IBM Watsonx Assistance (Integrated Chat Bot)
window.watsonAssistantChatOptions = {
    integrationID: "d9932ee1-e6e5-42dc-afdc-1a1c2821359c", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "45a64d81-c15d-4c32-a449-54c4c4269def", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

//Feedback From Section
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    alert("Thank you, Your Feedback has been successfully submitted.");
});