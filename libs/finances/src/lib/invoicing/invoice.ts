import { List } from "immutable";
import { InvoiceLineExistsError } from "./exceptions";
import { InvoiceLine } from "./invoice-line";

class Invoice {
  public readonly createdAt: Date;
  public invoiceLines: List<InvoiceLine>;

  constructor(public readonly id: string, public readonly ownerId: string, lines: List<InvoiceLine> = List()) {
    this.createdAt = new Date();
    this.invoiceLines = lines;
  }

  public addInvoiceLine(newLine: InvoiceLine) {
    if (this.invoiceLines.findIndex(l => l.equals(newLine)) > -1) {
      throw new InvoiceLineExistsError(newLine.id)
    }
    this.invoiceLines = this.invoiceLines.push(newLine);
    return this;
  }

  public addInvoiceLines(newLines: InvoiceLine[]) {
    newLines.forEach(l => {
      this.addInvoiceLine(l);
    })
    return this;
  }

  public removeInvoiceLine(line: InvoiceLine) {
    const indexToRemove = this.invoiceLines.findIndex(l => l.equals(line))
    this.invoiceLines = this.invoiceLines.remove(indexToRemove);
    return this;
  }
}

export { Invoice };
