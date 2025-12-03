export class StringUtils {
  /**
   * Remove acentos e normaliza para comparação segura.
   * Ex: "nível" -> "nivel"
   */
  static removerAcentos(texto: string | null | undefined): string {
    if (!texto) return '';

    return texto
      .normalize('NFD') // separa acentos
      .replace(/[\u0300-\u036f]/g, ''); // remove acentos
  }

  /**
   * Compara duas strings ignorando acentos e caixa (case-insensitive)
   */
  static iguais(a: string | null | undefined, b: string | null | undefined): boolean {
    return StringUtils.removerAcentos(a).toLowerCase() === StringUtils.removerAcentos(b).toLowerCase();
  }
}
