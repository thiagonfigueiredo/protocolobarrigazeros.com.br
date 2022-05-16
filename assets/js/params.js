// const params = new Proxy(new URLSearchParams(window.location.search), {
//   get: (searchParams, prop) => searchParams.get(prop),
// });

// const src = params.src;

String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const params = window.location.search;

if (params) {
// if (src) {
  if (document.getElementById("cta-button-1")) {
    document
      .getElementById("cta-button-1")
      .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701${params.replaceAt(0, '&')}`);
    //   .setAttribute("href", `https://pay.kiwify.com.br/MYLtYJJ?src=${src}`);
  }

  if (document.getElementById("cta-button-2")) {
    document
      .getElementById("cta-button-2")
      .setAttribute("href", `https://pay.hotmart.com/J70689920Y?checkoutMode=10&bid=1652713075701${params.replaceAt(0, '&')}`);
    //   .setAttribute("href", `https://pay.kiwify.com.br/MYLtYJJ?src=${src}`);
  }
}
