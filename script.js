var _a;
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var workExperience = document.getElementById('work-experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Image Preview Handling
    var profilePictureInput = document.getElementById('profile-picture');
    var profileImageURL = '';
    if ((profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) && profilePictureInput.files[0]) {
        var file = profilePictureInput.files[0];
        profileImageURL = URL.createObjectURL(file); // Create a local URL for the image
    }
    // Resume Output HTML
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(address, "</span></p>\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(workExperience, "</p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <h3>Profile Picture</h3>\n        <img src=\"").concat(profileImageURL, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; object-fit: cover; border-radius: 50%;\" />\n    ");
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
});
