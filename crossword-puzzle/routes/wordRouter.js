const express = require("express")
const wordRouter = express()
const Word = require("../models/word.js")

wordRouter.route("/")
    // .get((req,res,next)=>{
    //     Word.find((err, word)=>{
    //         if(err){
    //             res.status(500)
    //             return res.send(err)
    //         }
    //         return res.status(200).send(word)
    //     })
    // })
    .get((req, res, next) => {
        return res.status(200).send("All good")
    })
    .post((req,res,next)=>{
        const newWord = new Word(req.body)
        newWord.save((err, savedWord)=>{
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(savedWord)
        })
    })


    module.exports = wordRouter;