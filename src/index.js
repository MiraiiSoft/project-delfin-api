import app from "./app.js"
import { swaggerDocs } from "./swagger.js"
import logger from "./utils/logger/logger.js";

app.listen( app.get('port'), () => {
    swaggerDocs( app, app.get('port') );
    logger.info({message: "Server running"})
} )

console.log("Server on port: ", app.get('port'))
