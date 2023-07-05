const postImg = {
    post: {
        tags: ['upload'],
        description: "Upload images",
        parameters: [],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/uploadImgs'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'OK',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/resUploadImgs'
                        }
                    }
                }
            }
        }
    }
}

export default postImg;