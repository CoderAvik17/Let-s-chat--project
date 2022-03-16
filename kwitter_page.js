var firebaseConfig = {
    apiKey: "AIzaSyAhpnrHk0ZSAJ-VhrGLZ4c071gkT8Jr-d4",
    authDomain: "let-s-chat-a300c.firebaseapp.com",
    databaseURL: "https://let-s-chat-a300c-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-a300c",
    storageBucket: "let-s-chat-a300c.appspot.com",
    messagingSenderId: "631320979983",
    appId: "1:631320979983:web:9782a4a634d16da45c117a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}
