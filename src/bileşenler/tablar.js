import axios from "axios";

const Tablar = (konu) => {
  const div = document.createElement("div");
  div.classList.add("topics");

  konu.forEach((element) => {
    const tabs = document.createElement("div");
    tabs.classList.add("tab");
    tabs.textContent = element;
    div.appendChild(tabs);
  });

  return div;

  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
};

const tabEkleyici = (secici) => {
  const tabContainer = document.querySelector(secici);

  axios.get("http://localhost:5001/api/konular").then((cikti) => {
    console.log(cikti);
    const tablar = Tablar(cikti.data.konular);
    tabContainer.appendChild(tablar);
  });
  return tabContainer;
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Tablar, tabEkleyici };
