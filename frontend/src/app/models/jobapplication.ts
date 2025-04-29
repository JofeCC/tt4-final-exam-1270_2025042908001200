export interface JobApplication {
[x: string]: string | number | Date | undefined;
    id?: number;
    company: string;
    position: string;
    status: string;
    appliedDate: Date;
}