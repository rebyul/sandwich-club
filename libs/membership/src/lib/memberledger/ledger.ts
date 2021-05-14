type LedgerId = string;

class Ledger {
  constructor(
    public ledgerId: LedgerId,
    public createdAt: Date,
    public invoiceReference: string,
    public amount: number,
    public description: string = ''
  ) {}
}

export { LedgerId, Ledger };
