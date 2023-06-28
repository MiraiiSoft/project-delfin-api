import app from "./app.js"
import { swaggerDocs } from "./swagger.js"

app.listen( app.get('port'), () => {
    swaggerDocs( app, app.get('port') );
} )

console.log("Server on port: ", app.get('port'))