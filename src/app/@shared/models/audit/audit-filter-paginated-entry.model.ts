export class AuditFilterPaginatedEntry {
    OriginatorId: string;
    OriginatorEmail: string;
    AuditType: number;
    CreatedOnFrom: Date | string;
    CreatedOnTo: Date | string;
    ResourceType: string;
    Skip: number;
    Take: number;
}
