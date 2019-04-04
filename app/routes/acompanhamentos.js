const express = require('express')
const route = express.Router()

const AcompanhamentoController = require('../../../salv-api/app/controllers/acompanhamentos')
route.get('/acompanhamento', AcompanhamentoController.getAll)
route.get('/acompanhamento/:id', AcompanhamentoController.getById)
route.get('/acompanhamento-codigo', AcompanhamentoController.getCod)
route.post('/acompanhamento', AcompanhamentoController.create)
route.put('/acompanhamento-editar/:id', AcompanhamentoController.update)
route.delete('/acompanhamento/:id', AcompanhamentoController.delete)

module.exports = route