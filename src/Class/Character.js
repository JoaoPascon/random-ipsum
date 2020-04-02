'use strict'

export default class Character {
    
    constructor(id, name, alias, imagePath, btnLabel = 'Gerar texto', words = []){
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.sourceImagePath = imagePath;
        this.btnLabel = btnLabel;
        this.words = words;
    }

}