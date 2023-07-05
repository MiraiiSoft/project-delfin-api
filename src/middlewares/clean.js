
function clean( dataString[], req ){
    const keys = Object.keys(req.body);
    const clean: any = {};

    for( let key of keys ){
        for( let nameProperti of dataString ){
            if( key === nameProperti ){
                clean[key] = req.body[key];
            }
        }
    }

    return clean;
}

export const cleanRoll = ( req, res, next ) => {
    
    const typeData = ["roll"];

    const clean = clean(typeData, req);
    req.body = clean;
    
    next();
}