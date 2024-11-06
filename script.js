function audioPlay(){
     const audio= new Audio('bubble Pop.mp3');
     audio.play();
}
function audio() {
     const audio = new Audio('Download.mp3');
     audio.play();
 
     setTimeout(() => {
         window.location.href = "https://drive.google.com/file/d/1-m2q8kngJ_65ghY0bth6mdGjGaOXNVdz/view?usp=drivesdk";
     }, 3000);
 }