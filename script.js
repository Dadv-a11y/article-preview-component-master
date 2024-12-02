let profile= document.getElementById('profile');
let share = document.getElementById('share-link');
let shareButton = document.getElementById('share')
 console.log(profile);
 console.log(share);
 let visible= 1 ;
 function change() {
  if(visualViewport.width > 1024 ){
    if(visible==1){
        share.style.display='block'
        visible=0;
    }
    else{
        share.style.display='none'
        visible=1;
    }
  }
  else{
    if(visible==1){
        profile.style.display='none'
        share.style.display='block'
        visible=0;
    }
    else{
        profile.style.display='block'
        share.style.display='none'
        visible=1;
    }
  }
 }