const express = require("express");
const Produto = require("../models/Produtos");

async function createProducts(req, res) {

    const newProduto = req.body;

    try {
        const newProdutoCreated = await Produto.create(newProduto);
        return res.status(200).json(newProdutoCreated)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}

async function getAllProducts(req,res) {
    try {
        const allProducts = await Produto.findAll()
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

async function getProductById(req,res) {
    const { id } = req.params;

    try {
        const product = await Produto.findOne({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

async function updateProduct(req, res) {
    const { id } = req.params;
    const newInfo = req.body;

    try {
        await Produto.update(newInfo, {
            where: {
                id: Number(id)
            }
        });
        const updatedProduct = await Produto.findOne({
            where: {
                id: Number(id)
            } 
        })
        return res.status(200).json(updatedProduct);
    } catch (error) {        
        return res.status(500).json(error.message);
    }
}

async function deleteProduct(req, res) {
    const { id } = req.params;

    try {
        await Produto.destroy({
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({mensagem: `id ${id} deletado!`})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { createProducts, getAllProducts, getProductById, updateProduct, deleteProduct };
