const express = require("express")
var BookModel = require('../models/Book')

const routes = express.Router()

//Get All Books
routes.get("/books", async(req, res) => {
    try {
        var bookList = await BookModel.find()
        res.status(200).json(bookList)
    } catch (error) {
        res.status(500).json(error)
    }
    
    //res.send({message: "Get All Books"})
})

//Add NEW Book
routes.post("/books", async(req, res) => {
    try {
        var newBook = new BookModel({
            ...req.body
        })
        await newBook.save()
        res.status(200).json(newBook)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Add NEW Book"})
})

//Update existing Book By Id
routes.put("/book/:bookid", async(req, res) => {
    try {
        var bookList = await BookModel.findByIdAndUpdate(req.params.bookid, req.body)
        res.status(200).json(bookList)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    try {
        const book = await BookModel.findOneAndDelete(req.params.bookid, req.body)
        if (!book) {
            res.status(200).send({message: "Book Not Found"})
        } else {
            res.status(200).send(book)
        }
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
    try {
        var book = await BookModel.findById(req.params.bookid)
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
    //res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes