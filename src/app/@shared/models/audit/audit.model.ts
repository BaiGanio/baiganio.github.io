export enum AuditType {
    Update = 0x01,
    Create = 0x02,
    Delete = 0x03
}

export interface Delta {
    A: any;
    B: any;
    Property: string;
}

export interface Audit {
    Id: number;

    AuditType: AuditType;

    CreatedOn: Date | string;

    OriginatorId: string;

    OriginatorEmail: string;

    ResourceType: string;

    Changes: string;

    AdditonalData: string;
}
