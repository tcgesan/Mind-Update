function audioPlay(){
     const audio= new Audio('bubble Pop.mp3');
     audio.play();
}
function audio() {
     const audio = new Audio('Download.mp3');
     audio.play();
 
     setTimeout(() => {
         window.location.href = "https://drive.google.com/file/d/15ddwuYNdVmySdmEkJxklwDoY4Xvm4kAz/view?usp=drivesdk";
     }, 3000);
 }