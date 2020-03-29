const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
routes.get('/ongs', OngController.index);  

//o express faz as coisas em ordem por isso o celebrate deve vir antes da criação 
//da ONG para que possamos validar os dados recebidos antes de criar a ONG
routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp: Joi.number().min(10).max(11).required(),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)
    })
}),OngController.create);

routes.post('/session', SessionController.create)

routes.get('/profile', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) , ProfileController.index)

routes.get('/incidents', celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}),IncidentController.index)
routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required()
    })
}),IncidentController.delete)

module.exports = routes; 