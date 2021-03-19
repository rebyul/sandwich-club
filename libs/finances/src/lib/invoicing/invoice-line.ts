export type InvoiceLineProps = {
  id: string, description: string
}

class InvoiceLine {
  public readonly id: string;
  public readonly description: string

  constructor(values: InvoiceLineProps) {
    ({ id: this.id, description: this.description } = values)
  }

  equals(other: unknown): boolean {
    if (other instanceof InvoiceLine) {
      return this.id == other.id;
    }
    return false;
  }
}

export { InvoiceLine }
