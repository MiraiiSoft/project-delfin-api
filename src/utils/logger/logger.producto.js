import { createLogger, format, transports } from "winston";
const loggerProducto = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `src/logs/logs_producto.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
});

export default loggerProducto;