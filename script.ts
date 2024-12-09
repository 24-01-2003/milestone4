document.getElementById('generateResume')?.addEventListener('click', () => {
    // Inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
    // Image Preview Handling
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    let profileImageURL = '';
    
    if (profilePictureInput?.files && profilePictureInput.files[0]) {
        const file = profilePictureInput.files[0];
        profileImageURL = URL.createObjectURL(file); // Create a local URL for the image
    }
    
    // Resume Output HTML
    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>
        <h3>Work Experience</h3>
        <p contenteditable="true">${workExperience}</p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        <h3>Profile Picture</h3>
        <img src="${profileImageURL}" alt="Profile Picture" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%;" />
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
});
