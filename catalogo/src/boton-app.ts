import estilos from "./boton-app.css?inline";

export class BotonApp extends HTMLElement {
  static observedAtributes = {
    variante: null,
    tipo: null,
    deshabilitado: null,
  };

  private boton: HTMLButtonElement;

  //se ejecuta cuando se crea el elemento
  constructor() {
    super();
    const sombra = this.attachShadow({ mode: "open" });

    sombra.innerHTML = `
        <style>${estilos}</style>
            <button>
                <slot> 
                </slot>
            
            </button>
        `;

    this.boton = sombra.querySelector("button") as HTMLButtonElement;
  }

  //se ejecuta cuando se agrega el elemento al DOM
  //se ejecuta cuando la etiqueta entra en la pagina
  connectedCallback() {
    this.pintar();
  }


  attributeChangedCallback(){
    this.pintar();
  }

  //disconectedCallback - cuando el elemento sale de la pagina
  //adoptedCallback - cuando la etiqueta se muda de una pagina a otra

  private pintar() {
    this.boton.className = this.getAttribute("variante") ?? "primario";
    this.boton.disabled = this.hasAttribute("deshabilitado");
  }
}


//como se va a llamar el elemetno
customElements.define("button-app", BotonApp);
