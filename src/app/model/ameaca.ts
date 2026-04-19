export interface Ameaca {
  id: number;
  nd: number;
  nome: string;
  grupo?: string;
  papel?: string;
  tipo?: string;
  tamanho?: string;
  equipamentos?: string;
  tesouros?: string;
  reforcos?: string; //
  se_parceiro?: boolean;
  se_familiar?: boolean;
  referencia?: string;
  imagem?: string;
  iniciativa?: number;
  percepcao?: number;
  sentidos?: string[];
  defesa?: number;
  fortitude?: number;
  reflexos?: number;
  vontade?: number;
  vida?: number;
  mana?: number;
  deslocamento_terrestre?: number;
  deslocamento_natacao?: number;
  deslocamento_escalada?: number;
  deslocamento_voo?: number;
  deslocamento_escavacao?: number;
  atributo_forca?: number;
  atributo_destreza?: number;
  atributo_constituicao?: number;
  atributo_inteligencia?: number;
  atributo_sabedoria?: number;
  atributo_carisma?: number;
  ataques_corpo?: {
    numero_ataques?: number;
    tipo?: string;
    nome?: string;
    acerto?: number;
    dado_dano?: string;
    dano?: string;
    tipo_dano?: string;
    alcance?: number;
    conecta_habilidade?: string;
  }[];
  ataques_distancia?: {
    numero_ataques?: number;
    tipo?: string;
    nome?: string;
    acerto?: number;
    dado_dano?: string;
    dano?: string;
    tipo_dano?: string;
    alcance?: number;
    conecta_habilidade?: string;
  }[];
  ataques_especial?: {
    numero_ataques?: number;
    tipo?: string;
    nome?: string;
    acerto?: number;
    dado_dano?: string;
    dano?: string;
    tipo_dano?: string;
    alcance?: number;
    conecta_habilidade?: string;
  }[];

  habilidades?: {
    nome?: string;
    descricao: string;
  }[];

  pericias?: {
    nome?: string;
    valor: number;
  }[];
}
