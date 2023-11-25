export const calcBankNotes = (total: number) =>  {
    const availableballots = [100, 50, 20, 10, 5, 2, 1];
    let restantValue = total;
    const usedBanknotes: string[] = [];

    availableballots.forEach((ballots) => {
      const qtdBallots = Math.floor(restantValue / ballots);
      if (qtdBallots > 0) {
        usedBanknotes.push(`${qtdBallots} Nota(s) de R$${ballots}`);
        restantValue -= qtdBallots * ballots;
      }
    });
    return(usedBanknotes);
}

