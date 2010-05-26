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
  

  addEditLinks: function() {
    if ($.cookie('editable') && $('#edit').length) {
      $('#edit a').text('Edit').before('[').after(']');
    }
  },

  relativizeAge: function() {
    $('#birthday').each(function() {
        var text  = $(this).text();
        var born  = new Date(text);
        var today = new Date();
        var ydiff = today.getFullYear() - born.getFullYear();
        var bday = new Date(text);
        bday.setFullYear(today.getFullYear());
        if (bday > today) ydiff -= 1;

        $(this).append(' ('+ydiff+' years old)');
    });
  },
  

  explainGlyphs: function() {
    var glyphs = {
      "␣": "Space",
      "↩": "Return",
      "⌅": "Enter",
      "⇥": "Tab",
      "⇤": "Backtab",
      "⌫": "Backspace",
      "⌦": "Forward Delete",
      "⌘": "Command",
      "⌥": "Option",
      "^": "Control",
      "⌃": "Control",
      "⇧": "Shift",
      "⇪": "Caps Lock",
      "←": "Left Arrow",
      "→": "Right Arrow",
      "↑": "Up Arrow",
      "↓": "Down Arrow",
      "↖": "Home",
      "↘": "End",
      "⇞": "Page Up",
      "⇟": "Page Down",
      "⎋": "Escape",
      "⏏": "Eject"
    };

    function glyphsToNames(text) {
      return text.split('').map(function(x) { return (glyphs[x] || x) }).join(" ");
    }
    $('.kb').each(function() {
      var text = $(this).text();
      this.title = "Key"+(text.length>1 ? "s" : "")+": " + glyphsToNames(text);
    });
  },
  

  init: function() {
    this.getFlickr();
    this.getTwitter();
  }
  
};

$(function() { 
  JustoAlCaer.init();
});
