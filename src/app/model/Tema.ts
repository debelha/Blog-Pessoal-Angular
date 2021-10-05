import { StringMap } from "@angular/compiler/src/compiler_facade_interface"
import { Postagem } from "./Postagem"

export class Tema{
    public idTema: number
    public dnomeTema: string
    public postagem: Postagem[]
}