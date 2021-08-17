export type InvoiceLineProps = {
  id: string;
  description: string;
};

/*
  Type merging hack to implement readonly property inheritance
  Turn InvoiceLineProps into an interface. Remove public properties from InvoiceLine
*/
// interface InvoiceLine extends InvoiceLineSchema {}

class InvoiceLine {
  // public id: string;
  // public description: string;

  constructor(public readonly id: string, public readonly description: string) {}

  equals(other: unknown): boolean {
    if (other instanceof InvoiceLine) {
      return this.id == other.id;
    }
    return false;
  }
}

export { InvoiceLine };
