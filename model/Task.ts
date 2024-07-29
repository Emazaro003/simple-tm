import type { CustomField } from "./CustomField";

export class Task {
    private name: string;
    private description: string;
    private customFields: CustomField[];

    public constructor (name: string, description: string, customFields: CustomField[]) {
        this.name = name;
        this.description = description;
        this.customFields = customFields;
    }

    public getName(): string{
        return this.name;
    }

    public getDescription(): string{
        return this.description;
    }

    public getCustomFields(): CustomField[]{
        return this.customFields;
    }
}