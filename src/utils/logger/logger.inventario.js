import { createLogger, format, transports } from "winston";
const loggerInventario = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `src/logs/logs_inventario.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
});

export default loggerInventario;