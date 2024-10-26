function audioPlay(){
     const audio= new Audio('bubble Pop.mp3');
     audio.play();
}
function audio() {
     const audio = new Audio('Download.mp3');
     audio.play();
 
     setTimeout(() => {
         window.location.href = "https://www.example.com";
     }, 3000);
 }