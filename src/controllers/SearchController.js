const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // buscar todos os devs no raio de 10km
        // filtrar por tecnologias

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const filter = {};

        if (Array.isArray(techsArray)){
            filter['techs'] = {
                $in: techsArray,
            }
        };

        if (typeof latitude === 'number' && typeof longitude === 'number' ){
            filter['location'] = {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            }
        }

        const devs = await Dev.find(filter);

        return response.json({ devs });
        
    }
}