var currLen = 1;

$(document).ready(function() {
});

function startTypingEffect() {
	var text = "Terimakasih Telah Mendaftar Dilayanan Bank BNI, Pendaftaran Anda Sedang Diproses, Sesaat Lagi Anda Akan Dihubungi Oleh Pihak Bank BNI, Untuk Proses Cetak Kode Kupon Undian Anda";
	setTimeout(() => {
		if (currLen < text.length) {
			currLen++;
			$("#text1").html(text.substring(0, currLen));
			startTypingEffect();
		}
	}, 50);
}

function closeAlert() {
	$("#alert").css('display', 'none');
	startTypingEffect();
}

module.closeAlert = closeAlert;