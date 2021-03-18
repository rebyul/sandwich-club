import { List } from "immutable";
import { InvoiceLine } from "./invoice-line";

class Invoice {
  public readonly createdAt: Date;

  constructor(public readonly id: string, public readonly ownerId: string, public readonly lines: List<InvoiceLine> = List()) {
    this.createdAt = new Date();
  }

  public addInvoiceLine(newLine: InvoiceLine) {
    this.lines.push(newLine);
  }

  public addInvoiceLines(newLines: InvoiceLine[]) {
    newLines.forEach(this.addInvoiceLine);
  }
}

export { Invoice };
