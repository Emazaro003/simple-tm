export class CustomField {
    private name: string;
    private value: string;
    private typeOfField: string;

    public constructor (name: string, value: string, typeOfField: string) {
        this.name = name;
        this.value = value;
        this.typeOfField = typeOfField;
    }

    public getName(): string{
        return this.name;
    }

    public getValue(): string{
        return this.value;
    }

    public getTypeOfField(): string{
        return this.typeOfField;
    }
}