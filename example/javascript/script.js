
window.onload = () => {

    var graph = new cgraph(document.getElementById("graph"));

    graph.draw();

    document.getElementById("add").addEventListener("click", () => {

        let f = prompt("y=", "Math.sin(x/10)*100") || "x";
        let color = prompt("color:", "green") || "green";

        graph.addfunction(f, color);

        let element = document.createElement("span");
        element.classList.add("function");
        element.style.color = color;
        element.innerText = `> y = ${f}`;
        document.getElementById("functions").append(element);

        graph.draw();

    });

    document.getElementById("remove").addEventListener("click", () => {

        try {

            let f = document.getElementsByClassName("function");
            f[f.length - 1].remove();

        } catch (ignored) { };

        graph.removefunction(graph.getfunctions().length - 1);
        graph.draw();

    });

    document.getElementById("settings").addEventListener("click", () => {
        
        graph.background_color = prompt("Background Color:", graph.background_color) || graph.background_color;
        graph.axis_color_x = prompt("Axis X Color:", graph.axis_color_x) || graph.axis_color_x;
        graph.axis_color_y = prompt("Axis Y Color:", graph.axis_color_y) || graph.axis_color_y;
        graph.grid_color = prompt("Grid Color:", graph.grid_color) || graph.grid_color;
        
        graph.draw();
    
    });

    document.getElementById("screenshot").addEventListener("click", () => {
        graph.screenshot();
    })

    window.addEventListener("resize", () => {
        graph.draw()
    })

}
