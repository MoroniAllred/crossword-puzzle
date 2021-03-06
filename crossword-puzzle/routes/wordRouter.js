const express = require("express")
const wordRouter = express()
const Word = require("../models/word.js")

wordRouter.route("/")
    .get((req, res, next) => {
        Word.find((err, words)=>{
            if(err){
                res.status(500)
                return res.send(err)
            }
        
            return res.status(200).send(words)
        })
    })
    // .post((req,res,next)=>{
    //     const newWord = new Word(req.body)
    //      newWord.save((err, savedWord)=>{
    //         if(err){
    //             res.status(500)
    //             return res.send(err)
    //         }
    //         return res.status(201).send(savedWord)
    //     })
    // })

    module.exports = wordRouter;