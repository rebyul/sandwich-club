import { UuidTool } from "uuid-tool"
import { Invoice } from './invoice';

describe('invoice', () => {
  const testId = UuidTool.newUuid();
  const testOwnerId = UuidTool.newUuid();
  it('create new invoice', () => {
    const testInvoice = new Invoice(testId, testOwnerId)
    expect(testInvoice).toBeTruthy();
    expect(testInvoice instanceof Invoice).toBe(true);
    expect(testInvoice.id).toEqual(testId);
    expect(testInvoice.ownerId).toEqual(testOwnerId);
    expect(testInvoice.createdAt).toBeDefined();
  })
})
