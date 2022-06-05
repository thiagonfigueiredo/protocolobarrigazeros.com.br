// const params = new Proxy(new URLSearchParams(window.location.search), {
//   get: (searchParams, prop) => searchParams.get(prop),
// });

// const src = params.src;

const params = window.location.search;

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

if (params) {
  // if (src) {
  if (document.getElementById("cta-button-1")) {
    document
      .getElementById("cta-button-1")
      // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701&src=${params.split("&")[1].split("=")[1] + "+" + params.split("&")[2].split("=")[1] + "+" + params.split("&")[3].split("=")[1]}`);
      // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701${params.replaceAt(0, "&")}`);
      .setAttribute("href", `https://pay.kiwify.com.br/MYLtYJJ${params}`);
    // .setAttribute("href", `https://ev.braip.com/checkout/pla2g26z/che5ezln${params}`);
  }

  if (document.getElementById("cta-button-2")) {
    document
      .getElementById("cta-button-2")
      // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701&src=${params.split("&")[1].split("=")[1] + "+" + params.split("&")[2].split("=")[1] + "+" + params.split("&")[3].split("=")[1]}`);
      // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701${params.replaceAt(0, "&")}`);
      .setAttribute("href", `https://pay.kiwify.com.br/MYLtYJJ${params}`);
    // .setAttribute("href", `https://ev.braip.com/checkout/pla2g26z/che5ezln${params}`);
  }

  if (document.getElementById("cta-button-bonus")) {
    document
      .getElementById("cta-button-bonus")
      // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701&src=${params.split("&")[1].split("=")[1] + "+" + params.split("&")[2].split("=")[1] + "+" + params.split("&")[3].split("=")[1]}`);
      // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701${params.replaceAt(0, "&")}`);
      .setAttribute("href", `https://pay.kiwify.com.br/MYLtYJJ${params}`);
    // .setAttribute("href", `https://ev.braip.com/checkout/pla2g26z/che5ezln${params}`);
  }
}


if (document.getElementById("cta-button-resultados")) {
  document
    .getElementById("cta-button-resultados")
    // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701&src=${params.split("&")[1].split("=")[1] + "+" + params.split("&")[2].split("=")[1] + "+" + params.split("&")[3].split("=")[1]}`);
    // .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701${params.replaceAt(0, "&")}`);
    .setAttribute("href", `https://pay.kiwify.com.br/MYLtYJJ${params}`);
  // .setAttribute("href", `https://ev.braip.com/checkout/pla2g26z/che5ezln${params}`);
}
}
