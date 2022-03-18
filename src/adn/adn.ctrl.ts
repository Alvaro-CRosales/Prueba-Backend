import { Request, Response } from "express";
import { IAdnModel } from "./adn.interface";
import { AdnService } from "./adn.service";

export class AdnCtrl{

    public static async hasMutation(req:Request, res:Response): Promise<void>{
        const adn: IAdnModel = req.body
        try {
            const response = await AdnService.hasMutation(adn);
            res.status(200).json(adn);
        } catch (error:any) {
            res.status(500).send(error);
        }
    }

}

