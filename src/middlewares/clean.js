
function clean( dataType, req ){
    const keys = Object.keys(req.body)
    const clean = {}

    for( let key of keys ){
        for( let nameProperty of dataType ){
            if( key === nameProperty ){
                clean[key] = req.body[key]
            }
        }
    }

    return clean;
}

export const cleanRoll = ( req, res, next ) => {
    const dataType = ["roll"]
    const dataClean = clean(dataType, req )

    req.body = dataClean
    next()
}