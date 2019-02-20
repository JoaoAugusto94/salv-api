/**
 * author: hppod
 * create: 20/02/2019 01h07
 * file: controllers/telefone.js
 */

const { TelefoneModel } = require('./../models')

class Telefone {

    get(req, res) {
        TelefoneModel.findAll({ raw: true })
            .then(telefone => res.json(telefone))
            .catch(error => res.json(error))
    }

    getById(req, res) {
        TelefoneModel.findByPk(req.params.id)
            .then(telefone => res.json(telefone))
            .catch(error => res.json(error))
    }

    create(req, res) {
        TelefoneModel.create(req.body)
            .then(telefone => res.json(telefone))
            .catch(error => res.json(error))
    }

    update(req, res) {

    }

    delete(req, res) {

    }
}

module.exports = new Telefone()