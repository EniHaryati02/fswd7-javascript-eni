// INTRO
alert('SELAMAT DATANG DI GAME SUIT !!');
var tanya = confirm('Apakah Kamu ingin bermain ?');
var repeat = true;
if(tanya == true) { 
    while(repeat) {
// menangkap pilihan player
var player = prompt('Silahkan pilih gajah, semut atau orang');

// menangkap pilihan computer
// munculkan random number
var com = Math.random();

if(com < 0.33) {
    com = 'gajah';
} else if(com >= 0.33 && com < 0.67) {
    com = 'semut';
} else {
    com = 'orang';
}

// tentukan rules
var hasil = '';
if(player == com) {
 hasil = 'SERI';
} else if (player == 'gajah') {
    hasil = (com == 'semut') ? 'KALAH' : 'MENANG';
} else if (player == 'semut') {
    hasil = (com == 'orang') ? 'KALAH' : 'MENANG';
} else if (player == 'orang') {
    hasil = (com == 'gajah') ? 'KALAH' : 'MENANG';
}else {
    hasil = 'SALAH';
}
// tampilkan hasil games
if(hasil == 'MENANG' || hasil == 'KALAH' || hasil == 'SERI') {
    alert('kamu memilih : ' + player + '\nkomputer memilih : ' + com);
} else {
    alert('KAMU MEMASUKAN PILIHAN YANG SALAH!');
}
    if(hasil == 'MENANG') {
alert('Selamat Kamu Menang !!');
} else if(hasil == 'SERI') {
    alert('Wah hasilnya seri! kamu hampir menang!')
} else if(hasil == 'KALAH') {
    alert('Wah sayang sekali kamu kalah!')
}else {
    alert('Silahkan masukan pilihan sesuai aturan ya!');
}

if(hasil == 'MENANG' || hasil == 'KALAH' || hasil == 'SERI') {
    repeat = confirm('Apakah kamu ingin bermain lagi?');
    }
}
} else {
    alert('Wah sayang sekali, jangan lupa datang kembali ya!')
}
if(repeat == false) {
    alert('Terima Kasih Telah Bermain Ya!');
}