import { Club } from "./club";
import { User } from "./user";

export class Formation{  
    id ?: Number;   
    name?: String; 
    datef?:Date; 
    type ?: String;  
    description ?: String; 
   club?: Club;
    user?:User; 
     
}  