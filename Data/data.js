 const rooms = [
  { roomPicture: "Images/9.jpg", roomName: "Deluxe Room" },
  { roomPicture: "Images/5.jpg", roomName: "Standard Room" },
  { roomPicture: "Images/66.jpg", roomName: "Executive Room" },
  { roomPicture: "Images/9.jpg", roomName: "Honeymoon Suit" },
  { roomPicture: "Images/24.jpg", roomName: "Presidential Suit" },
  { roomPicture: "Images/13.jpg", roomName: "Queen Room" },
  { roomPicture: "Images/14.jpg", roomName: "King Room" },
  { roomPicture: "Images/60.jpg", roomName: "Double Room" },
  { roomPicture: "Images/46.jpg", roomName: "Single Room" },
  { roomPicture: "Images/12.jpg", roomName: "Children Room" },
  { roomPicture: "Images/63.jpg", roomName: "Triple Room" },
  { roomPicture: "Images/19.jpg", roomName: "Sit Out" },
  { roomPicture: "Images/21.jpg", roomName: "Reading Room" },
  { roomPicture: "Images/42.jpg", roomName: "Cabana" },
  { roomPicture: "Images/34.jpg", roomName: "Dining Room" },
  { roomPicture: "Images/37.jpg", roomName: "Conference Room" },
  { roomPicture: "Images/40.jpg", roomName: "Computer Room" },
];

s();
function s() {
  for (const room of rooms) {
    const appendRooms = document.querySelector(".eachRoom");
    appendRooms.innerHTML += `
   <li class="splide__slide text-center text-2xl">
          <div class="splide__slide__container">
            <img src="${room.roomPicture}">
             ${room.roomName}
          </div>
        
    </li>
  
  
  `;
  }
}
