import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RacaService } from '../../service/raca.service';
import { Raca } from '../../model/raca';
import { OrigemService } from '../../service/origem.service';
import { Origem } from '../../model/origem';
import { ClasseService } from '../../service/classe.service';
import { Classe } from '../../model/classe';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-personagem-aleatorio',
  imports: [MatDividerModule, MatCardModule, MatButtonModule, MatExpansionModule, MatDatepickerModule, MatTabsModule,
      NgIf],
  templateUrl: './personagem-aleatorio.component.html',
  styleUrl: './personagem-aleatorio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonagemAleatorioComponent implements OnInit{

  readonly panelOpenState = signal(false);
  racaIndex!: number;
  origemIndex!: number;
  classeIndex!: number;

  racas!: Raca[];
  origens!: Origem[];
  classes!: Classe[];
  personagem_nimb!: string;

  constructor(private readonly racaService: RacaService, 
              private readonly origemService: OrigemService,
              private readonly classeService: ClasseService
  ) {}

  ngOnInit() {
    this.carregaRacas();
    this.carregaOrigens();
    this.carregaClasses();
  }

  rezarPraNimb(){
    this.racaIndex = Math.floor(Math.random() * this.racas.length);
    this.origemIndex = Math.floor(Math.random() * this.origens.length);
    this.classeIndex = Math.floor(Math.random() * this.classes.length);
    this.personagem_nimb = this.racas[this.racaIndex].nome+' - '+this.origens[this.origemIndex].nome+' - ' +this.classes[this.classeIndex].nome;
  }

  carregaRacas() {
    // this.raca = ['Anão', 'Anão Adepto da Pólvora',  'Bugbear',  'Centauro',  'Ceratops', 'Dahllan', 'Dahllan Artesã Natural', 'Duende', 'Eiradaan',  'Elfo do Mar',  'Elfo', 'Finntroll',  'Galokk', 'Gnoll', 'Goblin', 'Golem', 'Harpia', 'Hobgoblin', 'Humano', 'Hynne', 'Kaijin', 'Kallyanach', 'Kappa', 'Kliren',   'Kobold', 'Lefou', 'Mashin', 'Medusa', 'Meio Elfo', 'Meio Orc' ,'Minauro', 'Minotauro', 'Moreau Bufalo', 'Moreau Coruja', 'Moreau Crocodilo', 'Moreau Hiena', 'Moreau Leão', 'Moreau Lobo', 'Moreau Morcego', 'Moreau Raposa', 'Moreau Serpente', 'Moreau Urso', 'Nagah Fêmea', 'Nagah Macho', 'Nezumi', 'Ogro', 'Orc', 'Osteon', 'Pteros', 'Qareen', 'Qareen Amigo da Magia', 'Sátiro', 'Sereia/Tritão', 'Sílfide', 'Soterrado', 'Suraggel Aggelus', 'Suraggel Sulfure','Tabrachi', 'Tengu', 'Trog Anao', 'Trog', 'Velocis', 'Voracis', 'Yidishan']
    this.racaService.listar(null).subscribe({
      next: (response) => {
        this.racas = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  
  carregaClasses() {
    // this.classe = ['Arcanista', 'Bárbaro', 'Bardo', 'Bucaneiro', 'Caçador', 'Cavaleiro', 'Clérigo', 'Druida', 'Guerreiro', 'Inventor', 'Ladino', 'Lutador', 'Mirragem', 'Místico', 'Nobre', 'Paladino', 'Samurai']
    this.classeService.listar(null).subscribe({
      next: (response) => {
        this.classes = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  
  carregaOrigens() {
    // this.origem = ['Acólito', 'Amigo dos Animais', 'Amnésico', 'Aristocrata', 'Artesão', 'Artista', 'Assistente de laboratório', 'Batedor', 'Capanga', 'Confissão', 'Charlatão', 'Circense', 'Criminoso', 'Curandeiro', 'Eremita', 'Escravo', 'Estudioso', 'Fazendeiro', 'Forasteiro', 'Gladiador', 'Guarda', 'Herdeiro', 'Herói camponês', 'Marujo', 'Mateiro', 'Membro de guilda', 'Mercador', 'Minerador', 'Nômade', 'Pivete', 'Refugiado', 'Seguidor', 'Selvagem', 'Soldado', 'Taverneiro', 'Trabalhador', 'Esforçado', 'Agricultor Sambur (Sambúrdia)', 'Amazona de Hippion (Deheon, Namalkah)', 'Amoque Púrpura (Ermos Púrpuras)', 'Anão de Armas (Doherimm)', 'Andarilho Ubaneri (Ubani)', 'Aprendiz de Dragoeiro (Sckharshantallas)', 'Aprendiz de Drogadora (Galrasia)', 'Aristocrata Dai’zenshi (Tamu-ra)', 'Armeiro Armado (Zakharov)', 'Aspirante a herói (Deheon)', 'Assistente Forense (Salistick)', 'Bandoleiro da Fortaleza (Khalifor)', 'Barão Arruinado (Trebuck)', 'Catador da Cidade Velha (Nova Malpetrim)', 'Cativo das Fadas (Pondsmânia)', 'Competidor do Circuito (Trebuck)', 'Cosmopolita (Valkaria)', 'Cria da Favela (Valkaria)', 'Cria das Estradas', 'Criado pelas Voracis (Galrasia)', 'De Outro Mundo (Éter Divino)', 'Descendente Colleniano (Ahlen)', 'Desertor da Supremacia (Supremacia)', 'Duplo Feérico (Pondsmânia)', 'Duyshidakk Infiltrado (Tyrondir)', 'Emissário Ubaneri (Ubani)', 'Escudeiro da Luz (Bielefeld)', 'Escudeiro Solitário (Bielefeld)', 'Estandarte Vivo (Ermos Púrpuras)', 'Estudante da Academia (Academia Arcana)', 'Estudante do Colégio Real (Salistick)', 'Explorador de Ruínas (Tyrondir)', 'Filhote da Revoada (Lamnor)', 'Futura Lenda (Nova Malpetrim)', 'Ginete de Tumarkhân (Khubar)', 'Grumete Pirata (Três Mares)', 'Guardião Glacial (Uivantes)', 'Iniciado dos Caça-Monstros (Sanguinárias)', 'Insurgente Tapistano (Império de Tauron)', 'Irmão sem Esporas (Namalkah)', 'Legionário (Império de Tauron)', 'Lenhador de Tollon (Tollon)', 'Liricista de Lenórienn (Lamnor)', 'Membro do Principado (Sambúrdia)', 'Pescador Parrudo (Khubar)', 'Nitamuriano (Valkaria)', 'Nobre Zakharoviano (Zakharov)', 'Nômade Sar-Allan (Halak-Tûr)', 'Plebeu Arcano (Wynlla)', 'Prisioneiro das Catacumbas (Leverick)', 'Procurado: Vivo ou Morto (Smokestone)', 'Profeta do Akzath (Lamnor)', 'Querido Filho (Aslothia)', 'Rebelde Agitador (Sckharshantallas)', 'Receptador das Nuvens (Vectora)', 'Recruta Arcano (Wynlla)', 'Recruta da Fênix (Triunphus)', 'Sábio Matemático (Halak-Tûr)', 'Selvagem Sanguinário (Sanguinárias)', 'Sucateiro de Batalhas (Conflagração do Aço)', 'Tamalu (Khubar)', 'Tocado pela Dama Altiva (Moreania)', 'Tocado pelo Indomável (Moreania)', 'Tradicionalista Svalano (Svalas)', 'Trapaceiro Ahleniense (Ahlen)', 'Turista da Academia (Academia Arcana)', 'Um com os Kami (Tamu-ra)','Caçador de Monstros', 'Discípulo de um Campeão', 'Nativo de Midgard', 'Retornado de Helheim', 'Sobrevivente da Névoa', 'Súdito dos Aesir', 'Súplica aos Aesir'];
    this.origemService.listar(null).subscribe({
      next: (response) => {
        this.origens = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}


