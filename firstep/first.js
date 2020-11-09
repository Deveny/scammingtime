
        gsap.registerPlugin(ScrollTrigger);
function hitIt(){
    $('#grass').delay(1000).get(0).play();
    $('#pp').fadeOut('500');
    document.getElementById('grass').addEventListener('ended',myHandler,false);
    function myHandler(e) {
$('#sheets').fadeIn(1000);
        gsap.to('#sheets',{duration:2,scale:1,y:20, yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut"});
    }
    
}
       
        function toPoint(){
                        $('body').css('background-color','white');
            $('#episode').css('overflowY','scroll');
            $('#p-txt,#video').fadeIn(800);
            $('#pinkass').fadeOut(500);
            $('#p-one').delay(500).fadeOut(1000, function(){
            });  
             gsap.to('video',{
                scrollTrigger:{
                    trigger:'video',
                    start: 'top center',
                    end: 'bottom 60%',
                    scrub:true,
                    toggleActions: 'restart pause resume reverse',
                onLeave:hitIt},
                duration:3,
                 transform: 'translateY(50vh)'});
        }
        $(document).ready(function(){
                            var audio = $('audio');

        var myAudio = document.getElementById("sound");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};
            $('#again').click(function(){
                $('#pp').fadeToggle(500);
                togglePlay();
        
            });
            $('#p-txt').click(function(){
                    $('#pp').fadeOut();
                                togglePlay();

                });
            
            
            $('#pp').click(function(){
                     if(audio.paused){
                    audio.get(0).play(); 
                         mover.play();
            } else {
                    audio.get(0).pause(); 
                mover.pause();
            }
                });
            
            var shake = gsap.to('#pinkass',{duration:2,scale:1,y:20, yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut"});
            
            $('#pinkass').hover(function(){
                shake.pause();
                $(this).addClass('lighted');
            },function(){
                shake.resume();
                $(this).removeClass('lighted');
            })
            
            var mover = gsap.to('#pp',{paused: true, duration:2,scale:1,y:10, yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut"});
            
            $('#pp').hover(function(){
                mover.play();
            },function(){
                mover.pause();
            })
            
            
            
            gsap.from('#a1',{
                scrollTrigger:{
                    trigger:'#a1',
                    start: 'top bottom',
                    end: 'bottom center',
                    scrub: 1,
                    toggleActions: 'restart pause resume reverse'},
                duration:3,
                scale:0.5,
                opacity:0.5,
                ease: "power1.inOut"});
            
            gsap.from('#a2',{
                scrollTrigger:{
                    trigger:'#a2',
                    start: 'top bottom',
                    end: 'bottom center',
                    scrub: 1,
                    toggleActions: 'restart pause resume reverse'},
                duration:3,
                scale:0.5,
                opacity:0.5,
                ease: "power1.inOut"});
            
            gsap.from('#a3',{
                scrollTrigger:{
                    trigger:'#a3',
                    start: 'top bottom',
                    end: 'bottom center',
                    scrub: 1,
                    toggleActions: 'restart pause resume reverse'},
                duration:3,
                scale:0.5,
                opacity:0.5,
                ease: "power1.inOut"});
            
           
            
             
        });