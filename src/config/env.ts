import * as dotenv from 'dotenv';

dotenv.config();

export default class ENV {
  public static PORT: number = Number(process.env.PORT as string);
}