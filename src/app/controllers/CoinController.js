import CoinRepository from "../repositories/CoinRepository.js"

class CoinController {
    async index(req, res) {
        const result = await CoinRepository.findAll()

        res.json(result)
    }

    async show(req, res) {
        const result = await CoinRepository.findById(req)

        res.json(result)
    }

    async store(req, res) {
        const result = await CoinRepository.create(req)

        res.json(result)
    }

    async delete(req, res) {
        const result = await CoinRepository.delete(req)

        res.json(result)
    }

    async update(req, res) {
        const result = await CoinRepository.update(req)

        res.json(result)
    }
}

export default new CoinController()