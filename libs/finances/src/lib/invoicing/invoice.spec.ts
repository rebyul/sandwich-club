import { List } from "immutable";
import { UuidTool } from "uuid-tool"
import { Invoice } from './invoice';
import { InvoiceLine } from "./invoice-line";
import { newInvoiceLine, newInvoiceLineDescription, newInvoiceLineId } from "./invoice-line.spec";

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

  it('add single invoice line', () => {
    const testInvoice = new Invoice(testId, testOwnerId)
    const testInvoiceLine = new InvoiceLine({ id: newInvoiceLineId(), description: newInvoiceLineDescription() })
    testInvoice.addInvoiceLine(testInvoiceLine);

    expect(testInvoice.invoiceLines.findIndex(l => l.equals(testInvoiceLine))).toBeGreaterThan(-1);
    expect(testInvoice.invoiceLines.count()).toBe(1);
  })

  it('add multiple invoice lines', () => {
    const testInvoice = new Invoice(testId, testOwnerId)
    const testInvoiceLine1 = new InvoiceLine({ id: newInvoiceLineId(), description: newInvoiceLineDescription() })
    const testInvoiceLine2 = new InvoiceLine({ id: newInvoiceLineId(), description: newInvoiceLineDescription() })
    testInvoice.addInvoiceLines([testInvoiceLine1, testInvoiceLine2]);

    expect(testInvoice.invoiceLines.findIndex(l => l.equals(testInvoiceLine1))).toBeGreaterThan(-1);
    expect(testInvoice.invoiceLines.findIndex(l => l.equals(testInvoiceLine2))).toBeGreaterThan(-1);
    expect(testInvoice.invoiceLines.count()).toBe(2);
  })

  it('remove single invoice line', () => {
    const testinvoiceLine = newInvoiceLine();
    const invoiceLineToRemove = newInvoiceLine();
    const testInvoice = new Invoice(testId, testOwnerId, List([testinvoiceLine, invoiceLineToRemove]));

    expect(testInvoice.invoiceLines.count()).toBe(2);

    testInvoice.removeInvoiceLine(invoiceLineToRemove);
    expect(testInvoice.invoiceLines.count()).toBe(1);
  })
})
