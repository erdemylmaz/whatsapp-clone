// let state = {
//   loading: true,
//   name: "",
//   job: "",
// };

// updateState = (key, value) => {
//   state[key] = value;
// };

// updateState("name", "erdem");

let users = [
  {
    name: "Erdem",
    age: 16,
  },
  {
    name: "Ergin",
    age: 18,
  },
  {
    name: "Hakan",
    age: 47,
  },
  {
    name: "Zeynep",
    age: 45,
  },
  {
    name: "Semih",
    age: 15,
  },
  {
    name: "Ahmet",
    age: 15,
  },
  {
    name: "Engin",
    age: 45,
  },
];

let uniqueAges = [...new Set(users.map((item) => item.age))];

// sort by low to high
uniqueAges.sort((current, next) => current - next);

let ages = {};

updateAges = (age, user) => {
  if (!ages[age]) {
    ages[age] = [];
  }

  ages[age].push(user);
};

users.map((item) => {
  for (let x = 0; x < uniqueAges.length; x++) {
    if (item.age == uniqueAges[x]) {
      updateAges(item.age, item);
    }
  }
});

// set theme
const body = document.body;
let theme = "dark";

function setTheme(mode) {
  if (mode == "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

let isModeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    isModeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isModeDark) {
      theme = "dark";
    } else {
      theme = "light";
    }

    setTheme(theme);
  });

if (isModeDark) {
  theme = "dark";
}

setTheme(theme);

let cartItems = [
  {
    name: "Telephone",
    price: 1234,
  },
  {
    name: "Tablet",
    price: 400,
  },
  {
    name: "Television",
    price: 999,
  },
  {
    name: "Macbook",
    price: 900,
  },
  {
    name: "Watch",
    price: 350,
  },
];

let totalPrice = cartItems.reduce((total, item) => {
  return total + item.price;
}, 0);

let futureDate = new Date("June 27 2021 09:00");
let futureTime = futureDate.getTime();

let oneSecond = 1000;
let oneMinute = 60 * oneSecond;
let oneHour = 60 * oneMinute;
let oneDay = 24 * oneHour;

setInterval(() => {
  let d = new Date();
  let currentTime = d.getTime();

  let remainingTime = futureTime - currentTime;

  let remainingDay = Math.floor(remainingTime / oneDay) + " Day(s)";
  let remainingHour =
    Math.floor((remainingTime % oneDay) / oneHour) + " Hour(s)";
  let remainingMinute =
    Math.floor((remainingTime % oneHour) / oneMinute) + " Minute(s)";
  let remainingSecond =
    Math.floor((remainingTime % oneMinute) / oneSecond) + " Second(s)";

  let remainingDate = [
    remainingDay,
    remainingHour,
    remainingMinute,
    remainingSecond,
  ].join(" ");
}, 1000);

// Switch, Case condition

let day = "Wednessday";

switch (day.length) {
  case 2: {
    break;
  }
  case 3: {
    break;
  }

  case 10: {
    // console.log("Your value s length is:", "ten");
    break;
  }

  default: {
    // console.log("undefined");
  }
}

ages[16].forEach((person, index) => {});

function canVote(ages) {
  return ages.filter((age) => {
    return age >= 18;
  });
}

let usersAges = users.map((user) => {
  return user.age;
});

let voteCount = canVote(usersAges);

function showDOM() {
  let myName = "Erdem";

  return `
      <div class="js-dom">This comes from JavaScript by <strong style="font-family: cursive; margin-left: 4px;">${myName}</strong></div> 
    `;
}

// document.body.innerHTML = showDOM();

let words = [
  "I",
  "You",
  "We",
  "D",
  "Erdem",
  "jump",
  "go",
  "school",
  "love",
  "or",
  "kill",
  "find",
  "key",
  "laptop",
  "call",
  "Mom",
  "your",
  "will",
  "me",
  "from",
  "knife",
  "ball",
  "park",
  "hair",
  "to",
  "teacher",
  "friend",
  "kick",
  "software",
  "because",
  "she",
  "is",
  "are",
  "they",
];

function createText() {
  let text = "";

  let randomLength = Math.floor(Math.random() * words.length);

  while (randomLength == 0) {
    randomLength = Math.floor(Math.random() * words.length);

    if (randomLength > 0) {
      break;
    }
  }

  for (let x = 0; x < randomLength; x++) {
    let randomNumber = Math.floor(Math.random() * words.length);
    text += `${words[randomNumber]} `;
  }

  return text;
}

function capitalize(word) {
  if (word !== "") {
    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  return word;
}

function capitalizeText(text) {
  let words = text.split(" ");

  let newText = "";

  words.map((word) => {
    let capitalizedWord = capitalize(word);

    newText += `${capitalizedWord} `;
  });

  return newText;
}

let randomText = capitalizeText(createText());

// add points to numbers
let number = 1130532123321312;

function reverseString(string) {
  let array = string.split("").reverse();

  let reversedString = "";

  array.map((item) => {
    reversedString += item;
  });

  return reversedString;
}

function fixNumber(number) {
  number = number.toString();
  let numbers = number.split("").reverse();

  let newNumberString = "";

  for (let x = 0; x < numbers.length; x++) {
    if (x % 3 == 0 && x != 0) {
      newNumberString += ",";
    }

    newNumberString += numbers[x];
  }

  newNumberString = reverseString(newNumberString);

  return newNumberString;
}

number = fixNumber(number);

// MESSAGES
const messagesDOM = document.querySelector(".messages");
const messageInput = document.querySelector(".message-input");
const sendBtn = document.querySelector(".send-btn");

const receiverBtn = document.querySelector(".receiver-mode");
const senderBtn = document.querySelector(".sender-mode");

const chatsDOM = document.querySelector(".chats-container");
const container = document.querySelector(".container");

const createChatModal = document.querySelector(".create-modal");
const createNewChatBtn = document.querySelector(".create-new-chat-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const newChatInput = document.querySelector(".create-input");
const createChatBtn = document.querySelector(".create-btn");

createChatModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("create-modal")) {
    createChatModal.style.display = "none";
  }
});

closeModalBtn.addEventListener("click", () => {
  createChatModal.style.display = "none";
});

createNewChatBtn.addEventListener("click", () => {
  createChatModal.style.display = "flex";
});

let currentChat = 1;

if (localStorage.getItem("lastChat")) {
  currentChat = localStorage.getItem("lastChat");
}

let usersName = "Erdem Yilmaz";
let receiversName = "Erdem 2";

let chats = [];

if (localStorage.getItem("chatLogs")) {
  chats = JSON.parse(localStorage.getItem("chatLogs"));
}

const chatReceiverName = document.querySelector(".chat-receiver-name");

for (let x = 0; x < chats.length; x++) {
  if (x == currentChat) {
    chatReceiverName.textContent = chats[x].receiver;
  }
}

for (let x = 0; x < chats.length; x++) {
  let div = document.createElement("div");
  div.className = "chat";

  if (x == currentChat) {
    div.classList.add("current-chat");
  }

  div.innerHTML = `
  
  <div class="chat-left" data-value=${x}>
  <div class="chat-header" data-value=${x}>${chats[x].receiver}</div>
  <div class="chat-container" data-value=${x}>
    <div class="last-message" data-value=${x}>${
    chats[x].messages.length > 0
      ? chats[x].messages[chats[x].messages.length - 1].content
      : ""
  }</div>
  </div>
</div>

<div class="chat-right" data-value=${x}>
  <div class="message-count" data-value=${x}>${chats[x].messageCount}</div>
</div> 
  `;

  chatsDOM.appendChild(div);
}

let allChatsDOM = document.querySelectorAll(".chat");

changeChat = (e) => {
  let chatsPosition;
  if (e == currentChat) {
    chatsPosition = currentChat;
  } else {
    chatsPosition = e.target.dataset.value;
  }

  let chat = chats[chatsPosition];

  currentChat = chatsPosition;

  allChatsDOM.forEach((cht) => {
    if (cht.querySelector(".chat-header").textContent == chat.receiver) {
      cht.classList.add("current-chat");
      receiversName = cht.querySelector(".chat-header").textContent;
    } else {
      cht.classList.remove("current-chat");
    }
  });

  for (let x = 0; x < chats.length; x++) {
    if (x == currentChat) {
      let conversationsMessages = chats[x].messages;
      chatReceiverName.textContent = chats[x].receiver;

      let receiversNameDOM = document.querySelector(".receiver-mode");
      let sendersNameDOM = document.querySelector(".sender-mode");

      receiversNameDOM.textContent = chats[x].receiver;

      messagesDOM.innerHTML = "";

      conversationsMessages.map((msg) => {
        let div = document.createElement("div");
        div.className = "message";
        div.classList.add("receiver");

        if (msg.from == 1) {
          div.classList.remove("receiver");
          div.classList.add("message-right");
          div.classList.add("sender");
        }

        div.innerHTML = `
          <div class="message-content">
            <div class="message-top">${
              msg.from == 1 ? usersName : receiversName
            }</div>
            <div class="message-text">${msg.content}
                <div class="message-time">${msg.time}</div>
            </div>
          </div> 
        `;

        messagesDOM.appendChild(div);
      });
    }
  }

  messagesDOM.scrollTop = messagesDOM.scrollHeight;

  localStorage.setItem("lastChat", currentChat);
};

changeChat(currentChat);

function createNewChat() {
  let newUsersName = newChatInput.value;

  chats.push({
    receiver: newUsersName,
    messageCount: 0,
    lastMessage: "",
    messages: [],
  });

  allChatsDOM.forEach((chat) => {
    chat.classList.remove("current-chat");
  });

  let div = document.createElement("div");
  div.className = "chat";
  div.classList.add("current-chat");

  div.innerHTML = `

  <div class="chat-left" data-value=${chats.length - 1}>
  <div class="chat-header" data-value=${chats.length - 1}>${newUsersName}</div>
  <div class="chat-container" data-value=${chats.length - 1}>
    <div class="last-message" data-value=${chats.length - 1}>
  </div>
  </div>
</div>

<div class="chat-right" data-value=${chats.length - 1}>
  <div class="message-count" data-value=${chats.length - 1}>0</div>
</div>  
  `;

  chatsDOM.appendChild(div);

  allChatsDOM = document.querySelectorAll(".chat");

  allChatsDOM.forEach((chatDOM) => {
    chatDOM.addEventListener("click", changeChat);
  });

  currentChat = chats.length - 1;
  changeChat(currentChat);

  createChatModal.style.display = "none";
  localStorage.setItem("chatLogs", JSON.stringify(chats));
}

createChatBtn.addEventListener("click", createNewChat);

allChatsDOM.forEach((chatDOM) => {
  chatDOM.addEventListener("click", changeChat);
});

let user = 1;

receiverBtn.addEventListener("click", () => {
  senderBtn.classList.remove("mode-active");
  receiverBtn.classList.add("mode-active");

  user = 0;

  let allMessages = document.querySelectorAll(".message");

  allMessages.forEach((msg) => {
    if (msg.classList.contains("sender")) {
      msg.classList.remove("message-right");
    } else {
      msg.classList.add("message-right");
    }
  });
});

senderBtn.addEventListener("click", () => {
  receiverBtn.classList.remove("mode-active");
  senderBtn.classList.add("mode-active");

  user = 1;

  let allMessages = document.querySelectorAll(".message");

  allMessages.forEach((msg) => {
    if (msg.classList.contains("receiver")) {
      msg.classList.remove("message-right");
    } else {
      msg.classList.add("message-right");
    }
  });
});

addExtraZero = (time) => {
  return time < 10 ? "0" + time : time;
};

sendMessage = () => {
  let d = new Date();

  let h = addExtraZero(d.getHours());
  let m = addExtraZero(d.getMinutes());

  let message = messageInput.value;

  let div = document.createElement("div");
  div.className = "message";
  div.classList.add("receiver");

  if (user == 1) {
    div.classList.remove("receiver");
    div.classList.add("message-right");
    div.classList.add("sender");

    let allMessages = document.querySelectorAll(".message");

    allMessages.forEach((msg) => {
      if (msg.classList.contains("receiver")) {
        msg.classList.remove("message-right");
      } else {
        msg.classList.add("message-right");
      }
    });

    div.innerHTML = `

    <div class="message-content">
      <div class="message-top">${usersName}</div>
      <div class="message-text">${message}

        <div class="message-time">${h}:${m}</div>
      </div>
    </div>

  `;
  } else {
    let allMessages = document.querySelectorAll(".message");
    div.classList.add("message-right");

    allMessages.forEach((msg) => {
      if (msg.classList.contains("sender")) {
        msg.classList.remove("message-right");
      } else {
        msg.classList.add("message-right");
      }
    });

    div.innerHTML = `

    <div class="message-content">
      <div class="message-top"><a href="">${receiversName}</a></div>
      <div class="message-text">${message}

        <div class="message-time">${h}:${m}</div>
      </div>
    </div>


  `;
  }

  if (message != "") {
    messagesDOM.appendChild(div);

    chats[currentChat].messageCount++;

    chats[currentChat].messages.push({
      content: message,
      time: [h, m].join(":"),
      from: user,
    });

    allChatsDOM.forEach((cht) => {
      if (
        cht.querySelector(".chat-header").textContent ==
        chats[currentChat].receiver
      ) {
        let messageCountDOM = cht.querySelector(".message-count");
        messageCountDOM.textContent = chats[currentChat].messageCount;
      } else {
        cht.classList.remove("current-chat");
      }
    });

    for (let x = 0; x < allChatsDOM.length; x++) {
      if (currentChat == x) {
        allChatsDOM[x].querySelector(".last-message").textContent = message;
      }
    }
  }

  messageInput.value = "";

  messagesDOM.scrollTop = messagesDOM.scrollHeight;

  localStorage.setItem("chatLogs", JSON.stringify(chats));
};

sendBtn.onclick = sendMessage;

messageInput.addEventListener("keydown", (key) => {
  if (key.keyCode == 13) {
    sendMessage();
  }
});

const deleteChatBtn = document.querySelector(".delete-chat-btn");

function deleteChat() {
  chats.splice(currentChat, 1);

  for (let x = 0; x < allChatsDOM.length; x++) {
    if (x == currentChat) {
      chatsDOM.removeChild(allChatsDOM[x]);
    }
  }

  currentChat = Math.floor(Math.random() * chats.length);

  changeChat(currentChat);

  localStorage.setItem("chatLogs", JSON.stringify(chats));
}

deleteChatBtn.addEventListener("click", deleteChat);

const chatsDiv = document.querySelector(".chats");

const showHideBtn = document.querySelector(".show-hide-btn");

function switchChats() {
  if (!chatsDiv.classList.contains("hiding")) {
    chatsDiv.classList.add("hiding");
    chatsDiv.style.width = "0px";

    container.style.width = "100%";

    showHideBtn.classList.add("to-right");

    showHideBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
  } else {
    chatsDiv.classList.remove("hiding");
    chatsDiv.style.width = `30%`;

    showHideBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';

    showHideBtn.classList.remove("to-right");

    container.style.width = "70%";
  }
}

showHideBtn.addEventListener("click", switchChats);

// Deneme Tahtasi
const users1 = [
  {
    name: "Erdem",
    age: 15,
    hobbies: ["Coding", "Walking"],
    education: {
      middleSchool: "BISAS",
      highSchool: "TTAL",
    },
  },

  {
    name: "Ergin",
    age: 18,
    hobbies: ["Coding", "Walking"],
    education: {
      middleSchool: "BISAS",
      highSchool: "CAL",
    },
  },
];

const [first, ...restOfUsers] = users;

const {
  education: { highSchool: education },
  ...restInfo
} = users1[1];

console.log(education, restInfo);

const people = {};

users1.map((user) => {
  let username = user.name.toLowerCase();
  people[`${username}`] = user;
});

let infos = {};

function getUsersInfos({ name, age, education: { highSchool: education } }) {
  let info = `Name: ${name}, Age: ${age}, Education: ${education}`;

  infos[`${name.toLowerCase()}sInfo`] = info;
}

users1.map((user) => {
  getUsersInfos(user);
});
