'use strict'
import FaustoPathImg from '../assets/images/fausto_silva.jpg'
import JacquinPathImg from '../assets/images/chefe_jacquin.jpg'
import CraqueNetoPathImg from '../assets/images/craque_neto.jpg'
import HodorPathImg from  '../assets/images/hodor_hodor.jpg'
import CasaGrandePathImg from '../assets/images/casa_grande.jpg'
import ChefePalmirinhaPathImg from '../assets/images/chefe_palmirinha.jpg'
import JaskierBardoPathImg from '../assets/images/jaskier_bardo.jpg'
import JoseDatenaPathImg from '../assets/images/jose_datena.jpg'
import PareceQuepioroPathImg from '../assets/images/parece_quepioro.jpg'
import RickTratoFeitoPathImg from '../assets/images/rick_tratofeito.jpg'
import SilvioLuizPathImg from '../assets/images/silvio_luiz.jpg'
import ThiagoNevesPathImg from '../assets/images/thiago_neves.jpg'
import WilliamBonnerPathImg from '../assets/images/william_bonner.jpg'
import BonecoXaropinhoPathImg from '../assets/images/boneco_xaropinho.jpg'
import YudiPlaystationPathImg from '../assets/images/yudi_playstation.jpg'
import Character from '../Class/Character'

const casaGrande = new Character(5,'Casa Grande', CasaGrandePathImg,
    ['só ganha que faz gol', 'não pode perder esse lance', 'vai vencer quer ganhar', 
    'na minha época não era assim', 'quem faz mais gol ganha', 'ta jogando muito mal',
    'pra mim isso ta errado', 'ai fica dificil mesmo', 'vamo ve o que vai acontecer', 
    'ele não ta bem', 'pra mim é um grande jogador', 'não ta jogando bem hoje', 'ele não fez o gol por que perdeu',
'não da pra ganhar sem fazer gol', 'pra fazer gol tem que chutar', 'perdeu um grande oportunidade',
'foi um lindo lance', 'é não sei né', 'quero vê isso em campo'], 'Gerar o texto pô');

const chefePalmirinha = new Character(6,'Chefe Palmirinha', ChefePalmirinhaPathImg,
    [''], 'Gerar texto amiguinha');

const jaskieBardo = new Character(7,'Jaskie Bardo', JaskierBardoPathImg,
    ['toss a coin to your witcher', 'dê um trocado para seu bruxo', 'lanza una moneda a tu brujo',
'lancia una moneta al tuo witcher', 'бросить монетку своему ведьмаку', 
'당신의 마술사에게 동전을 던져' , 'lancer une pièce à votre sorceleur', 'gooi een munt naar je witcher',
'ĵeti moneron al via sorĉisto', 'ρίξτε ένα νόμισμα στο μαγισσό σας', 'Wirf eine Münze zu deinem Hexer',
'あなたのウィッチャーにコインを投げる', 'wrzuć monetę do wiedźmina', 'إرم عملة ل الخاص بك',
'Coronas cornonabit insignitur denarius ad Witcher'], 'Toss a text to you witcher');

const joseDatena = new Character(8,'Jose Datena', JoseDatenaPathImg,
    ['barbaridade', 'me da imagens', 'comandante Amilton', 
 'é uma barbaridade', 'é brincadeira', 'culpa desse politicos safados',
 'a população não aguenta mais', 'ta complicado', 'esses criminosos',
 'um bando de canalhas', 'isso não pode mais acontecer', 'ta tudo parado na marginal',
 'ta tendo manifestação', 'olha só', 'está tudo alagado mais uma vez', 'e ta vindo chuva em'], 
 'Gerar texto capitão Amilton');

const parequeQuepioro = new Character(9,'Parece Quepioro', PareceQuepioroPathImg,
    ['ja tava bom', 'ai melhorou', 'agora parece que pioro',
'então ja não tava bom', 'ai tinha dado uma melhorada', 'que disse ta mais ou menos',
'não tava tão bom assim', 'mas não melhorou', 'disse que ia mudar para melhor',
'não tava muito bom', 'tava meio ruim também', 'tava ruim', 'meio ruim', 'concerteza'],
 'Gerar um texto que ja nao ta bom');

const rickTratofeito = new Character(10,'Rick TratoFeito', RickTratoFeitoPathImg,
    ['a gente nunca sabe o que vai entrar pela aquela porta', 'vou ter que chamar um especialista', 
'sabe como é eu preciso ganhar dinheiro também', 'eu conheço alguém que sabe tudo sobre isso', 
'não é que eu não confio em você', 'eu não confio em ninguém', 'isso vai ficar muito tempo na minha loja',
'isso não da lucro', 'não vai ser fácil vender', 'isso não me parece autêntico' , 
'eu trabalho aqui com meu pai e meu filho','esse é o trato feito', 'esse é o meu maximo', 
'nem sei por que estou fazendo isso', 'um cara trouxe algo muito interessante', 'a restauração não foi bem feita',
'isso precisa ser restaurado'], 'Gerar texto com um especialista');

const silvioLuiz = new Character(11,'Silvio Luiz', SilvioLuizPathImg,
    ['Minha nossa Senhora', 'abriu a caixa de ferrmaente em', 
'olha no lance', 'é foi foi foi foi dele', 'ta armado o pagode em', 'lindo lance',
'balançou o capim no fundo da rede', 'abram-se as cortinas e começa o espetaculo' ,
'não precisava fazer esse falta né', 'olha o contra-ataque', 'bola pro mato que o jogo é de campeonato',
'rolou a bola', 'vai chutar bunde de vaca', 'agora é pra fazer', 'Gooooooooooool'], 'Olho na geração do texto !');

const thiagoNeves = new Character(12,'Thiago Neves', ThiagoNevesPathImg,
    [''], 'Bom dia Zezé, deixa eu gera um texto cara');

const williamBonner = new Character(13,'William Bonner', WilliamBonnerPathImg,
    ['boa noite', 'boa noite', 'tenham uma ótima noite', 'e tenham uma boa noite'], 'Gerar Texto e Boa Noite!');

const yudiPlaystation = new Character(14,'Yudi Playstation', YudiPlaystationPathImg,
    ['Playstation', 'Playstation', 'Playstation', 'Playstation', 'Playstation', 'Playstation',
    'Playstation', 'Playstation', 'você ganhou um jogo da vida não fica triste não'], 'Gerar Playtexto Playtexto');

const bonecoXaropinho = new Character(15,'Boneco Xaropinho', BonecoXaropinhoPathImg,
    [''], 'Gerar o texto Rapaaaaaaaaiz');

const faustoSilva = new Character(1,'Fausto Silva',FaustoPathImg,
    ['oloko meu', 'mais do que nunca em', 'essa fera ai', 
    'é brincadeira bixo', 'ta pegando fogo', 'churasqueira elétrica', 'as oito e sete',
    'reinaldo jaqueline', 'arquivo confidencial', 'reclames do plim plim', 'olokinho',
    'cade o meu ovo'], "Gerar esse texto bicho");

const chefJacquin = new Character(2, 'Chef Jacquin', JacquinPathImg, ['falta tumpero', 'vergonha para a proffisoum', 'vamo vamo', 'num quero sabe',
            'falta meia hora', 'sento na graxa', 'isso não ta baum', 'experiment você',
            'isso ta muito desagradavel', 'julienne', 'num pode desliga freeze', 
            'isso é pegadinha', 'precisa mais cruoquancia', 'cade o misampra'], 
            'Gera esse textu in 5 minuto');

const craqueNeto = new Character(3,'Craque Neto',CraqueNetoPathImg,
    ['parece que tem dois pulmão', 'vai te lasca', 'esse cabelo de boneca',
            'eu não jogo mais', 'digasse di passage', 'pão de forma seven boys', 
            'garotinho', 'é um baita jogador', 'ta de brincadeira', 
            'palmeiras não tem mundial', 'jogador pé de rato', 'tem que i pra seleção',
            'é brincadeira', 'essa defesa ta parecenod um queijo suiço cheia de buraco'], 'Gerar um baita de um texto');

const hodorHodor = new Character(4, 'Hodor Hodor', HodorPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Hodor Texto');

const players = [faustoSilva, chefJacquin, craqueNeto, hodorHodor, casaGrande, bonecoXaropinho, 
     chefePalmirinha, jaskieBardo, joseDatena, parequeQuepioro,
rickTratofeito, silvioLuiz, thiagoNeves, williamBonner, yudiPlaystation];

function getPlayerById(id){
    return players.find(player => player.id === id);
}

function getAll() {
    return players;
}

export default {
    getPlayerById,
    getAll
}