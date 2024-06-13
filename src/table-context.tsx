export type basicFilterConfig = { id: string; value: string };
export type betweenFilterConfig = { id: string; value: { major?: string; minor?: string } };
export type twoFilterConfi = { id: string; value: [basicFilterConfig, basicFilterConfig]}

type dataTable = Record<string, any>;

type tableOptions<T> = Pick<TableOptions<T>, 'columns' > & { data?: T[]; metaPagination?: any };

type tableStateType<T> = {
    table?: Table<T>;
    sorting: ColumnSort[1];
    filters: Array<basicFilterConfig | twoFilterConfig | betweenFilterConfig>;
    data?: T[];
    metaPagination?: any;
    filtersMenu?: boolean;
    secundaryView?: boolean;
    pagination: PaginationState;
    checkData?: RowSelectionState;
    enableMultiRowSelection: boolean;
    isloading: boolean
};
type dataTableProps<T = dataTable> = tableOptions<T> & { children: ReactNode; sorting?: ColumnSort[]; filters?: Array<basicilterConfig | twoFilterConfi}