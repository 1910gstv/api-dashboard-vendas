const express = require("express");
const Produto = require("../models/Produtos");

async function createProduto(req, res) {

    const newProduto = req.body;

    try {
        const newProdutoCreated = await Produto.create(newProduto);
        return res.status(200).json(newProdutoCreated)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}

module.exports = { createProduto };
