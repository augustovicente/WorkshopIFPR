import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../utils/prisma';

class MainController
{
    async listUserTypes(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const user_types = await prisma.userType.findMany();
            return res.status(StatusCodes.OK).json(user_types);
        }
        catch (error)
        {
            return next(error);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const { email, password, user_type_id, name } = req.body;
            const user = await prisma.user.create({
                data: {
                    email,
                    password,
                    userTypeId: +user_type_id,
                    name,
                }
            });
            return res.status(StatusCodes.CREATED).json(user);
        }
        catch (error)
        {
            console.log(error);
            return next(error);
        }
    }

    async listUsers(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            // list all users with their user type
            const users = await prisma.user.findMany({
                include: {
                    userType: true,
                }
            });
            return res.status(StatusCodes.OK).json(users);
        }
        catch (error)
        {
            return next(error);
        }
    }
}

export default new MainController();