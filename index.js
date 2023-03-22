process.stdout.write("\033c");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const download = require("./download");
const path = require("path");
const fs = require("fs");

const argv = yargs(hideBin(process.argv)).argv;

if (argv.url) {
  download(argv.url).then((e) => {
    const ruta = path.join(__dirname, "site", "index.html");
    fs.writeFile(ruta, e, (err, data) => {
      if (err) throw Error("Ocurrio un error al descargar el contenido");
      return process.stdout.write("\rDescarga completa ==== 100%'");
    });
  });
} else {
  console.log("Proporcione una URL con parametro --url=[url del sitio]");
}
