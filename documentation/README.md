
# CGRAPHJS Documentation

## 1. First step

### 1.1 Install CgraphJS

Add the CgraphJS to the HTML page with the file (cgraph.js): <https://github.com/AntoineLandrieux/CgraphJSblob/main/lib/cgraph.js>

```html
<!DOCTYPE html>
<html>
<head>
    ...
    <script src="https://github.com/AntoineLandrieux/CgraphJSblob/main/lib/cgraph.js">
</head>
<body>
    <canvas id="graph">
</body>
</html>
```

### 1.2 Initialize Cgraph.js

```js
window.onload = () => {
    
    // Get canvas
    const graph = document.getElementById("graph");
    const cgraphjs = new cgraph(graph);

    // Add math function
    // "x**2" -> function
    // "white" -> function's color
    cgraphjs.addfunction("x**2", "white");

    // Add math function
    // "Math.sin(x/10)*100" -> function
    // "green" -> function's color
    cgraphjs.addfunction("Math.sin(x/10)*100", "green");
    
    // Clear canvas and draw grid, axis and functions
    cgraphjs.draw();

}
```

## 2. Customize

### 2.1 Background color

```js
window.onload = () => {
    
    const graph = document.getElementById("graph");
    const cgraphjs = new cgraph(graph);

    // Change background color
    cgraphjs.background_color = "#000000";

    cgraphjs.addfunction("x**2", "white");
    cgraphjs.addfunction("Math.sin(x/10)*100", "green");
    
    cgraphjs.draw();

}
```

### 2.2 Axis color

```js
window.onload = () => {
    
    const graph = document.getElementById("graph");
    const cgraphjs = new cgraph(graph);

    cgraphjs.background_color = "#000000";
    
    // Change axis color
    cgraphjs.axis_color_x = "#ff0000";
    cgraphjs.axis_color_y = "#0000ff";

    cgraphjs.addfunction("x**2", "white");
    cgraphjs.addfunction("Math.sin(x/10)*100", "green");
    
    cgraphjs.draw();

}
```

### 2.3 Grid color

```js
window.onload = () => {
    
    const graph = document.getElementById("graph");
    const cgraphjs = new cgraph(graph);

    cgraphjs.background_color = "#000000";
    cgraphjs.axis_color_x = "#ff0000";
    cgraphjs.axis_color_y = "#0000ff";

    // Change grid color
    cgraphjs.grid_color = "#ffffff0a";
    
    cgraphjs.addfunction("x**2", "white");
    cgraphjs.addfunction("Math.sin(x/10)*100", "green");
    
    cgraphjs.draw();

}
```
