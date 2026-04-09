type Mapeamento = (dados: any) => any;

export const AmeacaMapa: Record<string, Mapeamento> = {
  menace_name: d => d.nome,
  menace_nd: d => d.nd,
  menace_type_size: d => `${d.tamanho}, ${d.tipo} (${d.papel})`,
  menace_init: d => d.iniciativa,
  menace_percep: d => d.percepcao,
  menace_defense: d => d.defesa,
  menace_fortitude: d => d.fortitude,
  menace_reflex: d => d.reflexos,
  menace_will: d => d.vontade,
  menace_hp: d => d.vida,
  menace_mp: d => d.mana,
  menace_desloc: (d: any) => {
    const partes: string[] = [];

    if (d.deslocamento_terrestre > 0) {
      partes.push(formatar(d.deslocamento_terrestre));
    }

    if (d.deslocamento_natacao > 0) {
      partes.push(`natação ${formatar(d.deslocamento_natacao)}`);
    }

    if (d.deslocamento_escalada > 0) {
      partes.push(`escalada ${formatar(d.deslocamento_escalada)}`);
    }

    if (d.deslocamento_escavacao > 0) {
      partes.push(`escavação ${formatar(d.deslocamento_escavacao)}`);
    }

    if (d.deslocamento_voo > 0) {
      partes.push(`voo ${formatar(d.deslocamento_voo)}`);
    }

    return partes.join(', ');
  },
  for: d => d.forca,
  des: d => d.destreza,
  con: d => d.constituicao,
  int: d => d.inteligencia,
  sab: d => d.sabedoria,
  car: d => d.carisma,
};

function formatar(valor: number): string {
  const quadrados = valor / 1.5;
  return `${valor}m (${quadrados}q)`;
}
