import { Request, Response } from "express"
import jwt from 'jsonwebtoken'


export const checkAuth = (request: Request, response: Response, next: any) => {
    next()
    return
    try {
        // console.log(request.params)
        const authorization = request.headers.authorization? request.headers.authorization : ''
        const token = authorization.split(' ')[1]

        jwt.verify(token, 'secret_this_should_be_longer_okay')
        next()
    } catch (err) {
        response.status(401).json({ message: 'Erro na autenticação' })
        console.log(err)
    }
}