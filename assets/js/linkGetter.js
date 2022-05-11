const perfil = document.getElementById("perfil");
const bm = document.getElementById("bm");
const campanha = document.getElementById("campanha");
const conjunto = document.getElementById("conjunto");
const anuncio = document.getElementById("anuncio");
const criativo = document.getElementById("criativo");
const url = document.getElementById("url");

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("url");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}

const reset = () => {
  perfil.value = "";
  bm.value = "";
  campanha.value = "";
  conjunto.value = "";
  anuncio.value = "";
  criativo.value = "";
  url.value = "";
};

const handleGerarUrl = () => {
  let params = "?src=fb";
  if (perfil.value.length > 0) {
    params += `&utm_source=pf-${perfil.value}`;
    if (bm.value.length > 0) {
      params += `|bm-${bm.value}`;
    }
  }
  if (campanha.value.length > 0) {
    params += `&utm_campaign=campanha-${campanha.value}`;
    if (conjunto.value.length > 0) {
      params += `|conjunto-${conjunto.value}`;
    }
    if (anuncio.value.length > 0) {
      params += `|anuncio-${anuncio.value}`;
    }
  }
  if (criativo.value.length > 0) {
    params += `&utm_content=criativo-${criativo.value}`;
  }
  url.setAttribute(
    "value",
    `https://protocolobarrigazeros.com.br${params ? params : ""}`
  );
  copyToClipboard();
};
