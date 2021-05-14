import { UuidTool } from 'uuid-tool';
import { Ledger } from './ledger';

export const createNewLedger = (description: string, amount: number) =>
  new Ledger(
    UuidTool.newUuid(),
    new Date(),
    UuidTool.newUuid(),
    amount || Math.random() * 100,
    description || 'Bread'
  );

describe('ledger', () => {
  const createLedgerId = () => UuidTool.newUuid();
  const createInvoiceId = () => UuidTool.newUuid();

  it('new ledger', () => {
    const newLedgerId = createLedgerId();
    const newInvoiceId = createInvoiceId();
    const now = new Date();
    const description = 'Bread';
    const amount = 3.6;
    const newLedger = new Ledger(newLedgerId, now, newInvoiceId, amount, description);

    expect(newLedger).not.toBeNull();
    expect(newLedger.ledgerId).toEqual(newLedgerId);
    expect(newLedger.createdAt).toEqual(now);
    expect(newLedger.description).toEqual(description);
    expect(newLedger.amount).toEqual(amount);
  });
});
