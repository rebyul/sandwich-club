class InvoiceLineExistsError extends Error {
  constructor(existingLineId: string) {
    super(`Invoice line id ${existingLineId} already exists in invoice`)
  }
}

export { InvoiceLineExistsError }
