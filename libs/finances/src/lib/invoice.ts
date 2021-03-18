
class Invoice {
    public readonly createdAt: Date;
    constructor(public readonly id: string, public readonly ownerId: string) {
        this.createdAt = new Date();
    }
}

export { Invoice };