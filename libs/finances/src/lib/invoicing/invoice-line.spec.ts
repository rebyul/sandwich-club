import { UuidTool } from "uuid-tool"
import { InvoiceLine, InvoiceLineProps } from "./invoice-line";

const newInvoiceLineId = () => UuidTool.newUuid();
const newInvoiceLineDescription = (value?: string) => value || `Line description ${Math.random() * 100}`
const newInvoiceLine = (values?: InvoiceLineProps) => new InvoiceLine({ ...values })

describe('invoice lines', () => {

  it('create new invoice line', () => {
    const expectedId = newInvoiceLineId();
    const expectedDescription = newInvoiceLineDescription();
    const newLine = newInvoiceLine({ id: expectedId, description: expectedDescription });

    expect(newLine instanceof InvoiceLine).toBe(true);
    expect(newLine.id).toBe(expectedId);
    expect(newLine.description).toBe(expectedDescription);
  })
})


export { newInvoiceLineId, newInvoiceLineDescription, newInvoiceLine }
