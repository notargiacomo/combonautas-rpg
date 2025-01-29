export enum PalavraChave {

    // TIPO DE ITEM
    ARMA = 'ARMA',
    ARMADURA = 'ARMADURA',
    MUNIÇÃO = 'MUNIÇÃO',
    EQUIPAMENTO_AVENTURA = 'EQUIPAMENTO_AVENTURA',
    FERRAMENTA = 'FERRAMENTA',
    VESTUARIO = 'VESTUÁRIO',
    ESOTERICO = 'EXOTÉRICO',
    ALQUÍMICO = 'ALQUÍMICO',
        PREPARADO = 'PREPARADO',
        CATALIZADOR = 'CATALIZADOR',
        VENENO = 'VENENO',
    ALIMENTACAO = 'ALIMENTAÇÃO',
    ANIMAL = 'ANIMAL',
    VEICULO = 'VEÍCULO',
    SERVICO = 'SERVIÇOS',
    MELHORIA = 'MELHORIA',
    MATERIAL_ESPECIAL = 'MATERIA ESPECIAL',
    RIQUEZA = 'RIQUEZA',
    ENCANTO = 'ENCANTAMENTO',
    POCAO_MAGICA = 'POÇÃO MAGICA',
    ACESSORIO_MAGICO = 'ACESSÓRIO MÁGICO',
    ARTEFATO = 'ARTEFATO',

    // LIMITE DE USO
    EMPUNHADO = 'EMPUNHADO',
    VESTIDO  = 'VESTIDO',

    // PROPÓSITO DA ARMA
    ATAQUE_CORPO_A_CORPO = 'ATAQUE CORPO A CORPO',
    ATAQUE_A_DISTANCIA = 'ATAQUE À DISTÂNCIA',
        DISPARO = 'DISPARO',
        ARREMESSO = 'ARREMESSO',

    // EMPUNHADURA DA ARMA
    ARMA_LEVE = 'ARMA LEVE',
    ARMA_UMA_MAO = 'ARMA UMA MÃO',
    ARMA_DUAS_MÃOS = 'ARMA DUAS MÃOS',
    EMPUNHADURA_MONTADA = 'EMPUNHADURA MONTADA',

    // PROFICIÊNCIA DE ARMA
    ARMA_SIMPLES = 'ARMA SIMPLES',
    ARMA_MARCIAL = 'ARMA MARCIAL',
    ARMA_EXOTICA = 'ARMA EXÓTICA',
    ARMA_DE_FOGO = 'ARMA DE FOGO',

    // MODIFICADORES DE ATAQUE E DANO
    ATAQUE_DESTREZA = 'ATAQUE DESTREZA',
    APLICA_FORCA_DANO = 'APLICA FORÇA DANO',
    CORPO_A_CORPO_MENOS_CINCO = 'CORPO A CORPO -5',
    INVESTIDA_MONTADA_DOIS_D_OITO_DANO = 'INVESTIDA MONTADA +2D8 DANO',
    ATAQUE_ENREDAR = 'ATAQUE ENREDAR',
    NAO_LETAL = 'NÃO-LETAL',

    // OUTROS
    NAO_REDUZ_DESLOCAMENTO = 'NÃO REDUZ DESLOCAMENTO',
    NAO_CONTA_COMO_VESTIDO = 'NÃO CONTA COMO VESTIDO',
    CONTAINER = 'CONTAINER',
    SACAR_ACAO_LIVRE = 'SACAR COM AÇÃO LIVRE',

    // RECARGA
    RECARREGA_ACAO_LIVRE = 'RECARREGA AÇÃO LIVRE',
    RECARREGA_ACAO_MOVIMENTO = 'RECARREGA AÇÃO MOVIMENTO',
    RECARREGA_ACAO_PADRÃO = 'RECARREGA AÇÃO PADRÃO',

    // HABILIDADE DE ARMAS
    ADAPTAVEL = 'ADAPTÁVEL',
    AGIL = 'ÁGIL',
    ALONGADA = 'ALONGADA',
    DESBALANCEADA = 'DESBALANCEADA',
    DUPLA = 'DUPLA',
    HIBRIDA = 'HÍBRIDA',
    VERSATIL = 'VERSÁTIL',
        AGARRAR = 'AGARRAR',
        DERRUBAR = 'DERRUBAR',
        DESARMAR = 'DESARMAR',

    // MUNIÇÕES, ALQUÍMICOS, CATALIZADORES E ALIMENTAÇÃO
    CONSUMIVEL = 'CONSUMÍVEL',
    MUNICAO_FLECHA = 'MUNIÇÃO FLECHA',
    MUNICAO_VIROTE = 'MUNIÇÃO VIROTE',
    MUNICAO_PEDRA_POLIDA = 'MUNIÇÃO PEDRA',
    MUNICAO_PEDRA_COMUM_REDUZ_UM_PASSO = 'MUNIÇÃO PEDRA COMUM REDUZ PASSO',
    MUNICAO_BALA = 'MUNIÇÃO BALA',
    MUNICAO_DUAS_BALA = 'MUNIÇÃO 2 BALA',
    MUNICAO_DARDO = 'MUNIÇÃO DARDO',
    BOLSA_VINTE_BALOS = 'BOLSA 20 BALAS',
    ALJAVA_VINTE_FLECHAS = 'ALJAVA 20 FLECHAS',
    ALJAVA_VINTE_VIROTES = 'ALJAVA 20 VIROTES',
    SACO_VINTE_PEDRAS = 'SACO 20 PEDRAS',
    PACOTE_VINTE_DARDOS = 'PACOTE 20 DARDOS',

    // PROFICIÊNCIA DE ARMADURA
    ARMADURA_LEVE = 'ARMADURA LEVE',
    ARMADURA_PESADA = 'ARMADURA PESADA',
    ESCUDO = 'ESCUDO',

    // FERRAMENTA
    INSTRUMENTO_MUSICAL = 'INSTRUMENTO MUSICAL',
    FERRAMENTA_PERICIA_EXIGIDA = 'FERRAMENTA EXIGIDA PERÍCIA',
    FERRAMENTA_ACAO_EXIGIDA = 'FERRAMENTA EXIGIDA AÇÃO',
    FERRAMENTA_ATRIBUTO_EXIGIDA = 'FERRAMENTA EXIGIDA ATRIBUTO',

    // PERÍCIAS
    ACROBACIA = 'ACROBACIA',
    ADESTRAMENTO = 'ADESTRAMENTO',
    ATLETISMO = 'ATLETISMO',
    ATUACAO = 'ATUAÇÃO',
    CAVALGAR = 'CAVALGAR',
    CONHECIMENTO = 'CONHECIMENTO',
    CURA = 'CURA',
    DIPLOMACIA = 'DIPLOMACIA',
    ENGANACAO = 'ENGANAÇÃO',
    FORTITUDE = 'FORTITUDE',
    FURTIVIDADE = 'FURTIVIDADE',
    GUERRA = 'GUERRA',
    INICIATIVA = 'INICIATIVA',
    INTIMIDACAO = 'INTIMIDAÇÃO',
    INTUICAO = 'INTUIÇÃO',
    INVESTIGACAO = 'INVESTIGAÇÃO',
    JOGATINA = 'JOGATINA',
    LADINAGEM = 'LADINAGEM',
    LUTA = 'LUTA',
    MISTICISMO = 'MISTICISMO',
    NOBREZA = 'MISTICISMO',
    OFICIO = 'OFICIO',
    PERCEPCAO = 'PERCEPÇÃO',
    PILOTAGEM = 'PILOTAGEM',
    PONTARIA = 'PONTARIA',
    REFLEXOS = 'REFLEXOS', 
    RELIGIAO = 'RELIGIÃO',
    SOBREVIVENCIA = 'SOBREVIVÊNCIA',
    VONTADE = 'VONTADE',

    // ATRIBUTOS
    FORCA = 'FORÇA',
    DESTREZA = 'DESTREZA',
    CONSTITUICAO = 'CONSTITUIÇÃO',
    INTELIGENCIA = 'INTELIGÊNCIA',
    SABEDORIA = 'SABEDORIA',
    CARISMA = 'CARISMA',

    // AÇÕES
    AMORTECER_QUEDA = 'AMORTECER QUEDA',
    EQUILIBRIO = 'EQUILÍBRIO',
    ESCAPAR = 'ESCAPAR',
    ACALMAR_ANIMAL = 'ACALMAR ANIMAL',
    MANEJAR_ANIMAL = 'MANEJAR ANIMAL',
    CORRIDA = 'CORRIDA',
    ESCALAR = 'ESCALAR',
    SALTAR = 'SALTAR',
    CONDUZIR = 'CONDUZIR',
    GALOPAR = 'GALOPAR',
    MONTAR_RAPIDAMENTE = 'MONTAR RAPIDAMENTE',
    IDIOMAS = 'IDIOMAS',
    INFORMACAO = 'INFORMAÇÃO',
    CUIDADOS_PROLONGADOS = 'CUIDADOS PROLONGADOS',
    NECROPSIA = 'NECROPSIA',
    PRIMEIROS_SOCORROS = 'PRIMEIROS SOCORROS',
    TRATAMENTO = 'TRATAMENTO',
    BARGANHA = 'BARGANHA',
    MUDAR_ATITUDE = 'MUDAR ATITUDE',
    PERSUASAO = 'PERSUASÃO',
    DISFARCE = 'DISFARCE',
    FALSIFICACAO = 'FALSIFICAÇÃO',
    FINTAR = 'FINTAR',
    INSINUACAO = 'INSINUAÇÃO',
    INTRIGA = 'INTRIGA',
    MENNTIR = 'MENTIR',
    ESCONDER_SE = 'ESCONDER-SE',
    SEGUIR = 'SEGUIR',
    ANALISAR_TERRENO = 'ANALISAR TERRENO',
    PLANO_ACAO = 'PLANO DE AÇÃO',
    ASSUSTAR = 'ASSUSTAR',
    COAGIR = 'COAGIR',
    PERCEBER_MENTIRA = 'PERCEBER MENTIRA',
    PRESSENTIMENTO = 'PRESSENTIMENTO',
    INTERROGAR = 'INTERROGAR',
    PROCURAR = 'PROCURAR',
    APOSTAR = 'APOSTAR',
    ABRIR_FECHADURA = 'ABRIR FECHADURA',
    OCULTAR = 'OCULTAR',
    PUNGA = 'PUNGA',
    SABOTAR = 'SABOTAR',
    DETECTAR_MAGIA = 'DETECTAR MAGIA',
    IDENTIFICAR_CRIATURA = 'IDENTIFICAR CRIATURA',
    IDENTIFICAR_ITEM_MAGICO = 'IDENTIFICAR ITEM MÁGICO',
    IDENTIFICAR_MAGIA = 'IDENTIFICAR MAGIA',
    LANCAR_MAGIA_ARMADURA = 'LANÇAR MAGIA DE ARMADURA',
    ETIQUETA = 'ETIQUETA',
    CONSERTAR = 'CONSERTAR',
    FABRICAR = 'FABRICAR',
    IDENTIFICAR = 'IDENTIFICAR',
    SUSTENTO = 'SUSTENTO',
    OBSERVAR = 'OOBSERVAR',
    OUVIR = 'OUVIR',
    RITO = 'RITO',
    ACAMPAMENTO = 'ACAMPAMENTO',
    ORIENTAR_SE = 'ORIENTAR-SE',
    RASTREAR = 'RASTREAR',

    // MÉTODO DE INOCULAÇÃO DE VENENO
    CONTATO = 'CONTATO',
    INALACAO = 'INALAÇÃO',
    INGESTAO = 'INGESTÃO',

    // SERVIÇOS
    ESTADIA = 'ESTADIA',
    CONDUCAO = 'CONDUÇÃO',

    // DESLOCAMENTO
    TERRESTRE = 'TERRESTRE',
    ESCALADA = 'ESCALADA',
    VOO = 'VOO',
    NATACAO = 'NATAÇÃO',
    ESCAVACAO = 'ESCAVAÇÃO',

    // VARIANTES DE TERRENO
    COBERTURA_LEVE = 'COBERTURA LEVE',
    COBERTURA_TOTAL = 'COBERTURA TOTAL',
    CAMUFLAGEM_LEVE = 'CAMUFLAGEM LEVE',
    CAMUFLAGEM_TOTAL = 'CAMUFLAGEM TOTAL',

    // ALIMENTAÇÃO
    PRATO_ESPECIAL = 'PRATO ESPECIAL',

    // ALCANCE
    ALCANCE_TRES_METROS = 'ALCANCE 3M',
    ALCANCE_QUATRO_MEIO_METROS = 'ALCANCE 4.5M',
    ALCANCE_CURTO = 'ALCANCE CURTO',
    ALCANCE_MEDIO = 'ALCANCE MÉDIO',

    // AREA
    AREA_CONE_SEIS_METROS = 'ÁREA CONE 6M',
    AREA_CONE_NOVE_METROS = 'ÁREA CONE 9M',

    MAGIA = 'MAGIA',
    
    // ESCOLAS DE MAGIA
    ABJURACAO = 'Abjuração',
    ADVINHACAO = 'Adivinhação',
    CONVOCACAO = 'Convocação',
    ENCANTAMENTO = 'Encantamento',
    EVOCACAO = 'Evocação',
    ILUSAO = 'Ilusão',
    NECROMANCIA = 'Necromancia',
    TRANSMUTACAO = 'Transmutação',

    // TIPOS DE MAGIA
    ARCANA = 'Arcana',
    DIVINA = 'Divina',
    UNIVERSAL = 'Universal',

    // CIRCULO MAGIA
    PRIMEIRO_CIRCULO = '1º Círculo',
    SEGUNDO_CIRCULO = '2º Círculo',
    TERCEIRO_CIRCULO = '3º Círculo',
    QUARTO_CIRCULO = '4º Círculo',
    QUINTO_CIRCULO = '5º Círculo',

    // DURAÇÃO MAGIA
    INSTANTANEA = 'Instantânea',
    CENA = 'Cena',
    SUSTENTADA = 'Sustentada',
    PERMANENTE = 'Permanente',

    // APRIMORAMENTOS DE MAGIA
    TRUQUE = 'Truque',
    AUMENTA = 'Aumenta',
    COMPONENTE_MATERIAL = 'Componente Material',
    DISCRETA = 'Discreta',

    // CONDIÇÕES
    PARALISADO = 'Paralisado',

    // PARCEIRO
    INICIANTE = 'Iniciante',
    VETERANO  = 'Veterano',
    MESTRE = 'Mestre', 

}