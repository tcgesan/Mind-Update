function audioPlay(){
     const audio= new Audio('bubble Pop.mp3');
     audio.play();
}
function audio() {
     const audio = new Audio('Download.mp3');
     audio.play();
 
     setTimeout(() => {
         window.location.href = "https://drive.google.com/file/d/1-zS3P8mrfyulfpTvjUfyC6oMWjaFTKKK/view?usp=drivesdk";
     }, 3000);
 }