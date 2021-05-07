import { Ledger, LedgerId } from './ledger';
import { Map } from 'immutable';

class MemberLedger {
  constructor(public readonly memberId: string, public readonly ledgers: Map<LedgerId, Ledger>) {
    this.ledgers = ledgers || Map();
  }

  getBalance(): number {
    return this.ledgers.reduce((a, b) => a + b.amount, 0);
  }
}

export { MemberLedger };
