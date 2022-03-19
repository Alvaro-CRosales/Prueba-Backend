import { Request, Response } from "express";
import { IAdnModel } from "./adn.interface";
import { AdnService } from "./adn.service";

export class AdnCtrl{

    public static async hasMutation(req:Request, res:Response): Promise<void>{
        const adn: string[] = req.body.adn
        try {
            const response = await AdnService.hasMutation(adn);

            if(response.message === "false"){
                res.status(400).json(adn)
            }else if (response.mutation === true){
                res.status(200).json(adn)
            }else{
                res.status(403).json(adn)
            }

        } catch (error:any) {
            res.status(500).send(error);
        }
    }

    public static async stats(req:Request, res:Response): Promise<void>{
        try {
            const response = await AdnService.stats();
            res.status(200).json(response)
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

