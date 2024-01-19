function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;

    if (skillsMemberValue == 0) {
        skills.style.display = "none";
    } else if (skillsMemberText == "Yes") {
        skills.style.display = "block";
    } else if (skillsMemberText == "No") {
        skills.style.display = "none";
    }
}