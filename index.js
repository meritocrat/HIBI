$('#send-email').click(function(e) {
	e.preventDefault();
	//array of objects
	var dataArray = $('#email-form').serializeArray();
	var dataObj = transformArray(dataArray);
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		data: {
			'key': 'cTRg1zh9RKR4gnPVIufvpw',
			'message': {
			  'from_email': dataObj['email'],
			  'to': [
			      {
			        'email': 'kim.named.jon@gmail.com',
			        'name': 'Jonathan Kim',
			        'type': 'to'
			      }
			  ],
			  'autotext': 'true',
			  'subject': dataObj['user_name'] + ' has sent you a message!',
			  'html': dataObj['message']
			}
		}
	}).done(function(response) {
		console.log('sent!', response); // if you're into that sorta thing
	});
})

function transformArray(array) {
	var obj = {};
	for (var i = 0; i < array.length; i++) {
		obj[array[i]['name']] = array[i]['value'];
	};
	return obj;
}