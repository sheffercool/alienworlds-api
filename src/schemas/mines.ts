const minesSchema = {
    description: 'Get mines',
    summary: 'Fetch mines by various criteria',
    tags: ['v1'],
    querystring: {
        type: 'object',
        properties: {
            "limit": {
                description: 'Limit result count',
                type: 'integer'
            },
            "global_sequence": {
                description: 'Global sequence number is greater than this (use for pagination)',
                type: 'integer'
            },
            "miner": {
                description: 'The miner',
                type: 'string'
            },
            "land_id": {
                description: 'The land ID',
                type: 'string'
            },
            "landowner": {
                description: 'The landowner',
                type: 'string'
            },
            "planet_name": {
                description: 'The planet',
                type: 'string'
            },
            "from": {
                description: 'Date from as ISO date (inclusive)',
                type: 'string'
            },
            "to": {
                description: 'Date to as ISO date (exclusive)',
                type: 'string'
            }
        },
        required: []
    },
    response: {}
}

export default {GET: minesSchema}