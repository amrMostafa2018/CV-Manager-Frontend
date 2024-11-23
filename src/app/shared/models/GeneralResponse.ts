export interface GeneralResponse<T>{
    statusCode : number;
    OperationStatus : number;
    OperationMessage : string;
    data : T;
    error:any;
}
