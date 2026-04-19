import './util/module-alias'
import 'dotenv/config'
import express from 'express'
import { router } from '@src/routes'

const app = express()
app.use(express.json())
app.use(router)
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log('Server is running on port ' + PORT))