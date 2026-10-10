import estilos from './alerta-app.css?inline';

export class AlertaApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Atributo vigilado para detectar cambios en el tipo (exito, aviso, error)
    static get observedAttributes() {
        return ['tipo'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    private render() {
        const tipo = this.getAttribute('tipo') || 'aviso';

        this.shadowRoot!.innerHTML = `
            <style>${estilos}</style>
            <div class="alerta ${tipo}">
                <div class="contenido">
                    <slot></slot> <!-- El mensaje va en un hueco (slot) -->
                </div>
                <button class="btn-cerrar" aria-label="Cerrar">&times;</button>
            </div>
        `;

        const btnCerrar = this.shadowRoot!.querySelector('.btn-cerrar');
        btnCerrar?.addEventListener('click', () => {
            const evento = new CustomEvent('cerrar', {
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(evento);
            this.remove();
        });
    }
}

customElements.define('alerta-app', AlertaApp);