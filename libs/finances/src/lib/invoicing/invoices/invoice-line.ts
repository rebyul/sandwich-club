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
  public id: string;
  public description: string;

  constructor(values: InvoiceLineProps) {
    Object.assign(this, values);
  }

  equals(other: unknown): boolean {
    if (other instanceof InvoiceLine) {
      return this.id == other.id;
    }
    return false;
  }
}

export { InvoiceLine };
