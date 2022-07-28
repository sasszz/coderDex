let codersDiv = document.getElementById('coders');

//############################################################//
// getUsername
//############################################################//
function getUsername(element) {
    console.log(element.value);
    getData(element.value);
}

//############################################################//
// Fetch Function
//############################################################//
async function getData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const coderData = await response.json();
    console.log(coderData);
    codersDiv.innerHTML = createCard(coderData);
}

//############################################################//
// Create Card Function
//############################################################//
function createCard(coderData) {
    const output = `
    <div class="card row pad container2 margin">
        <div class="left">
            <img src="${coderData.avatar_url}" alt="${coderData.login}">
        </div>
        <div class="right">
            <h2>${coderData.name}</h2>
            <p><strong>login: </strong>${coderData.login}</p>
            <p><strong>location: </strong>${coderData.location}</p>
            <p><strong>repos: </strong>${coderData.public_repos}</p>
        </div>
    </div>
    `;
    return output;
}