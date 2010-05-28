var JustoAlCaer = {
  getFlickrPhotosetInto: function(container, photoset_id) {
    $(container + " a").livequery('click', function(){
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
    JustoAlCaer.getFlickrPhotosetInto('#libario-2009', '72157624133710654');
    JustoAlCaer.getFlickrPhotosetInto('#kronopios-2009', '72157624141187002');
    
  },
  getTwitter: function() {
    $("#tweets").getTwitter({
      userName: "justoalcaer",
      numTweets: 3,
      slideIn: true,
      showHeading: true,
      showProfileLink: false,
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
