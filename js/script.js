document
  .getElementById("hitungLuasButton")
  .addEventListener("click", hitungLuas);
document.getElementById("resetLuasButton").addEventListener("click", resetForm);
document
  .getElementById("hitungKelilingButton")
  .addEventListener("click", hitungKeliling);
document
  .getElementById("resetKelilingButton")
  .addEventListener("click", resetForm);

function hitungLuas() {
  var panjangSisi = document.getElementById("luasSquareSide").value;
  panjangSisi = parseFloat(panjangSisi);

  if (isNaN(panjangSisi) || panjangSisi <= 0) {
    alert("Masukkan nilai panjang sisi yang valid.");
  } else {
    var luasPersegi = panjangSisi * panjangSisi;
    var resultLuasContainer = document.getElementById("resultLuasContainer");
    if (resultLuasContainer) {
      resultLuasContainer.innerHTML =
        "L = S X S" +
        "\nLuas = " +
        panjangSisi +
        " x " +
        panjangSisi +
        "\nLuas = " +
        luasPersegi;
    } else {
      console.error("Tidak Ditemukan");
    }
  }
}

function hitungKeliling() {
  var panjangSisi = document.getElementById("kelilingSquareSide").value;
  panjangSisi = parseFloat(panjangSisi);

  if (isNaN(panjangSisi) || panjangSisi <= 0) {
    alert("Masukan nilai panjang sisi yang valid.");
  } else {
    var kelilingPersegi = 4 * panjangSisi;
    var resultKelilingContainer = document.getElementById(
      "resultKelilingContainer"
    );
    if (resultKelilingContainer) {
      resultKelilingContainer.innerHTML =
        "Keliling = 4 * S" +
        "\nKeliling = 4 x " +
        panjangSisi +
        "\nKeliling = " +
        kelilingPersegi;
    }
  }
}

function resetForm() {
  document.getElementById("luasSquareSide").value = "";
  document.getElementById("kelilingSquareSide").value = "";
  document.getElementById("resultLuasContainer").innerHTML = "";
  document.getElementById("resultKelilingContainer").innerHTML = "";
}
