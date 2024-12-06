export interface Pagination {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
        previous?: string;
        current: string;
        next?: string;
    };
}
