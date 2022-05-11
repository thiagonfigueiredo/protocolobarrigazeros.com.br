const perfil = document.getElementById("perfil");
const bm = document.getElementById("bm");
const campanha = document.getElementById("campanha");
const conjunto = document.getElementById("conjunto");
const anuncio = document.getElementById("anuncio");
const criativo = document.getElementById("criativo");
const publico = document.getElementById("publico");
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
  publico.value = "";
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
    params += `&utm_campaign=${campanha.value}`;
    if (conjunto.value.length > 0) {
      params += `|${conjunto.value}`;
    }
    if (anuncio.value.length > 0) {
      params += `|${anuncio.value}`;
    }
  }
  if (publico.value.length > 0) {
    params += `&utm_term=${publico.value}`;
  }
  if (criativo.value.length > 0) {
    params += `&utm_content=${criativo.value}`;
  }
  url.setAttribute(
    "value",
    `${window.location.origin}${params ? params : ""}`
  );
  copyToClipboard();
};
