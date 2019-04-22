function VoicePrompt(url,looptimes)
{ $("#TipsAudioPlay").remove();
if(looptimes=="true"|| looptimes==true)
{
   looptimes="loop='loop'";
}
 var strAudio = "<audio id='TipsAudioPlay' src='"+url+"' hidden='true' "+looptimes+"  >";
        if ( $( "body" ).find( "#TipsAudioPlay" ).length <= 0 )
          $( "body" ).append( strAudio );
        var audio = document.getElementById( "TipsAudioPlay" );
        var start=0;
        audio.addEventListener("ended",function(){
        start++;
       if(start <looptimes)
       {
         audio.play();
       }
       else
       {
       audio.pause();
       }


        },false);
         audio.play();
}
