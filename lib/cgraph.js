
/**
 * CGraphJS Antoine LANDRIEUX 2024 (WTFPL)
 */
class cgraph {

    #context = null;

    background_color = "#000000";
    axis_color_x = "#ff0000";
    axis_color_y = "#0000ff";
    grid_color = "#ffffff0a";

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
     * @param {string} _Formule 
     * @param {string} _Color 
     * @returns {number}
     */
    addfunction(_Formule = "x", _Color = "#ffffff") {

        return this.#functions.push(
            {
                formule: _Formule,
                color: _Color
            }
        );

    }

    /**
     * 
     * @param {number} _Position 
     */
    removefunction(_Position = 0) {

        delete this.#functions[_Position];

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

        this.#context.fillStyle = this.background_color;
        this.#context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

    }

    /**
     * 
     */
    drawaxis() {

        const height = this.canvas.clientHeight;
        const width = this.canvas.clientWidth;

        this.#context.fillStyle = this.axis_color_y;
        this.#context.fillRect(0, height / 2 - 1, width, 1);
        this.#context.fillStyle = this.axis_color_x;
        this.#context.fillRect(width / 2 - 1, 0, 1, height);

    }

    /**
     * 
     */
    drawgrid() {

        this.#context.fillStyle = this.grid_color;

        for (var x = 0; x < this.canvas.clientWidth; x += 10)
            this.#context.fillRect(x, 0, 1, this.canvas.clientHeight);

        for (var y = 0; y < this.canvas.clientHeight; y += 10)
            this.#context.fillRect(0, y, this.canvas.clientWidth, 1);

    }

    /**
     * 
     * @param {string} _Function 
     * @param {string} _Color 
     */
    async drawfunction(_Function, _Color = "#00ff00") {

        return new Promise((resolve, reject) => {

            const height = this.canvas.clientHeight;
            const width = this.canvas.clientWidth;

            var x = -(width / 2);
            var y = height / 2 - eval(_Function);

            this.#context.strokeStyle = _Color;
            this.#context.lineWidth = 1;

            try {
                while (x < width / 2) {
                    this.#context.beginPath();
                    this.#context.moveTo(x + width / 2, y);
                    x += 0.1;
                    y = height / 2 - eval(_Function);
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
     * @param {boolean} _Clear 
     * @param {boolean} _Grid 
     * @param {boolean} _Axis 
     * @param {boolean} _Functions 
     */
    async draw(_Clear = true, _Grid = true, _Axis = true, _Functions = true) {

        this.upadtesize();

        _Clear ? this.clear() : null;
        _Grid ? this.drawgrid() : null;
        _Axis ? this.drawaxis() : null;
        _Functions ? this.drawfunctions() : null;

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
