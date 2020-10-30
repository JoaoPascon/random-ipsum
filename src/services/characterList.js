'use strict'
import NeymarJrImg from '../assets/images/neymar_jr.jpg'
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
import SandyJuniorPathImg from '../assets/images/sandy_junior.jpg'
import GalvaoBuenoPathImg from '../assets/images/galvao_bueno.jpg'
import IrmaosAObraPathImg from '../assets/images/irmaos_a_obra.jpg'
import JogadorDeLolPathImg from '../assets/images/jogador_de_lol.jpg'
import RobertoCarlosPathImg from '../assets/images/roberto_carlos.jpg'
import AgostinhoCarraraPathImg from '../assets/images/agostinho_carrara.jpg'
import PadreMarceloPathImg from '../assets/images/padre_marcelo.jpg'
import QueroCafePathImg from '../assets/images/quero_cafe.jpg'
import JuarezTekpixPathImg from '../assets/images/juarez_da_tekpix.jpg'
import Character from '../Class/Character'


const casaGrande = new Character(5,'Casa Grande', 'Casão', CasaGrandePathImg, 'Gerar o texto pô',
    ['só ganha que faz gol pô!', 'não pode perder esse lance', 'porque vai vencer quer ganhar', 
    'na minha época não era assim', 'quem faz mais gol ganha', 'ta jogando muito mal',
    'pra mim isso ta errado!', 'ai fica dificil mesmo', 'vamo ve o que vai acontecer né.', 
    'ele não ta bem', 'mas pra mim é um grande jogador!', 'não ta jogando bem hoje', 
    'ele não fez o gol por que perdeu né.', 'não da pra ganhar sem fazer gol', 
    'pra fazer gol tem que chutar.', 'perdeu um grande oportunidade', 'quem vai ganha?',
    'foi um lindo lance!', 'é não sei?', 'quero vê isso em campo']);

const anaMaria = new Character(6,'Ana Maria & Louro', 'Ana&Louro', AnaMariaPathImg, 'Acooorda pra gerar o texto',
    ['acoooooooooorda menina!', 'meu Deus Ana Maria', 'HaHaHaHahaHa haha', 'vamo passa em baixo da mesa?',  
    'solta os cachorros', 'poxa vida em Ana Maria', 'essa receita esta deleciosa', 'começou o mais você',
    'huuuuuuuuuuuuuuuuum', 'você gostou Louro?', 'da um pouco pra mim Ana Maria?', 'mete balas nele Ana Maria',
    'estou aqui com essa chef de cozinha maravilhosa!', 'bom dia gente', 'vamos vamos vemos', 'da um pouco pra mim',
    'você vai se deliciar com essa receita.', 'esse bolo vai fica delecioso!', 'um ótimo dia a todos vocês.',
    'programa ao vivo é assim mesmo.', 'toma cuidado em Ana Maria.']);

const jaskieBardo = new Character(7,'Jaskie Bardo', 'Jaskie', JaskierBardoPathImg, 'Toss a text to you witcher.',
    ['toss a coin to your witcher.', 'dê um trocado para seu bruxo.', 'lanza una moneda a tu brujo.',
'lancia una moneta al tuo witcher.', 'бросить монетку своему ведьмаку.', 
'당신의 마술사에게 동전을 던져.' , 'lancer une pièce à votre sorceleur.', 'gooi een munt naar je witcher.',
'ĵeti moneron al via sorĉisto.', 'ρίξτε ένα νόμισμα στο μαγισσό σας.', 'Wirf eine Münze zu deinem Hexer.',
'あなたのウィッチャーにコインを投げる.', 'wrzuć monetę do wiedźmina.', 'إرم عملة ل الخاص بك.',
'Coronas cornonabit insignitur denarius ad Witcher.']);

const joseDatena = new Character(8,'Jose Datena', 'Datena', JoseDatenaPathImg, 'Gerar texto capitão Amilton',
    ['é barbaridade', 'me da imagens', 'comandante Amilton ta me ouvindo?', 'esses canalhas',
 'é uma barbaridade.', 'é brincadeira', 'culpa desse politicos safados.', 'imagens fortes', 
 'esses calhordas!', 'é o fim da picada isso.', 'quero imagens', 'onde estão os politicos?',
 'a população não aguenta mais', 'ta complicado!', 'esses criminosos.', 'cadê o Almilton?',
 'um bando de canalhas', 'isso não pode mais acontecer', 'ta tudo parado na marginal de novo?',
 'ta tendo manifestação', 'olha só', 'está tudo alagado mais uma vez!', 'ta vindo chuva em']);

const parequeQuepioro = new Character(9,'Parece Que Pioro', 'Tava Ruim', PareceQuepioroPathImg, 'Gerar um texto que ja nao ta bom',
    ['ja tava bom!', 'ai melhorou', 'agora parece que pioro!', 'agora não sei', 'ele disse que ia mudar para melhor.',
'então ja não tava bom.', 'ai tinha dado uma melhorada', 'que disse ta mais ou menos né',
'não tava tão bom assim.', 'ele disse', 'ia muda', 'mas não melhorou', 'disse que ia mudar para melhor', 'mudava pra melhor',
'não tava muito bom', 'tava meio ruim também', 'tava ruim', 'meio ruim', 'concerteza', 'é então']);

const rickTratofeito = new Character(10,'Rick Trato Feito', 'Rick', RickTratoFeitoPathImg, 'Gerar texto com um especialista',
    ['a gente nunca sabe o que vai entrar pela aquela porta.', 'vou ter que chamar um especialista!', 
'sabe como é eu preciso ganhar dinheiro também.', 'eu conheço alguém que vai saber tudo sobre isso.', 
'não é que eu não confio em você.', 'eu não confio em ninguém!', 'isso vai ficar muito tempo na minha loja',
'isso não da lucro!', 'não vai ser fácil vender', 'isso não me parece autêntico', 'você aceita 500?', 
'eu trabalho aqui com meu pai e meu filho', 'esse é o trato feito.', 'esse é o meu maximo', 'é um tiro no escuro',
'você não consegue abaixar mais?', 'cadê o Chumlee?',  'esse é o seu minimo?', 'que tal 900?', 'isso é muito legal!',
'nem sei por que estou fazendo isso', 'um cara trouxe algo muito interessante hoje', 'a restauração não foi bem feita',
'isso precisa ser restaurado.']);

const silvioLuiz = new Character(11,'Silvio Luiz', 'Silvio', SilvioLuizPathImg, 'Olho na geração do texto!',
    ['minha nossa Senhora!', 'abriu a caixa de ferramenta em', 'ta armado o pagode na casa do galo em',
'olha no lance', 'foi foi foi foi foi foi foi dele!', 'ta armado o pagode em', 'lindo lance.', 
'pode ser agora?','balançou o capim no fundo da rede.', 'abram-se as cortinas', 
'começa o espetaculo', 'será que foi ele?', 'ai não né bonitão.', 'não precisava fazer esse falta né', 
'olha o contra-ataque', 'bola pro mato que o jogo é de campeonato', 'será que vai sai o gol?',
'linda defesa do goleiro', 'foi para muito longe.', 'ele é ruim com as duas pernas', 'nossa que coisa feia', 
'rolou a bola', 'vai chutar bunda de vaca', 'agora é pra fazer', 'Gooooooooooool!']);

const joelSantana = new Character(12,'Joel Santana', 'Papai Joel', JoelSantanaPathImg, 'Geneirate the good text of world',
    ['Is a gud player', 'is the best world player.', 'play in the left', 'play in the right', 'head shoulders head shoulders!',
    'i have controll de mate!', 'play in de middou', 'player is very gud', 'South Africa play sami', 'du noti?', 
    'we havi the best oportunit', 'another player', 'played very gud', 'the book on the table', 'verb to be', 'yes I can?', 
    'the player have many experience', 'Im very happy', 'is a great time.', 'in the second time mai time', 'the player experience.',
    'is gud time!', 'so so yeah.', 'is a great player', 'tu ta de brincation with me', 'do you noun the number one shamppo',
    'remove une hundred porcent.', 'plise loocki to me', 'finishe de cocereition', 'give me my shoes',
    'lock me?', 'where ar yu from?', 'turn the left and the right', 'is black and yelum', 'common gais']);

const williamBonner = new Character(13,'William Bonner', 'Bonner', WilliamBonnerPathImg, 'Gerar Texto e Boa Noite!',
    ['boa noite.', 'boa noite!', 'boa noite', 'boa noite?']);

const yudiPlaystation = new Character(14,'Yudi Playstation', 'Yudi', YudiPlaystationPathImg, 'Gerar Playtexto Playtexto',
    ['playstation', 'playstation', 'playstation', 'playstation', 'playstation', 'playstation',
    'playstation', 'playstation', 'playstation', 'playstation', 'playstation', 'playstation', 
    'poxa você ganhou um jogo da vida mas não fica triste não.']);

const amigoDollynho = new Character(15,'Amigo Dollynho', 'Dollynho', DollynhoPathImg, 'Vamos gerar o texto amiguinho',
    ['vamos brincar?', 'papai você é um herói é meu exemplo na vida eu te ofereço esse dolly.', 
    'dolly guarána dolly guarana', 'dolly dolly dolly dolly dooooooolly', 'ei amiguinho',
    'oi pessoal eu sou o dollynho o seu amiguinho.', 'vamos cantar?', 'dolly dolly guarana dolly o melhor',
    'o dolly guarana o sabor brasileiro!', 'tome muito liquido!', 'jogue a garrafinha no lixo', 
    'vamos cuidar do nosso planeta!', 'pratique esportes', 'mamãe você é amor é o exemplo da vida eu te ofereço esse dolly.',
    'um dolly dois dollys três dollys pra mim.', 'dolly o melhor', 'saboroso']);

const faustoSilva = new Character(1,'Fausto Silva', 'Faustão', FaustoPathImg, 'Gerar esse texto bicho',
    ['oloko meu', 'mais do que nunca em.', 'essa fera ai meu.', 'ele que é um dos maiores sucessos do Brasil.',
    'disco de ouro', 'ta na hora das videos cassetadas!', 'não é brincadeira não viu.', 'Olha aí o japinha!', 'se vira nos 30!',
    'mais uma dança dos famosos', 'está começando mais um domingão do Faustão', 'isso não é facil não', 
    'é brincadeira bixo', 'ta pegando fogo', 'churasqueira elétrica', 'as oito e sete', 'você está no arquivo confidencial!',
    'Reinaldo Jaqueline.', 'Pablo Vilar.', 'é o caminhão do faustão', 'vamos para os reclames do plim plim', 'olokinho',
    'e como faz pra apaga isso?', 'chama os bombeiros lá.', 'ás 7:17', 'ás 8:19', 'um grande amigo meu',
    'mais de 1 milhão de copias vendidas!', 'olokinho meu', 'que que é isso, bicho?', 'domingão na casa da sogra',
    'cadê o meu ovo?', 'ding dong a campainha do faustão.']);

const chefJacquin = new Character(2, 'Chef Jacquin', 'Jacquin', JacquinPathImg, 'Gera esse textu in 5 minuto',
            ['falta tumpero', 'vuce é vergonha para a proffisoum', 'vamu vamu vamu', 'num quero sabe',
            'falta meia hora!', 'sento na graxa', 'isso não ta baum.', 'vuce gostou disu aqui?', 'experiment você',
            'isso ta muito desagradavel', 'isso ta uma bagunça', 'esse é o pior prato qui ja comi.', 'num pode desliga freeze', 
            'se que fez isso?', 'isso é um masterchef de verdadi.', 'naum vai da tempo.', 'falta 5 minutos!',
            'isso ta muito baum parabéns', 'vuce consegui fazer melhor que isso né.', 'isso ta quanto tempu no forno?',
            'isso é a pior coisa qui ja comi!', 'vamo vamo falta 10 minuto', 'isso ta muito feio', 'tem que cuzinhar',
            'o cheiro ta muito bom', 'vamu ve se isso vai fica bom em', 'achu que isso não vai fica legal', 'VAMOOO!!!',
            'o tempo ta acabando.', 'isso é pegadinha', 'precisa de mais cruoquancia', 'cade o misampra']);

const craqueNeto = new Character(3,'Craque Neto', 'Neto', CraqueNetoPathImg, 'Gerar um baita de um texto',
           ['NAUUUUUUUUUUUUUM vai da!!!', 'parece que tem dois pulmão', 'vai te lasca.', 'esse cabelo de boneca',
            'eu não jogo mais', 'digasse di passage', 'pão de forma seven boys', 'ta jogando muito.' ,
            'eae garotinho', 'é um baita jogador', 'ta de brincadeira', 'é brincadeira ou não é?', 
            'eu não jogo mais!', 'o palmeiras não tem mundial!', 'jogador pé de rato', 'tem que i pra seleção',
            'começando mais um donas da bola.', 'quem vai pagar por isso?', 'por que eu joguei demais',
            'não ta jogando é nada!', 'os cara bate escanteio curto.', 'não tem mais cobrador de falta.',
            'o problema é audiencia?', 'me veste de Chaves que a audiencia sobe!', 'Milton Neves cabeçudo',
            'o Mirton Neves tem a cabeça tão grande que quando nasceu a mãe dele achou que era a Hello Kitty.',
            'garfaram o curinthias', 'apito amigo!', 'pênalti claro não marcado', 'isso é minha opinião a de vocês eu não sei.',  
            'essa defesa ta ai ta parecendo um queijo suiço cheia de buraco.']);

const carroDaPamonha = new Character(4, 'Carro da Pamonha', 'Pamonheiro', CarroDaPamonhaPathImg, 'Gerar Texto de Piracicaba',
['PAMONHAS DE PIRACICABA', 'PODE CHEGAR DONA MARIA.', 'É PURO CREME DO MILHO VERDE', 
'PODEM DAR UMA OLHADINHA!', 'PAMONHAS, CURAL E BOLO DE MILHO É UMA DELICIA!', 'VAMO DA UMA OLHADINHA?',
'É MUITO DOCE É UM MEL DE DOCE', 'PAMONHAS PAMONHAS PAMONHAS!', 'VAMO SE APROXIMANDO', 'OLHA LA OLHA LA',
'ESTA PASSANDO NA SUA RUA O CARRO DA PAMONHA!', 'VENHA APROVEITAR', 'SÃO DELICIOSAS.',
'PODE CHEGAR PODE SE APROXIMAR EM', 'VOCÊ PODE COMPRAR COM QUALQUE MOEDINHA', 'CURAL', 'BOLHO DE MILHO',
'PAMONHA', 'OLHA AI OLHA AI FREGUESIA SÃO AS DELICIOSAS PAMONHAS', 'PAMONHAS FRESQUINHAS PAMONHAS CASEIRAS',
'VENHAM PROVAR MINHA SENHORA É UMA DELICIA.']);

const etBilu = new Character(16, 'Sandy & Junior', 'Sandy&Jr', SandyJuniorPathImg, 'Dig-dig-joy, dig-joy-popoy vem gera esse texto',
['se lua toca no mar ela pode nos tocar.', 'pra gente ser feliz tem que cultivar as nossa amizades.', 'vamo pulá, vamo pulá, vamo pulá, vamo pulá', 
'o que se foi fazer no mato Maria Chiquinha?', 'o que é imortal' , 'não morre no final', 'esse turu turu turu aqui dentro.', 
 'se a lenda dessa paixão faz sorrir ou faz chorar', 'o coração é quem sabe?', 'era uma vez um lugarzinho no meito do nada.',
'com sabor de chocolate e de terra molhada', 'oh, oh, olha o que o amor te faz Te deixa sem saber como agir',
'primeira vez que o amor bateu de frente comigo.', 'você disperdiçou o amor, partiu e numca mais ligou', 
'outono é sempre igual', 'as folhas caem no quintal', 'vou te encontrar na luz das estrelas', 'te refletir nas águas do mar',
'dig-dig-joy, dig-joy-popoy', 'vem brinca comigo']);

const irmaosAObra = new Character(17, 'Irmãos a Obra', 'Jona&Drew', IrmaosAObraPathImg, 'Gerar texto com conceito aberto',
['nossa isso é amianto?', 'vamos acabar com essa sala', 'isso é muito antigo', 'precisamos melhorar toda esse área externa.',
 'esse carpete é horrivel!', 'acho que iremos acabar passando um pouco do orçamento.', 'vocês precisam olhar além dessas paredes!',
'essa é uma casa muito grande.', 'podemos então fazer uma oferta?', 'eu não sei se a família vai gostar muito disso!',
'temos um problema aqui!', 'se derrubarmos essa parede isso vai ficar bem bacana.', 'vamos economizar ao máximo' , 'eu não sei se isso vai dar certo.',
'o que vocês acharam disso?', 'precisamos trocar essa lareira', 'só teremos 3 semanas para fazer tudo isso', 'isso vai ser muito difícil',
 'eu espero que vocês tenha gostado porque eu adorei!', 'então o que vocês acharam dessa casa?', 'isso vai ficar muito bom!',
 'essa cozinha vai ter uma linda ilha no meio.', 'vamos trabalhar com cores fortes!', 'vamos trocar todo esse carpete',
'vamos quebrar essas paredes aqui', 'o aquecedor está com problemas', 'essa é uma linda casa em um excelente bairro!',
'é bom porque a casa é perto da escola', 'vamos trocar todas essas janelas', 'esse deck é muito grande']);

const galvaoBueno = new Character(18, 'Galvão Bueno', 'Galvão', GalvaoBuenoPathImg, 'Haja coração para gerar esse texto amigo',
['bem amigos da rede globo', 'haja coração', 'vai perder vai ganhar vai peder vai ganhar, perdeu! GANHOU!', 
 'eai pode isso Arnaldo?', 'é teste pra cardíaco', 'È TETRA É TETRA É TETRA!!!', 'SAAAAAAAAAAAI que é sua Tafarel.',
 'não sei se vai da pra ele continuar em!', 'GOOOOOOOOOOOOOOOOOOL é do Brasil', 'ronaldinho é o nome dele',
 'mas o Brasil ta jogando muito mal', 'chegamos aos 8 minutos de jogo e o que você está achando Casa Grande?',
 'o único problema dessa reta é que termina numa curva.' , 'chutou com a perna errada!', 'começa o jogo', 'pedala robinho',
 'tem que colocar o coroção na ponta da chuteira', 'não da pra fazer dois gols ao mesmo tempo', 'gol da Alemanha',
 'la vem eles de noooooovo goooool.', 'isso é uma tragédia', 'quem é que sobe?', 'o gol saiu no momento certo!',
 'foi pro chão e pediu falta', 'isso é você que está falando', 'é uma falta perigossísima', 'vamos ver no que vai dar isso.',
 'olha como o Felipão esta nervoso', 'pode ser o último lance do jogo em.', 'tem que ir pra cima', 'isso ronaldinho pra cima deles',
 'bateu pro gol bateu pra fora', 'olha a bomba pra fora', 'quem ta melhor Caio?', 'vai ter que trocar em']);

const jogadorDeLol = new Character(19, 'Jogador Elo Bronze', 'Lolzeiro', JogadorDeLolPathImg, 'Gera texto seu lixo',
[ 'GG izi', 'meu support é um lixo!', 'time ruim to base.', 'aff esse Garen é um lixo reporta please',
    'esse suport só da KS lixo, reporta.', 'deixa eu ir jungle se não vou trolla', 'to comendo sua mãe.',
    'time lixoso', 'nossa que gank lixo!', 'nossa esse Darius é muito roubado!', 'quem joga de Master Y é cotoco!',
    'aff roubou meu kill.', 'aff esse Blitz não acerta uma, muito ruim.', 'esse jungle é um lixo não da um gank aqui',
    'pediu mid pra fazer isso?', 'para de corre atrás de kill', 'aff ja feedaram o cara', 'Lux vai querer o blue?',
    'bora fazer dragão?', 'na boa reporta a Morgana só trollou', 'aff esse cara é muito cotoco!', 'top', 'midd',
    'adc', 'support', 'vamo foca torre galera', 'kill não ganha jogo time.', 'não é para roubar o red em.',
    'time tóxico', 'essa Vi não sabe ganka, muito ruim', 'faz armog', 'aff compra ward ai', 'vou da tp base',
    'support não compra ward lixo', 'o cara vai mid de Amumu aff', 'aff a net ta ruim', 'esse pc da xuxa ai Sora?']);

const agostinhoCarrara = new Character(20, 'Agostinho Carrara', 'Agostinho', AgostinhoCarraraPathImg, 'Gerar texto com Lineu',
['Bebel presta atenção', 'meu amor nós estamos brigando negócio de dinheiro, dinheiro é coisa material.', 
'fiquem à vontade, a casa é de vocês! É pobre, mas é limpinha.', 'Errar é humano, colocar a culpa em alguém é estratégico.', 
'o Tuco é um vagabundo!', 'ô Lineu será que se pode me arruma uma grana?', 'eu acredito em um amanhã melhor, até porque amanhã é sexta-feira.',
'beiçola se tem que me escutar, isso vai da certo.', 'beiçola vou te paga essa semana pode confiar.', 
'devemos deixar de ser egoístas e começar a pensar em nós mesmos.', 'a dona Nênê é uma Santa!', 'o Paulão que horas meu táxi vai ta pronto?',
'é assim, Maria Isabel, o dinheiro faz muita loucura com a cabeça de uma pessoa normal.', 'espero que esse dia acabe logo',
'Lineu num dia a gente perde, no outro a gente é derrotado', 'Maria Isabel seu irmão é um vagabundo, me desculpe te fala isso.',
'beiçola entre o certo e o errado, eu faço o que eu quero', 'meu amor sou tão bonito que até o espelho me copia.', 'o Lineu se tem que confia em mim',
'feliz é aquele que não é triste', 'Ooha, Lineu, oportunidade não bate duas vezes na mesma porta.', 'temos que nos unir',
'eu to precisando muito desse dinheiro', 'beiçola me vê um pastel de camarão no capricho ta!', 'a senhora é uma segunda mãe pra mim dona Nênê']);

const padreMarcelo = new Character(21, 'Padre Marcelo Rossi', 'P. Marcelo', PadreMarceloPathImg, 'Gerar texto com os animalzinhos', 
['meu pai meu pai meu pai do céu!', 'e os animalzinhos entraram de 2 em 2!', ' ainda se vier noite traiçoeira', 
'mas Deus me quer sorrindo', 'Deus está aqui neste momento!', 'Nossa Senhora me de a mão cuida do meu coração!',
'segura na mão de Deus e vai...', 'não temas', 'segue adiante', 'não olhes para trás',  'erga suas mãos', 'ninguém de ama como eu!',
'meu coração é para Ti Senhor', '´por que tu me deste a vida!', 'minha saúde é para ti Senhor', 'erguei as mãos', 'dai glória a Deus',
'o elefante e os passarinhos como os filhos do Senhor', 'o canguru e o sapinho como os filhos do Senhor', 
'a minhoquinha e os pinguins como os filhos do Senhor', 'dai em glória Deus', 'cantai com os filhos do senhor.']);

const queroCafe = new Character(22, 'Quero CAFÉÉÉÉÉ', 'Quero Café', QueroCafePathImg, 'Quero gerar texto!', 
['querooooooo CAFÉÉÉÉÉÉÉÉÉÉÉ', 'ÉÉÉÉÉÉÉÉÉÉÉÉ', 'CAFÉÉÉÉÉ', 'isso aqui é uma porcaria!', 'porcaria', 'essa porcaria',
'não... merda nenhuma', 'merda nenhuma', 'me desculpe!', 'merda', 'quero CAFÉÉÉ', 'desculpe', 'essa merda',
'uma porcaria', 'não tem', 'ÉÉÉÉÉÉÉÉ', 'CAFÉ', 'desculpe me!', 'que não tem medrd nenhuma', 'quero CAFÉ quero CAFÉ'])

const juarezTekPix = new Character(24, 'Juarez da Tekpix', 'Tekpix', JuarezTekpixPathImg, 'Gerar texto em mp3, mp4...', 
['filmadora mais vendida do Brasil!', 'se não pode perder essa oportunidade em!', 'as primeiras 534 mil pessoas que ligaram ganharam um brinde especial',
'quem ganha um brinde legal?', 'ela filma, grava, tudo em alta qualidade.', 'ela é mp3, mp4, o carro do batman', 'é incrivel', 'a melhor do mercado',
'daremos um desconto para as primeiras 122 mil pessoas que ligaram em.', 'corre por que o estoque ta acabando', 'mas vamos falar de coisa boa né',
'são pequenas parcelinahs ta bom!', 'que tal registar melhor os seus momentos?', 'corre e ligar ja em', 'essa é a última oportunidade',
'tekpix é da tecnomania!', 'ela filma, grava, faz café, e joga buzios', 'vamos falar de coisa boa?', 'tenho uma novidade para vocês', 
'não acredito que você ai não tem filmadora', 'o primeiro boleto é pra daqui 30 dias!', 'estou baixando o preço agora', 
'vai com um presente surpresa.', 'é só ligar 0800 777 7000', 'ligar em 5 minutos', 'essa camara é 7 e 1.'])

const robertoCarlos = new Character(25, 'Roberto Carlos', 'R. Carlos', RobertoCarlosPathImg, 'Gerar o texto com muitas emoçoes', 
['olhando pra você as mesmas emoções eu sinto!', 'e as baleias que navegam no oceano', 'Jesus Cristo, Jesus Cristo eu estou aqui!',
'é bixo são tantas emoções!', 'essa cara sou eu!', 'quem é que pensa em você toda hora?', 'que conta os segundos se você demora?',
'é preciso saber viver', 'saber viver', 'uma pedra no caminho você pode desviar.', 'além do horizonte existe um lugar', 
'como é grande o meu amor por você!', 'Lady Laura, Lady Laura', 'Nossa Senhora me dê a mão', 'cuida do meu coração',
'você meu amigo de fé', 'meu irmão camarada',  'amigo de tantos caminhos e tantas jornada!', 'quando eu estou aqui eu vivo esse momento lindo',
'se chorei ou se sorri o importante e que emoções eu vivi', 'vivo por ela ninguém dúvida?', 'por que ela é tudo na minha vida!', 
'para derramar sobre o vermelho derramado', 'meus netos iram te perguntar em poucos anos sobre as baleians que navegam no oceano!'])

const players = [padreMarcelo, queroCafe, juarezTekPix, robertoCarlos, faustoSilva, chefJacquin, craqueNeto, agostinhoCarrara, 
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