const Header = (baslik, tarih, yazi) => {
  const div = document.createElement("div");
  div.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  div.appendChild(date);
  date.textContent = tarih;

  const h1 = document.createElement("h1");
  div.appendChild(h1);
  h1.textContent = baslik;

  const txt = document.createElement("span");
  txt.classList.add("temp");
  div.appendChild(txt);
  txt.textContent = yazi;

  return div;

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
};

const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .appendChild(
      Header(
        "Mete Milan Mutluoğlu",
        "09.09.2022",
        "Tarihinde İstanbul'da dünyaya geldi."
      )
    );
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
