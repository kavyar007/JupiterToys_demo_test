import dotenv from "dotenv"

dotenv.config ({
    path : ".env.qa"
})

export class ConfigManager
{
    static get baseURL()
    {
   return process.env.BASE_URL!;    
    }
    static get forename ()
    {
   return process.env.FORENAME!;    
    }
    static get surname ()
    {
   return process.env.SURNAME!;    
    }
    static get email ()
    {
   return process.env.EMAIL!;    
    }
    static get telephone ()
    {
   return process.env.TELEPHONE!;    
    }
    static get message ()
    {
   return process.env.MESSAGE!;    
    }

    
}