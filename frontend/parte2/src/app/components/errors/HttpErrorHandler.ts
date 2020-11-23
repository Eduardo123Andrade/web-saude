import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from "@angular/core";

export interface HttpErrorRequest {
    isError: boolean
    errorMessage: string
    status: number
}

export class HttpErrorHandler {
    
    constructor(private error: HttpErrorRequest){}
}