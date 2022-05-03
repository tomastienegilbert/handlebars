const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const chalk = require("chalk");

app.listen(3000, () => {
    console.log(chalk.green.bold("El servidor está inicializado en el puerto http://localhost:3000"));
});

// publicar la carpeta bootstrap
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));

// publicar archivos estaticos
app.use("/bootstrapcss", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/bootstrapjs", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"))
app.use("/json", express.static(__dirname + "/json"))
app.use("/assets", express.static(__dirname + "/assets"))
app.use("/css", express.static(__dirname + "/css"))

app.set("view engine", "hbs");
app.engine(
    "hbs",
    exphbs.engine({
        extname: ".hbs",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/components"
    })
);

//Crear una ruta raíz que al ser consultada renderice una vista con un parcial “Dashboard” enviándole en el render un arreglo con los nombres de los productos. Serecomienda que estos coincidan con las imágenes de cada producto. (3 Puntos)
app.get("/", (req, res) => {
    res.render("Main", {
        // punto 3
        frutas: [
            { nombre: "banana" },
            { nombre: "cebollas" },
            { nombre: "lechuga" },
            { nombre: "papas" },
            { nombre: "tomate" },
            { nombre: "pimenton" }
        ]
    });
});

// app.get("/carreras", (req, res) => {
//     res.render("Cursos", {
//         layout: "Cursos",
//         carreras: [
//             { nombre: "banana", descripcion: "Este es curso enfocado desde HTML hasta framework especializado" },
//             { nombre: "UX/UI", descripcion: "Este es curso enfocado desde HTML hasta framework especializado" },
//             { nombre: "Full Stack", descripcion: "Este es curso enfocado desde HTML hasta framework especializado" }
//         ]
//     });
// });

// 404 => redirect a la ruta raíz
// app.get("*", (req, res) => {
//     res.redirect("/");
// })