'use strict'
import DollynhoPathImg from '../assets/images/amigo_dollynho.jpg'
import CarroDaPamonhaPathImg from '../assets/images/carro_dapamonha.jpg'
import JoelSantanaPathImg from '../assets/images/joel_santana.jpg'
import AnaMariaPathImg from '../assets/images/ana_maria.jpg'
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
import EtBiluPathImg from '../assets/images/et_bilu.jpg'
import GalvaoBuenoPathImg from '../assets/images/galvao_bueno.jpg'
import IrmaosAObraPathImg from '../assets/images/irmaos_a_obra.jpg'
import JogadorDeLolPathImg from '../assets/images/jogador_de_lol.jpg'
import RobertoCarlosPathImg from '../assets/images/roberto_carlos.jpg'
import AgostinhoCarraraPathImg from '../assets/images/agostinho_carrara.jpg'
import Character from '../Class/Character'

const casaGrande = new Character(5,'Casa Grande', 'Casão', CasaGrandePathImg,
    ['só ganha que faz gol pô!', 'não pode perder esse lance', 'porque vai vencer quer ganhar', 
    'na minha época não era assim', 'quem faz mais gol ganha', 'ta jogando muito mal',
    'pra mim isso ta errado!', 'ai fica dificil mesmo', 'vamo ve o que vai acontecer né.', 
    'ele não ta bem', 'mas pra mim é um grande jogador!', 'não ta jogando bem hoje', 
    'ele não fez o gol por que perdeu né.', 'não da pra ganhar sem fazer gol', 
    'pra fazer gol tem que chutar.', 'perdeu um grande oportunidade', 'quem vai ganha?',
    'foi um lindo lance!', 'é não sei?', 'quero vê isso em campo'], 'Gerar o texto pô');

const anaMaria = new Character(6,'Ana Maria & Louro', 'Ana-Louro', AnaMariaPathImg,
    ['acoooooooooorda menina!', 'meu Deus Ana Maria', 'HaHaHaHahaHa haha', 'vamo passa em baixo da mesa?',  
    'solta os cachorros', 'poxa vida em Ana Maria', 'essa receita esta deleciosa', 'começou o mais você',
    'huuuuuuuuuuuuuuuuum', 'você gostou Louro?', 'da um pouco pra mim Ana Maria?', 'mete balas nele Ana Maria',
    'estou aqui com essa chef de cozinha maravilhosa!', 'bom dia gente', 'vamos vamos vemos', 'da um pouco pra mim',
    'você vai se deliciar com essa receita.', 'esse bolo vai fica delecioso!', 'um ótimo dia a todos vocês.',
    'programa ao vivo é assim mesmo.', 'toma cuidado em Ana Maria.'], 'Acooorda pra gerar o texto');

const jaskieBardo = new Character(7,'Jaskie Bardo', 'Jaskie', JaskierBardoPathImg,
    ['toss a coin to your witcher.', 'dê um trocado para seu bruxo.', 'lanza una moneda a tu brujo.',
'lancia una moneta al tuo witcher.', 'бросить монетку своему ведьмаку.', 
'당신의 마술사에게 동전을 던져.' , 'lancer une pièce à votre sorceleur.', 'gooi een munt naar je witcher.',
'ĵeti moneron al via sorĉisto.', 'ρίξτε ένα νόμισμα στο μαγισσό σας.', 'Wirf eine Münze zu deinem Hexer.',
'あなたのウィッチャーにコインを投げる.', 'wrzuć monetę do wiedźmina.', 'إرم عملة ل الخاص بك.',
'Coronas cornonabit insignitur denarius ad Witcher.'], 'Toss a text to you witcher.');

const joseDatena = new Character(8,'Jose Datena', 'Datena', JoseDatenaPathImg,
    ['é barbaridade', 'me da imagens', 'comandante Amilton ta me ouvindo?', 'esses canalhas',
 'é uma barbaridade.', 'é brincadeira', 'culpa desse politicos safados.', 'imagens fortes', 
 'esses calhordas!', 'é o fim da picada isso.', 'quero imagens', 'onde estão os politicos?',
 'a população não aguenta mais', 'ta complicado!', 'esses criminosos.', 'cadê o Almilton?',
 'um bando de canalhas', 'isso não pode mais acontecer', 'ta tudo parado na marginal de novo?',
 'ta tendo manifestação', 'olha só', 'está tudo alagado mais uma vez!', 'ta vindo chuva em'], 
 'Gerar texto capitão Amilton');

const parequeQuepioro = new Character(9,'Parece Que Pioro', 'Tava Ruim', PareceQuepioroPathImg,
    ['ja tava bom!', 'ai melhorou', 'agora parece que pioro!', 'agora não sei', 'ele disse que ia mudar para melhor.',
'então ja não tava bom.', 'ai tinha dado uma melhorada', 'que disse ta mais ou menos né',
'não tava tão bom assim.', 'ele disse', 'ia muda', 'mas não melhorou', 'disse que ia mudar para melhor', 'mudava pra melhor',
'não tava muito bom', 'tava meio ruim também', 'tava ruim', 'meio ruim', 'concerteza', 'é então'],
 'Gerar um texto que ja nao ta bom');

const rickTratofeito = new Character(10,'Rick Trato Feito', 'Rick', RickTratoFeitoPathImg,
    ['a gente nunca sabe o que vai entrar pela aquela porta.', 'vou ter que chamar um especialista!', 
'sabe como é eu preciso ganhar dinheiro também.', 'eu conheço alguém que vai saber tudo sobre isso.', 
'não é que eu não confio em você.', 'eu não confio em ninguém!', 'isso vai ficar muito tempo na minha loja',
'isso não da lucro!', 'não vai ser fácil vender', 'isso não me parece autêntico', 'você aceita 500?', 
'eu trabalho aqui com meu pai e meu filho', 'esse é o trato feito.', 'esse é o meu maximo', 'é um tiro no escuro',
'você não consegue abaixar mais?', 'cadê o Chumlee?',  'esse é o seu minimo?', 'que tal 900?', 'isso é muito legal!',
'nem sei por que estou fazendo isso', 'um cara trouxe algo muito interessante hoje', 'a restauração não foi bem feita',
'isso precisa ser restaurado.'], 'Gerar texto com um especialista');

const silvioLuiz = new Character(11,'Silvio Luiz', 'Silvio', SilvioLuizPathImg,
    ['minha nossa Senhora!', 'abriu a caixa de ferramenta em', 'ta armado o pagode na casa do galo em',
'olha no lance', 'foi foi foi foi foi foi foi dele!', 'ta armado o pagode em', 'lindo lance.', 
'pode ser agora?','balançou o capim no fundo da rede.', 'abram-se as cortinas', 
'começa o espetaculo', 'será que foi ele?', 'ai não né bonitão.', 'não precisava fazer esse falta né', 
'olha o contra-ataque', 'bola pro mato que o jogo é de campeonato', 'será que vai sai o gol?',
'linda defesa do goleiro', 'foi para muito longe.', 'ele é ruim com as duas pernas', 'nossa que coisa feia', 
'rolou a bola', 'vai chutar bunda de vaca', 'agora é pra fazer', 'Gooooooooooool!'], 'Olho na geração do texto!');

const joelSantana = new Character(12,'Joel Santana', 'Papai Joel', JoelSantanaPathImg,
    ['Is a gud player', 'is the best world player.', 'play in the left', 'play in the right', 'head shoulders head shoulders!',
        'i have controll de mate!', 'play in de middou', 'player is very gud', 'South Africa play sami', 'du noti?', 
        'we havi the best oportunit', 'another player', 'played very gud', 'the book on the table', 'verb to be', 'yes I can?', 
        'the player have many experience', 'Im very happy', 'is a great time.', 'in the second time mai time', 'the player experience.',
      'is gud time!', 'so so yeah.', 'is a great player', 'tu ta de brincation with me', 'do you noun the number one shamppo',
    'remove une hundred porcent.', 'plise loocki to me', 'finishe de cocereition'],
    'Geneirate the good text of world');

const williamBonner = new Character(13,'William Bonner', 'Bonner', WilliamBonnerPathImg,
    ['boa noite.', 'boa noite!', 'boa noite', 'boa noite?'], 'Gerar Texto e Boa Noite!');

const yudiPlaystation = new Character(14,'Yudi Playstation', 'Yudi', YudiPlaystationPathImg,
    ['playstation', 'playstation', 'playstation', 'playstation', 'playstation', 'playstation',
    'playstation', 'playstation', 'playstation', 'playstation', 'playstation', 'playstation', 
    'poxa você ganhou um jogo da vida mas não fica triste não.'], 'Gerar Playtexto Playtexto');

const amigoDollynho = new Character(15,'Amigo Dollynho', 'Dollynho', DollynhoPathImg,
    ['vamos brincar?', 'papai você é um herói é meu exemplo na vida eu te ofereço esse dolly.', 
    'dolly guarána dolly guarana', 'dolly dolly dolly dolly dooooooolly', 'ei amiguinho',
    'oi pessoal eu sou o dollynho o seu amiguinho.', 'vamos cantar?', 'dolly dolly guarana dolly o melhor',
    'o dolly guarana o sabor brasileiro!', 'tome muito liquido!', 'jogue a garrafinha no lixo', 
    'vamos cuidar do nosso planeta!', 'pratique esportes', 'mamãe você é amor é o exemplo da vida eu te ofereço esse dolly.',
    'um dolly dois dollys três dollys pra mim.', 'dolly o melhor', 'saboroso'], 
    'Vamos gerar o texto amiguinho');

const faustoSilva = new Character(1,'Fausto Silva', 'Faustão', FaustoPathImg,
    ['oloko meu', 'mais do que nunca em.', 'essa fera ai meu.', 'ele que é um dos maiores sucessos do Brasil.',
    'disco de ouro', 'não é brincadeira não viu.', 'Olha aí o japinha!', 'se vira nos 30!',
    'mais uma dança dos famosos', 'está começando mais um domingão do Faustão', 'isso não é facil não', 
    'é brincadeira bixo', 'ta pegando fogo', 'churasqueira elétrica', 'as oito e sete', 'você está no arquivo confidencial!',
    'Reinaldo Jaqueline.', 'Pablo Vilar.', 'é o caminhão fo faustão', 'vamos para os reclames do plim plim', 'olokinho',
    'e como faz pra apaga isso?', 'chama os bombeiros lá.', 'ás 7:17', 'ás 8:19', 'um grande amigo meu',
    'mais de 1 milhão de copias vendidas!', 'olokinho meu', 'que que é isso, bicho?', 'domingão na casa da sogra',
    'cadê o meu ovo?'], "Gerar esse texto bicho");

const chefJacquin = new Character(2, 'Chef Jacquin', 'Jacquin', JacquinPathImg, ['falta tumpero', 'vergonha para a proffisoum', 'vamo vamo', 'num quero sabe',
            'falta meia hora', 'sento na graxa', 'isso não ta baum', 'experiment você',
            'isso ta muito desagradavel', 'julienne', 'num pode desliga freeze', 
            'isso é pegadinha', 'precisa mais cruoquancia', 'cade o misampra'], 
            'Gera esse textu in 5 minuto');

const craqueNeto = new Character(3,'Craque Neto', 'Neto', CraqueNetoPathImg,
    ['nauuuuuuuum vai da!', 'parece que tem dois pulmão', 'vai te lasca', 'esse cabelo de boneca',
            'eu não jogo mais', 'digasse di passage', 'pão de forma seven boys', 
            'eae garotinho', 'é um baita jogador', 'ta de brincadeira', 'é brincadeira?', 
            'o palmeiras não tem mundial!', 'jogador pé de rato', 'tem que i pra seleção',
            'essa defesa ta ai ta parecendo um queijo suiço cheia de buraco.'], 'Gerar um baita de um texto');

const carroDaPamonha = new Character(4, 'Carro da Pamonha', 'Pamonha', CarroDaPamonhaPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Gerar Texto de Piracicaba');

const etBilu = new Character(16, 'ET Bilu', 'Bilu', EtBiluPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Gerar texto com Conhecimento');

const irmaosAObra = new Character(17, 'Irmãos a Obra', 'Irmãos', IrmaosAObraPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Gerar texto com conceito aberto');

const galvaoBueno = new Character(18, 'Galvão Bueno', 'Galvão', GalvaoBuenoPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Haja coração para gerar o texto');

const jogadorDeLol = new Character(19, 'Jogador Tóxico de LoL', 'Lolzeiro', JogadorDeLolPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Gera texto seu lixo');

const agostinhoCarrara = new Character(20, 'Agostinho Carrara', 'Agostinho', AgostinhoCarraraPathImg,
['hodoor', 'hodor hodor', 'hodor Hodor hodor', 'HODOORRR', 'HoDor', 'HODOR HODOR'], 'Gerar texto com Lineu');

const players = [faustoSilva, chefJacquin, craqueNeto, agostinhoCarrara, 
    joelSantana, casaGrande, anaMaria, etBilu, carroDaPamonha, 
    jogadorDeLol, jaskieBardo, joseDatena, galvaoBueno, parequeQuepioro,
rickTratofeito, silvioLuiz, amigoDollynho, williamBonner, yudiPlaystation, irmaosAObra];

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