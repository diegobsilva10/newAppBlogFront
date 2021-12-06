
import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{

    public id: number
    public titulo: string
    public criador: User
    public texto: String
    public listadePostagens: Tema
}