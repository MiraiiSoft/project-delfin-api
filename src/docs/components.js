module.exports = {
    components: {
        schemas: {
            uploadImgs: {
                type: 'object',
                properties: {
                    nombreCarpeta: {
                        type: 'string',
                        example: 'Lapiz'
                    },
                    imgs: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                nombre: {
                                    type: 'string',
                                    example: 'Lapiz b1'
                                },
                                base64: {
                                    type: 'string',
                                    example: 'adaffadadsa'
                                }
                            }
                        }
                    }
                }
            },
            resUploadImgs: {
                type: 'object',
                properties: {
                    success: {
                        type: "boolean",
                        example: true
                    },
                    data: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                nombre: {
                                    type: 'string',
                                    example: 'Lapiz'
                                },
                                url: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}