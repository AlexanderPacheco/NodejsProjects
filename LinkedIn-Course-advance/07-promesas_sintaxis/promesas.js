const promesasNode = require("fs").promises;


promesasNode.copyFile("./archivos/original.txt" , "./archivos/copia.txt")
            .then(() => console.log("copia terminada"))
            .catch(() => console.log("no se puede copiar el archivo"))
            .finally(() => console.log("...") )

console.log("--------------------------------");

            