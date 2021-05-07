type LedgerId = string;

class Ledger {
  constructor(
    public ledgerId: LedgerId,
    public createdAt: Date,
    public description: string,
    public amount: number
  ) {}
}

export { LedgerId, Ledger };
