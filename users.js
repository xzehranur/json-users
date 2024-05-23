async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users[0].name);
    console.log(users[0].username);
    console.log(users[0].address);
    console.log(users[0].company.name);
    console.log(users[0].email);
    console.log(users[0].phone);
    console.log(users[0].website);
    displayUsers(users);
  } catch (error) {
    console.log("Hata: ", error);
  }
}

function displayUsers(users) {
  const container = document.getElementById("user-cards");
  users.forEach((user) => {
    const userCardHTML = ` 
    <div class="col-md-6 mb-4 d-flex align-items-stretch">
                <div class="card w-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title user-name">${user.name}</h5>
                        <div class="user-details"></div>
                        <p class="card-text"><i class="fa-solid fa-user"></i> ${user.username}</p>
                        <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
                        <p class="card-text"><i class="fa-solid fa-building"></i> ${user.company.name}</p>
                        <p class="card-text"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
                        <p class="card-text"><i class="fa-solid fa-phone"></i> ${user.phone}</p>
                        <p class="card-text"><i class="fa-solid fa-globe"></i> ${user.website}</p>
                    </div>
                </div>
            </div>
    `;
    container.innerHTML += userCardHTML;
  });
}

fetchUsers();
