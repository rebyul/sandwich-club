import { UuidTool } from 'uuid-tool';
import { Ledger } from './ledger';

describe('ledger', () => {
  const createLedgerId = () => UuidTool.newUuid();

  it('new ledger', () => {
    const newLedgerId = createLedgerId();
    const now = new Date();
    const description = 'Test Description';
    const amount = 3.6;
    const newLedger = new Ledger(newLedgerId, now, description, amount);

    expect(newLedger).not.toBeNull();
    expect(newLedger.ledgerId).toEqual(newLedgerId);
    expect(newLedger.createdAt).toEqual(now);
    expect(newLedger.description).toEqual(description);
    expect(newLedger.amount).toEqual(amount);
  });
});
