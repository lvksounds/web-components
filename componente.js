class MeuCirculo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" }); // dom especifico para este componente

    const raiz = document.createElement("span");
    raiz.setAttribute("class", "raiz");

    const texto = document.createElement("span");
    texto.setAttribute("class", "texto");
    texto.textContent = this.getAttribute("texto");

    raiz.appendChild(texto);

    const style = document.createElement("style");
    style.textContent = `
      .raiz{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${this.getAttribute("cor") || "red"};
        width: 300px;
        height: 300px;
        border-radius: 300px;
      }
      .texto {
        font-size: 2rem;
        color: white;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(raiz);
  }
}

customElements.define("meu-circulo", MeuCirculo); // os nomes para elementos customizados preciam ser separados por ifem.
