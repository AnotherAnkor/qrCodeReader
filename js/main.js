var chunkLength = 120;
var pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');

var readed = 0;
$(document).ready(function(){
   var utterance = new SpeechSynthesisUtterance("Привет! Меня зовут Линя!");
						utterance.lang='ru-RU';
utterance.pitch = 1.5;
utterance.rate = 0.85;
  					  window.speechSynthesis.speak(utterance);
	$('#reader').html5_qrcode(function(data){
			$('#read').html(data);
console.log(data);
if (data != readed) {
	readed = data;	
	$.get(
  "api/api.php?q="+data,
  onAjaxSuccess
)	
}

function onAjaxSuccess(mydata)
{

        var arr = [];

        while (mydata.length > 0) {
            arr.push(mydata.match(pattRegex)[0]);
            mydata = mydata.substring(arr[arr.length - 1].length);
        }
        $.each(arr, function () {
            var u = new SpeechSynthesisUtterance(this.trim());
            	u.lang='ru-RU';
							u.pitch = 0.9;
							u.rate = 1.2;
            window.speechSynthesis.speak(u);
        });




/*

var utterance = new SpeechSynthesisUtterance(mydata);
	utterance.lang='ru-RU';
	utterance.pitch = 0.9;
	utterance.rate = 1.2;
  window.speechSynthesis.speak(utterance); */
}

},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);
});

