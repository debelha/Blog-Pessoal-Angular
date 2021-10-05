import { Postagem } from "./Postagem"

export class Usuario{
    public idUsuario: number
    public nomeUsuario: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public minhasPostagens: Postagem[]
}