import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public idPostagem: number
    public tituloPostagem: string
    public descricaoPostagem: string
    public criador: Usuario
    public tema: Tema
}