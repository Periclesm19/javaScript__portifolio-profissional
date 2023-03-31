async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Periclesm19/portifolio-proficional/master/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}
