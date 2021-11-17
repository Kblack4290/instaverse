import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/instaverse", ({
    useNewUrlParser: true, useUnifiedTopology: true
}))
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err.message))