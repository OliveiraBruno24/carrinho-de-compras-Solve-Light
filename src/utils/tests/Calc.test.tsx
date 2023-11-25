import { calcBankNotes } from "../calc";

describe('Testando função de cálcular notas mínimas', () => {
    it('Testar cálculo para um total que requer todas as notas disponíveis', () => {
        const total = 188;
        const result = calcBankNotes(total);
        expect(result).toEqual([
          '1 Nota(s) de R$100',
          '1 Nota(s) de R$50',
          '1 Nota(s) de R$20',
          '1 Nota(s) de R$10',
          '1 Nota(s) de R$5',
          '1 Nota(s) de R$2',
          '1 Nota(s) de R$1',
        ]);
      });
})