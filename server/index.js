// const express = require('express');
import express from 'express'
import bodyParser from'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
const app = express()

app.use(bodyParser.json({limit:"32mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"32mb", extended:true}));
app.use(cors());

app.use('/posts', postRoutes)



const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, ({useNewUrlParser:true, useUnifiedTopology:true}))
    .then(() =>app.listen(PORT, () => console.log(`Server running on prot: ${PORT}`)))
    .catch(err => console.log(err.message))