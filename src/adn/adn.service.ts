import { IAdnModel } from "./adn.interface";

export class AdnService {
    public static async hasMutation(adn: IAdnModel): Promise<boolean>{
        //console.log(adn.adn.forEach())
        adn.adn.forEach(adn => console.log(adn));
        return true;
    }
}

