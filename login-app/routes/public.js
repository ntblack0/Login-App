import express from 'express'

const router = express.Router()

router.post('/cadastro', (req, res) => {
    const user = req.body
    res.status(201).json(user)
})
 
export default router

// valencabalbino_db_user
// VBSJNb534Wjt9gZf
