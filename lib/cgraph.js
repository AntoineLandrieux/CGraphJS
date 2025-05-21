
/**
 * CGraphJS Antoine LANDRIEUX 2024 (WTFPL)
 */
class cgraph {

    #context = null;

    backgroundcolor = "#000000";
    axiscolor_x = "#ff0000";
    axiscolor_y = "#0000ff";

    #functions = [];

    /**
     * 
     * @param {HTMLCanvasElement} _Canvas 
     */
    constructor(_Canvas) {

        this.canvas = _Canvas;
        this.#context = this.canvas.getContext("2d");

    }

    /**
     * 
     */
    upadtesize() {

        this.canvas.height = this.canvas.clientHeight;
        this.canvas.width = this.canvas.clientWidth;

    }

    /**
     * 
     * @param {string} formule 
     * @param {string} color 
     * @returns {number}
     */
    addfunction(formule = "x", color = "#ffffff") {

        return this.#functions.push(
            {
                formule: formule,
                color: color
            }
        );

    }

    /**
     * 
     * @param {number} position 
     */
    removefunction(position = 0) {

        delete this.#functions[position];

    }

    /**
     * 
     */
    getfunctions() {

        return this.#functions;

    }

    /**
     * 
     */
    clear() {

        this.#context.fillStyle = this.backgroundcolor;
        this.#context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

    }

    /**
     * 
     */
    drawaxis() {

        const height = this.canvas.clientHeight;
        const width = this.canvas.clientWidth;

        this.#context.fillStyle = this.axiscolor_y;
        this.#context.fillRect(0, height / 2 - 1, width, 1);
        this.#context.fillStyle = this.axiscolor_x;
        this.#context.fillRect(width / 2 - 1, 0, 1, height);

    }

    /**
     * 
     * @param {string} f 
     * @param {string} color 
     */
    async drawfunction(f, color = "#00ff00") {

        return new Promise((resolve, reject) => {

            const height = this.canvas.clientHeight;
            const width = this.canvas.clientWidth;

            var x = -(width / 2);
            var y = height / 2 - eval(f);

            this.#context.strokeStyle = color;
            this.#context.lineWidth = 1;

            try {
                while (x < width / 2) {
                    this.#context.beginPath();
                    this.#context.moveTo(x + width / 2, y);
                    x += 0.1;
                    y = height / 2 - eval(f);
                    this.#context.lineTo(x + width / 2, y);
                    this.#context.stroke();
                }
            } catch ($e) {
                console.error(`cgFormule error, see cgraph.config`);
            }

        });

    }

    /**
     * 
     */
    async drawfunctions() {
        this.#functions.forEach(f => {
            if (f)
                this.drawfunction(f.formule, f.color);
        });
    }

    /**
     * 
     * @param {boolean} clear 
     * @param {boolean} axis 
     * @param {boolean} fs 
     */
    async draw(clear = true, axis = true, fs = true) {

        this.upadtesize();

        clear ? this.clear() : null;
        axis ? this.drawaxis() : null;
        fs ? this.drawfunctions() : null;

    }

    /**
     * 
     */
    screenshot() {

        const link = document.createElement("a");
        link.href = this.canvas.toDataURL("image/png");
        link.download = "screenshot_cgraphjs.png";
        link.click();
        link.remove();

    }

}
