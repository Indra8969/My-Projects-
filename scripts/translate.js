var language =
  "Afrikaans,Albanian,Amharic,Arabic,Armenian,Azerbaijani,Basque,Belarusian,Bengali,Bosnian,Bulgarian,Catalan,Cebuano,Chichewa,Chinese (Simplified),Chinese (Traditional),Corsican,Croatian,Czech,Danish,Dutch,English,Esperanto,Estonian,Filipino,Finnish,French,Frisian,Galician,Georgian,German,Greek,Gujarati,Haitian Creole,Hausa,Hawaiian,Hebrew,Hindi,Hmong,Hungarian,Icelandic,Igbo,Indonesian,Irish,Italian,Japanese,Javanese,Kannada,Kazakh,Khmer,Kinyarwanda,Korean,Kurdish (Kurmanji),Kyrgyz,Lao,Latin,Latvian,Lithuanian,Luxembourgish,Macedonian,Malagasy,Malay,Malayalam,Maltese,Maori,Marathi,Mongolian,Myanmar (Burmese),Nepali,Norwegian,Odia (Oriya),Pashto,Persian,Polish,Portuguese,Punjabi,Romanian,Russian,Samoan,Scots Gaelic,Serbian,Sesotho,Shona,Sindhi,Sinhala,Slovak,Slovenian,Somali,Spanish,Sundanese,Swahili,Swedish,Tajik,Tamil,Tatar,Telugu,Thai,Turkish,Turkmen,Ukrainian,Urdu,Uyghur,Uzbek,Vietnamese,Welsh,Xhosa,Yiddish,Yoruba,Zulu,Hebrew,Chinese (Simplified)";
var languagesCode =
  "af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu,he,zh";
var lang = language.split(",");
var code = languagesCode.split(",");

const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "8476ab59a2msh985ab2be3803df6p191674jsn73ddad999233",
    "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
  },
  body: new URLSearchParams({
    from: "en",
    to: "gu",
    text: "",
  }),
};

var select = document.querySelectorAll("select");
select.forEach((sl) => {
  for (i = 0; i < lang.length - 1; i++) {
    var opElm = document.createElement("option");
    opElm.innerHTML = lang[i];
    opElm.value = code[i];
    sl.appendChild(opElm);
  }
});

setInterval(() => {
  if (document.querySelector("input").value == "") {
    document.querySelector(".Translation").style.animationName = "load";
    document.querySelector(".Translation").innerHTML = "";
  }
}, 1000);

const getData = async () => {
  console.log("res sent")
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    document.querySelector(".Translation").style.animationName = "--";
    document.querySelector(".Translation").innerHTML = result.trans;
  } catch (error) {
    console.error(error);
  }
};
document.querySelector("input").addEventListener("change", (e) => {
  options.body.set("text", document.querySelector("input").value);
  getData();
});

select[0].addEventListener("change", () => {
  options.body.set("from", select[0].value);
  getData();
});
select[1].addEventListener("change", () => {
  options.body.set("to", select[1].value);
  getData();
});

document.querySelector("h3").addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.querySelector(".Translation").innerHTML
  );
});
