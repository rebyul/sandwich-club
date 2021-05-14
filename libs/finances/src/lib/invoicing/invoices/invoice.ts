import { List } from 'immutable';
import { InvoiceLineExistsError } from '../exceptions';
import { InvoiceLine } from './invoice-line';

class Invoice {
  public readonly createdAt: Date;
  public invoiceLines: List<InvoiceLine>;

  constructor(
    public readonly id: string,
    public readonly ownerId: string,
    lines: List<InvoiceLine> | InvoiceLine[] = List()
  ) {
    this.createdAt = new Date();
    this.invoiceLines = List();
    this.addInvoiceLines(lines);
  }

  public addInvoiceLine(newLine: InvoiceLine) {
    if (this.hasInvoiceLine(newLine)) {
      throw new InvoiceLineExistsError(newLine.id);
    }
    this.invoiceLines = this.invoiceLines.push(newLine);
    return this;
  }

  public addInvoiceLines(newLines: InvoiceLine[] | List<InvoiceLine>) {
    newLines.forEach((l: InvoiceLine) => {
      this.addInvoiceLine(l);
    });
    return this;
  }

  public removeInvoiceLine(line: InvoiceLine) {
    if (this.hasInvoiceLine(line)) {
      const indexToRemove = this.invoiceLines.findIndex((l) => l.equals(line));
      this.invoiceLines = this.invoiceLines.remove(indexToRemove);
    }
    return this;
  }

  private hasInvoiceLine = (invoiceLine: InvoiceLine): boolean =>
    this.invoiceLines.findIndex((i) => i.equals(invoiceLine)) !== -1;
}

export { Invoice };
