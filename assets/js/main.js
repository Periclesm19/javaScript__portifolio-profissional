function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updateAcademicEducation(profileData) {
  const academicEducation = document.getElementById(
    "profile.education.academicEducation"
  );
  academicEducation.innerHTML = profileData.education.academicEducation.map(
    (courses) => {
      return `
      <li>
        <h3 class="title">${courses.name} - ${courses.institution}</h3>
        <p class="period">${courses.period}</p>
      </li>`;
    }
  );
}

function updateCertificates(profileData) {
  const certificates = document.getElementById(
    "profile.education.certificates"
  );
  certificates.innerHTML = profileData.education.certificates
    .map((certificate) => {
      return `
        <li>
          <h3>
            <a href="${certificate.link}" target="_blank">${certificate.name} - ${certificate.institution}</a>
          </h3>
        </li>`;
    })
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
        <li>
          <h3 ${project.github ? 'class="github"' : ""}><a href="${
        project.url
      }" target="_blank">${project.name}</a></h3>
        </li>`;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );
  professionalExperience.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `
        <li>
          <h3 class="title">${experience.name}</h3>
          <p class="period">${experience.period}</p>
          <p>${experience.description}</p>
        </li>`;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateAcademicEducation(profileData);
  updateCertificates(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
})();
