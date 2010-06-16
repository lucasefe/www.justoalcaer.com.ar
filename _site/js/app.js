var JustoAlCaer = {
  getFlickrPhotosetInto: function(container, photoset_id) {
    $(container + " a").livequery(function(){
      $(this).colorbox();
    });
    $(container).flickr({ 
      api_key: '318939e37f41e279441c153093ce0506', 
      thumbnail_size: 'sq'}).photosetsGetPhotos({
        photoset_id: photoset_id
      }
    );
  },
  getFlickr: function() {
    JustoAlCaer.getFlickrPhotosetInto('#olivos-2010', '72157624287250066');
    JustoAlCaer.getFlickrPhotosetInto('#libario-2009', '72157624133710654');
    JustoAlCaer.getFlickrPhotosetInto('#kronopios-2009', '72157624141187002');
  },
  getTwitter: function() {
    $("#tweets").getTwitter({
      userName: "justoalcaer",
      numTweets: 3,
      slideIn: true,
      showProfileLink: true,
      rejectRepliesOutOf: 20
    });
  },
  putPlayers: function() {
    flowplayer("a.player", "/swf/flowplayer-3.2.1.swf", {
      plugins: {
      	audio: {
    			url: '/swf/flowplayer.audio-3.2.1.swf'
    		},
    		controls: {
    			fullscreen: false,
    			height: 19,
    			autoHide: false
    		},
    		gatracker: {
        			url: "/swf/flowplayer.analytics-3.2.0.swf",
              trackingMode: "Bridge",
        			bridgeObject: "_tracker",
        			debug: true,
        			labels: {
              				start: "Start",	
              				play: "Play",	
              				pause: "Pause",	
              				resume: "Resume",	
              				seek: "Seek",	
              				stop: "Stop",	
              				finish: "Finish",	
              				mute: "Mute",	
              				unmute: "Unmute",	
              				fullscreen: "Full Screen",	
              				fullscreenexit: "Full Screen Exit"	
              			}
        		}
    	},
    	clip: {
    		autoPlay: false,
    		onBeforeBegin: function() {
    		  // Don't know how to do this in an elegant way. 
    		  $('a.player').flowplayer().each(function(){ this.stop(); });
    		}
    	}
    });
  },
  init: function() {
    this.getFlickr();
    this.getTwitter();
    this.putPlayers();
  }
  
};

$(function() { 
  JustoAlCaer.init();
});
