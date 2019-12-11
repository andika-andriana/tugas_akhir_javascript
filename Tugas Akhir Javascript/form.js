function buat_login() {
  var hapus = document.getElementById("X"); //melakukan seleksi pada element dengan id="X"
  hapus.parentElement.removeChild(hapus); //melakukan pengahapusan

  var p = document.createElement("p"); //membuat element p
  p.className = "tulisan_login"; //input className agar dapat di seleksi oleh CSS
  p.innerHTML = "Silahkan Login"; //rubah value P

  var div1 = document.getElementsByTagName("div")[0]; //seleksi div
  div1.appendChild(p); //masukan element p kedalam div

  var formulir = document.createElement("form"); //buat element form
  div1.appendChild(formulir); //masukan element form kedalam element div

  var label1 = document.createElement("label"); //buat label
  label1.innerHTML = "Nama User"; //ubah nilai dengan "Username"
  formulir.appendChild(label1); //masukan label kedalam formulir
  var namaUser = document.createElement("input"); //buat element input
  namaUser.type = "text" //isikan nilai attribute type
  namaUser.placeholder = "Nama User.."
  namaUser.className = "form_login"; //isikan nilai attribute class agar dapat diseleksi CSS
  formulir.appendChild(namaUser); //masukan element input kedalam element form

  var label2 = document.createElement("label"); //buat label
  label2.innerHTML = "Nomor Handphone"; //ubah nilai dengan "Username"
  formulir.appendChild(label2); //masukan label kedalam formulir
  var noHp = document.createElement("input"); //buat element input
  noHp.type = "text" //isikan nilai attribute type
  noHp.placeholder = "Nomor Handphone."
  noHp.className = "form_login"; //isikan nilai attribute class agar dapat diseleksi CSS
  formulir.appendChild(noHp); //masukan element input kedalam element form

  var label3 = document.createElement("label"); //buat label
  label3.innerHTML = "Username"; //ubah nilai dengan "Username"
  formulir.appendChild(label3); //masukan label kedalam formulir
  var inputUsername = document.createElement("input"); //buat element input
  inputUsername.type = "text" //isikan nilai attribute type
  inputUsername.placeholder = "Username dan email .."
  inputUsername.className = "form_login"; //isikan nilai attribute class agar dapat diseleksi CSS
  formulir.appendChild(inputUsername); //masukan element input kedalam element form

  var label4 = document.createElement("label"); //buat label
  label4.innerHTML = "Password"; //ubah nilai dengan "Username"
  formulir.appendChild(label4); //masukan label kedalam formulir
  var inputUsername = document.createElement("input"); //buat element input
  inputUsername.type = "password" //isikan nilai attribute type
  inputUsername.placeholder = "Password .."
  inputUsername.className = "form_login"; //isikan nilai attribute class agar dapat diseleksi CSS
  formulir.appendChild(inputUsername); //masukan element input kedalam element form

  var tombol = document.createElement("input"); //buat elemet input
  tombol.type = "submit"; //isikan nilai attribute type dengan submit
  tombol.className = "tombol_login"; //isikan nilai attribute class agar dapat diseleksi CSS
  tombol.value = "DAFTAR SEKARANG";
  formulir.appendChild(tombol); //masukan element input kedalam element form

}