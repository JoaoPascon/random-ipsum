'use strict'
import FaustoPathImg from '../assets/images/fausto_silva.jpg'
import JacquinPathImg from '../assets/images/jacquin.jpg'
import CraqueNetoPathImg from '../assets/images/craque_neto.jpg'
import HodorPathImg from  '../assets/images/hodor.jpg'
import RandomPathImg from '../assets/images/random_image.jpg'
import Character from '../Class/Character'


const faustoSilva = new Character(1,'Fausto Silva',FaustoPathImg,
    ['oloko meu', 'mais do que nunca em', 'essa fera ai', 
    'é brincadeira bixo', 'ta pegando fogo', 'churasqueira elétrica', 'as oito e sete',
    'reinaldo jaqueline', 'arquivo convidencial', 'reclames do plim plim', 'olokinho',
    'cade o meu ovo'], "Gerar esse texto bicho");

const jacquin = new Character(2, 'Jacquin', JacquinPathImg, ['falta tumpero', 'vergonha para a proffisoum', 'vamo vamo', 'num quero sabe',
            'falta meia hora', 'sento na graxa', 'isso não ta baum', 'experiment você',
            'isso ta muito desagradavel', 'julienne', 'num pode desliga freeze', 
            'isso é pegadinha', 'precisa mais cruoquancia'], 'Gera esse textu agora');

const craqueNeto = new Character(3,'Craque Neto',CraqueNetoPathImg,
    ['parece que tem dois pulmão', 'vai te lasca', 'esse cabelo de boneca',
            'eu não jogo mais', 'digasse di passage', 'pão de forma seven boys', 
            'garotinho', 'é um baita jogador', 'ta de brincadeira', 
            'palmeiras não tem mundial', 'jogador pé de rato', 'tem que i pra seleção',
            'é brincadeira'], 'Gerar um baita texto');

const hodor = new Character(4, 'Hodor Hodor', HodorPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Hodor Texto');

const novosPlayers = ['rick trato feito', 'galvão bueno'];

const players = [faustoSilva, jacquin, craqueNeto, hodor];

function getPlayerById(id){
    return players.find(player => player.id === id);
}

function getAll() {
    return players;
}

function getAllMoreThis(newCharacters = []) {
    let newCharactersGenerated = newCharacters.map((character, index) => {
        return new Character( players.length + 1 + index, character, RandomPathImg, 
            ['Bla bla', 'bla', 'BLA BLA', 'bla Bla bla']);
    })
    return players.concat(newCharactersGenerated);
}

export default {
    getPlayerById,
    getAll,
    getAllMoreThis
}