import estilos from './tabla-generica.css?inline';

export class TablaGenerica extends HTMLElement {
    private _columnas: { clave: string; titulo: string }[] = [];
    private _filas: any[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Propiedad para las columnas
    set columnas(valor: { clave: string; titulo: string }[]) {
        this._columnas = valor;
        this.pintar();
    }
    get columnas() {
        return this._columnas;
    }

    // Propiedad para las filas
    set filas(valor: any[]) {
        this._filas = valor;
        this.pintar();
    }
    get filas() {
        return this._filas;
    }

    connectedCallback() {
        this.pintar();
    }

    private pintar() {
        // Si no hay filas, mostrar el texto «Sin datos»
        if (!this._filas || this._filas.length === 0) {
            this.shadowRoot!.innerHTML = `
                <style>${estilos}</style>
                <div class="sin-datos">Sin datos</div>
            `;
            return;
        }

        // Pintar la tabla de forma genérica usando las claves y títulos
        this.shadowRoot!.innerHTML = `
            <style>${estilos}</style>
            <table>
                <thead>
                    <tr>
                        ${this._columnas.map(col => `<th>${col.titulo}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${this._filas.map(fila => `
                        <tr>
                            ${this._columnas.map(col => `<td>${fila[col.clave] ?? ''}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Registrar el componente con un nombre que lleva guion
customElements.define('tabla-generica', TablaGenerica);