import { List } from 'immutable';
import { UuidTool } from 'uuid-tool';
import { InvoiceLineExistsError } from '../exceptions';
import { Invoice } from './invoice';
import { InvoiceLine } from './invoice-line';
import { newInvoiceLine, newInvoiceLineDescription, newInvoiceLineId } from './invoice-line.spec';

describe('invoice', () => {
  const testId = UuidTool.newUuid();
  const testOwnerId = UuidTool.newUuid();
  it('create new invoice', () => {
    const testInvoice = new Invoice(testId, testOwnerId);
    expect(testInvoice).toBeTruthy();
    expect(testInvoice instanceof Invoice).toBe(true);
    expect(testInvoice.id).toEqual(testId);
    expect(testInvoice.ownerId).toEqual(testOwnerId);
    expect(testInvoice.createdAt).toBeDefined();
  });

  it('create new invoice with lines', () => {
    const testInvoiceLine = new InvoiceLine(newInvoiceLineId(), newInvoiceLineDescription());
    const testInvoice = new Invoice(testId, testOwnerId, [testInvoiceLine]);

    expect(testInvoice.invoiceLines.count()).toBe(1);
    expect(testInvoice.invoiceLines.find((i) => i.equals(testInvoiceLine))).toBe(testInvoiceLine);
  });

  it('add single invoice line', () => {
    const testInvoice = new Invoice(testId, testOwnerId);
    const testInvoiceLine = new InvoiceLine(newInvoiceLineId(), newInvoiceLineDescription());
    testInvoice.addInvoiceLine(testInvoiceLine);

    expect(testInvoice.invoiceLines.findIndex((l) => l.equals(testInvoiceLine))).toBeGreaterThan(
      -1
    );
    expect(testInvoice.invoiceLines.count()).toBe(1);
  });

  it('add multiple invoice lines', () => {
    const testInvoice = new Invoice(testId, testOwnerId);
    const testInvoiceLine1 = new InvoiceLine(newInvoiceLineId(), newInvoiceLineDescription());
    const testInvoiceLine2 = new InvoiceLine(newInvoiceLineId(), newInvoiceLineDescription());
    testInvoice.addInvoiceLines([testInvoiceLine1, testInvoiceLine2]);

    expect(testInvoice.invoiceLines.findIndex((l) => l.equals(testInvoiceLine1))).toBeGreaterThan(
      -1
    );
    expect(testInvoice.invoiceLines.findIndex((l) => l.equals(testInvoiceLine2))).toBeGreaterThan(
      -1
    );
    expect(testInvoice.invoiceLines.count()).toBe(2);
  });

  it('remove single invoice line', () => {
    const testinvoiceLine = newInvoiceLine();
    const invoiceLineToRemove = newInvoiceLine();
    const testInvoice = new Invoice(
      testId,
      testOwnerId,
      List([testinvoiceLine, invoiceLineToRemove])
    );

    expect(testInvoice.invoiceLines.count()).toBe(2);

    testInvoice.removeInvoiceLine(invoiceLineToRemove);
    expect(testInvoice.invoiceLines.count()).toBe(1);
  });

  it('direct manipulation to invoice lines does not persist', () => {
    const testinvoiceLine = newInvoiceLine();
    const testinvoiceLine2 = newInvoiceLine();

    const testInvoice = new Invoice(testId, testOwnerId, List([testinvoiceLine]));
    expect(testInvoice.invoiceLines.count()).toBe(1);

    testInvoice.invoiceLines.concat(testinvoiceLine2);
    expect(testInvoice.invoiceLines.count()).toBe(1);
  });

  it('adding an existing invoice line throws new error', () => {
    const testinvoiceLine = newInvoiceLine();

    const testInvoice = new Invoice(testId, testOwnerId, List([testinvoiceLine]));
    expect(testInvoice.invoiceLines.count()).toBe(1);
    expect(() => testInvoice.addInvoiceLine(testinvoiceLine)).toThrow(InvoiceLineExistsError);
  });
});
