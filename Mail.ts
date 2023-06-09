
export class Mail {
    private clase: string;
    private email: string;

    constructor(clase: string, email: string) {
        this.clase = clase;
        this.email = email;
    }

    public getClase() {
        return this.clase;
    }

    public getEmail() {
        return this.email;
    }
}

