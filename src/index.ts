/**
 * Created by imkarma on 2/4/17.
 */
export default class Serv{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}