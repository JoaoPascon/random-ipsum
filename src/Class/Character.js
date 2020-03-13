'use strict'

export default class Character {
    
    constructor(id, name, alias, imagePath, words = [], btnLabel = 'Gerar texto'){
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.sourceImagePath = imagePath;
        this.words = words;
        this.btnLabel = btnLabel;
    }

}