import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AlvoMagia } from '@app/enum/alvo.magia.enum';
import { TipoAlquimico } from '@app/enum/tipo.alquimico.enum';
import { Magia } from '@app/model/magia'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CirculoMagia } from '@app/enum/circulo.magia.enum'; 
import { TipoMagia } from '@app/enum/tipo.magia.enum'; 
import { EscolasMagia } from '@app/enum/escolas.magia.enum'; 
import { Resistencia } from '@app/enum/resistencia.enum'; 
import { AlcanceMagia } from '@app/enum/alcance.magia.enum'; 
import { ExecucaoMagia } from '@app/enum/execucao.magia.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MagiaSB } from '@app/model/supamodel/magia.sb';
import { MagiaDao } from '@app/dao/magia.dao';
import { DuracaoMagia } from '@app/enum/duracao.magia.enum';
import { ResistenciaMagia } from '@app/enum/resistencia.magia.enum';
import { ReferenciaDao } from '@app/dao/referencia.dao';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ReferenciaItemSB } from '@app/model/supamodel/referencia.item.sb';

@Component({
  selector: 'app-magias',
  imports: [
    MatCardModule,
    MatGridListModule,
    NgIf, NgFor,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule, MatPaginatorModule,
    MatFormFieldModule,
  ],
  templateUrl: './magias.component.html',
  styleUrl: './magias.component.scss',
})
export class MagiasComponent implements AfterViewInit {

  private _snackBar = inject(MatSnackBar);
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 5000});
  }

  displayedColumns: string[] = ['nome', 
    'tipo', 'escola', 'circulo', 
    'acao'];

  form!: FormGroup;
  numero_registros!: number;
  tipos = Object.values(TipoMagia);
  escolas = Object.values(EscolasMagia);
  circulos = Object.values(CirculoMagia);
  resistencias = Object.values(Resistencia);
  metodos = Object.values(ResistenciaMagia);
  alcances = Object.values(AlcanceMagia);
  execucoes = Object.values(ExecucaoMagia);
  duracoes = Object.values(DuracaoMagia);
  referenciaItem?: ReferenciaItemSB;
  referencias: any[] = [];
  
  objetos?: MagiaSB[] = [];
  aprimoramentos?: MagiaSB[] = [];
  objeto?: MagiaSB;

  dataSource = new MatTableDataSource<MagiaSB>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  edicao: boolean = false;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private readonly serviceSb: MagiaDao,
    private readonly referenciaServiceSB: ReferenciaDao,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.form = this.fb.group({

      nome_consulta: [],
      tipo_consulta: [],
      escola_consulta: [],
      circulo_consulta: [],
      pericia_resistencia_consulta: [],
      alcance_consulta: [],
      execucao_consulta: [],

      id: [],
      id_pai: [],
      id_referencia: [],
      nome: [],
      descricao: [],
      escola: [],
      tipo: [],
      circulo: [],
      custo_pm: [],
      custo_pm_permanente: [],
      custo_material: [],
      restricao: [],
      execucao: [],
      alcance: [],
      alvo: [],
      duracao: [],
      area: [],
      pericia_resistencia: [],
      metodo_resistencia: [],
      efeito: [],
      e_aumenta: [],
      e_truque: [],
      paginas: [],

    });

    if (typeof window !== 'undefined' && sessionStorage) {
      const logado = sessionStorage.getItem('logado') || '';
  
      if (logado) {
        this.edicao = true;
        const login = sessionStorage.getItem('login') || '';
        console.log('Usuário logado:', login);
      } else {
        console.log('Usuário não está logado');
      }
    }

    this.consultar();
    this.carregarTabelasDominio();
  }

  async carregarTabelasDominio(){
    try {
      this.referencias = await this.referenciaServiceSB.listar();
    } catch (err) {
      console.error('Erro ao carregar domínio', err);
    }
  }

  async consultar() {
    // console.log(this.form.value);
    // let filtro = this.form.value;
    // if (filtro.nome) {
    //   filtro.nome = '^' + filtro.nome;
    // }

    this.serviceSb.listarItens().subscribe({
      next: response => {
        this.objetos = response;
        this.numero_registros = response.length;
        this.objetos?.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.dataSource = new MatTableDataSource(this.objetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.objetos);
      },
      error: err => {
        console.error('Erro ao buscar itens:', err);
      }
    });    
  }

  async consultarItemPorNome(nome: string) {
    try {
      this.objeto = await this.serviceSb.consultarPorNome(nome);
      this.cdr.detectChanges();
    } catch (err) {
      console.error('Erro ao carregar magia', err);
    }
  }

  calculaTudo(objeto: MagiaSB) {
    // objeto.custo_total = 0;
    // objeto.custo_material_total = 0;
    // objeto.aprimoramentos?.forEach(aprimoramento => {
    //   aprimoramento.checkado = false;
    // })

    // this.calculaPreco(objeto);
  }

  calculoCusto(objeto: Magia): number {
    let material = objeto.custo_material_total? objeto.custo_material_total : 0;
    let custo = objeto.custo_total ? (objeto.custo_total-material) / 3 : 0;
    custo += material;
    return  Math.floor(custo);
  }

  calculaPreco(objeto: Magia) {
    let preco = 0;
    let custo_material = 0;

    preco += objeto.custo? objeto.custo: 0;
    custo_material += objeto.custo_material ? objeto.custo_material : 0;

    objeto.aprimoramentos?.forEach((aprimoramento) => {
      let custo = aprimoramento.custo? aprimoramento.custo: 0;
      if (aprimoramento.checkado) {
        preco += custo;
        custo_material += aprimoramento.custo_material
          ? aprimoramento.custo_material
          : 0;
      } else if (aprimoramento.e_aumenta) {
        preco += aprimoramento.aumenta
          ? aprimoramento.aumenta * custo
          : 0;
          custo_material += aprimoramento.custo_material
          ? aprimoramento.aumenta? aprimoramento.aumenta * aprimoramento.custo_material : 0
          : 0;
      }
    });

    objeto.total_pm = preco;
    objeto.custo_total = preco ? (preco ** 2) * 30 : 0;
    objeto.custo_material_total = custo_material;
    objeto.custo_total += custo_material;
  }

  calculaCD(objeto: Magia): number {
    return objeto.total_pm ? objeto.total_pm + 20 : 0;
  }

  calculaCDEngenhoqueiro(objeto: Magia): number {
    return objeto.custo ? objeto.custo + 20 : 0;
  }

  calculaPMEngenhoqueiro(objeto: Magia) :number {
      let tipo: string = '';
  
      switch (objeto.circulo) {
        case CirculoMagia.PRIMEIRO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 1 : 0 ;
        }
        case CirculoMagia.SEGUNDO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 3 : 0 ;
        }
        case CirculoMagia.TERCEIRO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 6 : 0 ;
        }
        case CirculoMagia.QUARTO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 10 : 0 ;
        }
        case CirculoMagia.QUINTO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 15 : 0 ;
        }
        default: {
          return 0;
        }
      }
  }

  descobreTipoAlquimico(objeto: Magia): string {
    let tipo: string = '';

    switch (objeto.alvo) {
      case AlvoMagia.CRIATURA: {
        return TipoAlquimico.POCAO;
      }
      case AlvoMagia.OBJETO: {
        return TipoAlquimico.OLEO;
      }
      case AlvoMagia.AREA: {
        return TipoAlquimico.GRANADA;
      }
      default: {
        return 'INTERPRETATIVO';
      }
    }
  }

  aumentaAprimoramento(aprimoramento: any, objeto: Magia): Magia {
    objeto.aprimoramentos?.forEach((indice) => {
      if (indice.id === aprimoramento.id) {
        aprimoramento.aumenta += 1;
        this.calculaPreco(objeto);
      }
    });
    return objeto;
  }

  diminuiAprimoramento(aprimoramento: any, objeto: Magia): Magia {
    objeto.aprimoramentos?.forEach((indice) => {
      if (aprimoramento.aumenta !== 0 && indice.id === aprimoramento.id) {
        aprimoramento.aumenta -= 1;
        this.calculaPreco(objeto);
      }
    });
    return objeto;
  }

  seFazPocao(objeto:Magia): boolean {
    return objeto.alvo == AlvoMagia.CRIATURA || objeto.alvo == AlvoMagia.OBJETO || objeto.alvo == TipoAlquimico.GRANADA;
  }

  calculaCheck(aprimoramento: any, objeto: Magia) : boolean {
    aprimoramento.checkado = !aprimoramento.checkado;
    this.calculaPreco(objeto);
    return aprimoramento.checkado;
  }

  checkaAumenta(objeto: MagiaSB){
    objeto!.e_aumenta = !objeto.e_aumenta;
    return objeto!.e_aumenta;
  }

  checkaTruque (objeto: MagiaSB){
    objeto!.e_truque = !objeto.e_truque;
    return objeto!.e_truque;
  }

  limparFiltros() {
    this.form.reset();
    this.consultar();
    this.openSnackBar('Testando','');
  }

  limparSelecao() {
    const tela = this.form.get('tela')?.value;
    this.form.reset();
    this.form.get('tela')?.setValue(tela);
    this.objeto = undefined;
  }

  selecionaMagia(objeto: Magia){
    this.limparSelecao();

    this.serviceSb.consultarPorId(objeto.id!).subscribe({
      next: response => {
        this.objeto = response[0];
        this.objeto!.duracoes_concatenadas = this.objeto?.duracao?.split(', ')!;
        this.form.get('id')?.setValue(this.objeto?.id);
        this.form.get('nome')?.setValue(this.objeto?.nome);
        this.form.get('tipo')?.setValue(this.objeto?.tipo);
        this.form.get('escola')?.setValue(this.objeto?.escola);
        this.form.get('circulo')?.setValue(this.objeto?.circulo);
        this.form.get('execucao')?.setValue(this.objeto?.execucao);
        this.form.get('alcance')?.setValue(this.objeto?.alcance);
        this.form.get('efeito')?.setValue(this.objeto?.efeito);
        this.form.get('area')?.setValue(this.objeto?.area);
        this.form.get('pericia_resistencia')?.setValue(this.objeto?.pericia_resistencia);
        this.form.get('metodo_resistencia')?.setValue(this.objeto?.metodo_resistencia);
        this.form.get('descricao')?.setValue(this.objeto?.descricao);
        this.form.get('custo_pm')?.setValue(this.objeto?.custo_pm);
        this.form.get('custo_pm_permanente')?.setValue(this.objeto?.custo_pm_permanente);
        this.form.get('custo_material')?.setValue(this.objeto?.custo_material);
        this.form.get('id_referencia')?.setValue(this.objeto?.id_referencia);
        this.form.get('paginas')?.setValue(this.objeto?.paginas);
        this.form.get('e_aumenta')?.setValue(this.objeto?.e_aumenta);
        this.form.get('e_truque')?.setValue(this.objeto?.e_truque);
        this.form.get('restricao')?.setValue(this.objeto?.restricao);
        console.log(this.objeto);

      },
      error: err => {
        console.error('Erro ao buscar itens:', err);
      },

      complete: async () => {
        
        this.referenciaItem = await this.referenciaServiceSB.consultarPorId(
          this.objeto?.id_referencia!
        );
        this.cdr.detectChanges();

      }
    });
  }

  adicionarDuracao(concatenada: any) {
    const duracaoParaAdicionar = this.objeto!.duracoes_concatenadas!.find((r) => r === concatenada.value);
    if (!this.objeto!.duracoes_concatenadas!.find((dc) => dc === duracaoParaAdicionar)) {
      this.objeto!.duracoes_concatenadas!.push(concatenada.value);
    }
    this.form.get('duracao')?.setValue(null);
  }

  novo() {
    this.objeto = {
      duracoes_concatenadas: [],
    } as MagiaSB;
  }

  removerDuracao(concatenada: any) {
    this.objeto!.duracoes_concatenadas! = this.objeto!.duracoes_concatenadas!.filter(
      (dc) => dc !== concatenada
    );
  }

  async salvar() {

    let id = this.form.get('id')?.value;

    const c = this.form.get('circulo')?.value;
    // const pm = (c * (c + 1)) / 2;

    this.objeto = {
      nome: this.form.get('nome')?.value,
      tipo: this.form.get('tipo')?.value,
      escola: this.form.get('escola')?.value,
      circulo: this.form.get('circulo')?.value,
      custo_pm: this.form.get('custo_pm')?.value,
      custo_pm_permanente: this.form.get('custo_pm_permanente')?.value,
      custo_material: this.form.get('custo_material')?.value,
      execucao: this.form.get('execucao')?.value, 
      alcance: this.form.get('alcance')?.value,
      duracao: this.objeto?.duracoes_concatenadas?.join(', '),
      efeito: this.form.get('efeito')?.value,
      area: this.form.get('area')?.value,
      pericia_resistencia: this.form.get('pericia_resistencia')?.value,
      metodo_resistencia: this.form.get('metodo_resistencia')?.value,
      descricao: this.form.get('descricao')?.value,
      id_referencia: this.form.get('id_referencia')?.value,
      paginas: this.form.get('paginas')?.value,
      restricao: this.form.get('restricao')?.value,
    };

    try {
      let resultado = null;
      if (id) {
        resultado = await this.serviceSb.atualizar(id, this.objeto);
        this.openSnackBar('Registro atualizado com sucesso.', '');
      } else {
        resultado = await this.serviceSb.inserir(this.objeto);
        this.openSnackBar('Registro inserido com sucesso.', '');
      }
      console.log('Retorno do Supabase:', resultado);
    } catch (err) {
      console.error('Erro ao inserir:', err);
    }

    this.limparSelecao();
  }

  adicionarAprimoramento() {
    let count = this.aprimoramentos!.length+1
    this.aprimoramentos?.push({
      id_count: count,
      duracoes_concatenadas: [],
    });
  }

  deletarAprimoramento(id_count: number) {
    this.aprimoramentos = this.aprimoramentos?.filter(item => item.id_count !== id_count);
  }
}
