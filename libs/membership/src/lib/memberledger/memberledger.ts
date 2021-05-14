import { Ledger, LedgerId } from './ledger';
import { Map } from 'immutable';

class MemberLedger {
  constructor(
    public readonly memberId: string,
    public readonly ledgers: Map<LedgerId, Ledger> = Map()
  ) {}

  getBalance = (): number => this.ledgers.reduce((a, b) => a + b.amount, 0);
}

export { MemberLedger };
