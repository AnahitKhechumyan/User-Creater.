function getFormValues(){
    const name = document.getElementById("user-name").value;
    const age = document.getElementById("user-age").value;
    const profession = document.getElementById("user-profession").value;
    const gender = document.getElementById("user-gender").value;
    const role = document.getElementById("user-role").value;

    return{
        name,
        age,
        profession,
        gender,
        role
    }
};

function getRandomAvatar(gender){
    const male = ["https://www.w3schools.com/w3images/avatar2.png","https://www.w3schools.com/w3images/avatar2.png"];
    const female = ["https://www.w3schools.com/howto/img_avatar2.png","https://www.w3schools.com/howto/img_avatar2.png","https://www.w3schools.com/howto/img_avatar2.png"];
    
    const avatars = gender === "male" ? male : female;
    const randomIndex = Math.floor(Math.random() * avatars.length);

    return avatars[randomIndex];
};

function getUserBasedOnRole(name, age, profession, gender, role, avatar){
    switch(role){
        case "Admin":
            return  new Admin(name, age, profession, gender, role, avatar);
        case "Editor":
            return  new Editor(name, age, profession, gender, role, avatar);
        case "Viewer":
            return  new Viewer(name, age, profession, gender, role, avatar);
        default:
        break;
    }
};

function createUserCard(user){
    const userCard = document.createElement("div");
    userCard.className = "content";
    try{
    userCard.innerHTML= `
        <div class="content">
           <img class="img_avatar" src="${user.avatar}" alt="${user.name} ">
           <div class="user-name">${user.name}</div>
           <div class="user-profession">${user.profession}</div>
            <div class="description" style="display: none;">
               <div class="popup">${user.sayHello()}</div>
            </div>
            <div class="extra content">
                 <div class="two">
                      <button class="green"> Say Profession</button>
                      <button class="red"> Delete</button>
                 </div>
            </div>
        </div>`;
   
        const imgAvatar = userCard.querySelector(".img_avatar");

        imgAvatar.addEventListener("click", (event) => {
            event.preventDefault();
            const description = userCard.querySelector(".description");
            description.style.display = "block";
            userCard.querySelector(".content").appendChild(description);

            if(this.role === "Admin"){
                return  `${Admin.sayHello()}`;
            }
            else if(this.role === "Editor"){
                return  `${Editor.sayHello()}`;
            }
            else if(this.role === "Viewer"){
                return `${Viewer.sayHello()}`;
            }
                return  `${user.sayHello()}`;  
        });

        userCard.querySelector(".description").onclick = ()=>{
            userCard.querySelector(".description").style.display = "none";
        };

        
    return   userCard;

    }catch(error){
        alert("Please, fill the fields!");
    };
}; 

function handleCreateNewUser(event){
    event.preventDefault();
    const {
        name,
        age,
        profession,
        gender,
        role
    } = getFormValues();

    const avatar = getRandomAvatar(gender);
     
    
    const user = getUserBasedOnRole(name, age, profession, gender, role, avatar);
    
    
    const userCard = createUserCard(user);

    userCard.querySelector(".green").addEventListener("click",()=>{
        alert(user.sayProfession());
    });
    userCard.querySelector(".red").addEventListener("click", ()=>{
        userCard.remove();
    });

    document.getElementById("users-container").appendChild(userCard);
    
    document.querySelector(".form").reset();

};

document.querySelector(".form").addEventListener('submit', handleCreateNewUser);

 