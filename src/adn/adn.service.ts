import pool from "../database/postgres";

import { ICountModel, IResponseModel } from "./adn.interface";

export class AdnService {
    public static async hasMutation(adn: string[]): Promise<IResponseModel>{

        //Variables que se utilizarán para validar las mutaciones
        const hasc = 'CCCC';
        const hast = 'TTTT';
        const hasg = 'GGGG';
        const hasa = 'AAAA';
        let text: string = "";
        //expresión regular que nos ayudará a validar que sólo sean base nitrogenada
        const exp:RegExp = /^[TCAG]*$/; 

        for (let i = 0; i < adn.length; i++) {
                    
            text += adn[i]

        }
        
        const filter = text.search(exp);
        
        if(adn.length >= 4 && filter == 0){
        
        text=""

        //Se busca una mutación horizontalmente

        for (let i = 0; i < adn.length; i++) {
            if(adn[i].includes(hasc) || adn[i].includes(hast) || adn[i].includes(hasg) || adn[i].includes(hasa)){
                //Recolectamos en un string el texto para guardarse en la base de datos
                for (let i = 0; i < adn.length; i++) {
                    
                    text += adn[i]

                }
                //guardamos la informacion en la base de datos
                await pool.query(`INSERT INTO adn.results (id, adn, mutation) VALUES (DEFAULT, '${text}', true)`)
                return {mutation:true, message:"Success"}
            }


            //Se agregan los caracteres a un string para verificar verticalmente
            text = "";
            for (let j = 0; j < adn.length; j++) {
                text += adn[j].charAt(i);
            }
            

            if(text.includes(hasc) || text.includes(hast) || text.includes(hasg) || text.includes(hasa)){
                //Recolectamos en un string el texto para guardarse en la base de datos
                for (let i = 0; i < adn.length; i++) {
                    
                    text += adn[i]

                }
                //guardamos la informacion en la base de datos
                await pool.query(`INSERT INTO adn.results (id, adn, mutation) VALUES (DEFAULT, '${text}', true)`)
                return {mutation:true,  message:"Success"}
            }

        }

        //se busca una mutación en diagonal parte inferior con partida de diagonal central
        
        
        for (let i = 0; i <= adn.length ; i++) {
             text = "";
            for (let j = 0; j < adn.length - i; j++) {
                text += adn[i + j].charAt(j);
            }
            if(text.includes(hasc) || text.includes(hast) || text.includes(hasg) || text.includes(hasa)){
                for (let i = 0; i < adn.length; i++) {
                    
                    text += adn[i]

                }
                //guardamos la informacion en la base de datos
                await pool.query(`INSERT INTO adn.results (id, adn, mutation) VALUES (DEFAULT, '${text}', true)`)
                return {mutation:true, message:"Success"}
            }
            
        }

        //se busca una mutación en diagonal parte superior con partida después de diagonal central

        for (let i = 1; i <= adn.length; i++) {
            text = "";
            for (let j = 0; j < adn.length - i; j++) {
                text += adn[j].charAt(i + j);
            }

            if(text.includes(hasc) || text.includes(hast) || text.includes(hasg) || text.includes(hasa)){
                //Recolectamos en un string el texto para guardarse en la base de datos
                for (let i = 0; i < adn.length; i++) {
                    
                    text += adn[i]

                }
                //guardamos la informacion en la base de datos
                await pool.query(`INSERT INTO adn.results (id, adn, mutation) VALUES (DEFAULT, '${text}', true)`)
                return {mutation:true,  message:"Success"}
            }

        }
        }else{
            return {mutation:false,  message:"400"}
        }

        //si no se encuentra mutación se envía false y lo guardamos en la base de datos

        for (let i = 0; i < adn.length; i++) {
                    
            text += adn[i]

        }
        
        await pool.query(`INSERT INTO adn.results (id, adn, mutation) VALUES (DEFAULT, '${text}', false)`)
        return {mutation:false,  message:"Success"}
    }

    public static async stats(): Promise<IResponseModel | null>{

        const count_mutation = (await pool.query(`SELECT COUNT(mutation) FROM adn.adn.results WHERE mutation = true;`)).rows[0].count
        const count_noMutation =  (await pool.query(`SELECT COUNT(mutation) FROM adn.adn.results WHERE mutation = false;`)).rows[0].count
        const ratio: number = Number(count_mutation) / Number(count_noMutation);
        ratio.toPrecision(2);
        return {mutation:false,message:{count_mutation, count_noMutation, ratio}}
    }

}


