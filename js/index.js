/* This app uses a pre-established list of Twitchtv channels and shows their status as well what they're broadcasting. */

$(document).ready(function() {
  
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var arr = channels.map(function(channelName){
  
  //$.each(channels, function(channelName){
   return $.ajax({
      url: 'https://wind-bow.glitch.me/twitch-api/streams/' + channelName,
      type: 'GET',
      datatype: 'json',
      success: function(data) {
        if(data.stream){
          var name = data.stream.channel.display_name;
          var logo = data.stream.channel.logo;
          var game = data.stream.game;
          var status = data.stream.channel.status;
          var url = data.stream.channel.url;
          
          $('#info').append('<div class="container-fluid main-info"><div class="row"><div class="col-xs-4 image">' + '<img class="img-responsive" src="' + logo + '"/></div>' + '<div class="col-xs-4 name"><span class="chname"><a href="' + url + '">' + name + '</a></span>' + ' <span class="online">(online)</span><br>' + '<span class="status"><a href="' + url + '">' + game + ': ' + status + '</a></span></div></div></div>' );
           
        } else {
         return $.ajax({
            url: 'https://wind-bow.glitch.me/twitch-api/channels/' + channelName,
            type: 'GET',
      datatype: 'json',
      success: function(dataChannel) {
        var nameOff = dataChannel.display_name;
        var logoOff = dataChannel.logo;
        var urlOff = dataChannel.url;
        //var statusOff = dataChannel.status;
        
        $('#info').append('<div class="container-fluid off"><div class="row"><div class="col-xs-4 image">' + '<img class="img-responsive" src="' + logoOff + '"/></div>' + '<div class="col-xs-4 name"><span class="chname">' + nameOff + '</span>' + ' <span class="offline">(offline)</span></div></div>' );
      }
          });
        }
      }
    });
  });
                  
});