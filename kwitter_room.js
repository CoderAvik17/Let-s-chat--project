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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
       
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           //Start code
           console.log("Room Name - " + Room_names);
           row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><br>";
           document.getElementById("output").innerHTML = row;
           //End code
           });});}
    getData();
    
    function addRoom()
    {
           room_name = document.getElementById("room_name").value;
    
           firebase.database().ref("/").child(room_name).update({
                   purpose : "adding room name"});
           localStorage.setItem("room_name", room_name);
    
           window.location = "kwitter_page.html";
    }
    
    function redirectToRoomName()
    {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location= "kwitter_page.html";
    }
    
    function logout()
    {
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
    
           window.location = "index.html";
    }