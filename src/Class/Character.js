'use strict'

export default class Character {
    
    constructor(id, name, imagePath, words = [], btnLabel = 'Gerar texto'){
        this.id = id;
        this.name = name;
        this.sourceImagePath = imagePath;
        this.words = words;
        this.btnLabel = btnLabel;
    }

}