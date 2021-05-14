import { UuidTool } from 'uuid-tool';
import { InvoiceLine, InvoiceLineProps } from './invoice-line';

const newInvoiceLineId = () => UuidTool.newUuid();
const newInvoiceLineDescription = (value?: string) =>
  value || `Line description ${Math.random() * 100}`;
const newInvoiceLine = (
  values: InvoiceLineProps = { id: newInvoiceLineId(), description: newInvoiceLineDescription() }
) => new InvoiceLine({ ...values });

describe('newInvoiceLineId returns unique uuid', () => {
  const newId1 = newInvoiceLineId();
  const newId2 = newInvoiceLineId();
  expect(newId1 === newId2).toBe(false);
});

describe('newInvoiceLine returns unique invoice line', () => {
  const newId1 = newInvoiceLine();
  const newId2 = newInvoiceLine();
  expect(newId1.equals(newId2)).toBe(false);
});

describe('invoice lines', () => {
  it('create new invoice line', () => {
    const expectedId = newInvoiceLineId();
    const expectedDescription = newInvoiceLineDescription();
    const newLine = newInvoiceLine({ id: expectedId, description: expectedDescription });

    expect(newLine instanceof InvoiceLine).toBe(true);
    expect(newLine.id).toBe(expectedId);
    expect(newLine.description).toBe(expectedDescription);
  });
});

export { newInvoiceLineId, newInvoiceLineDescription, newInvoiceLine };
