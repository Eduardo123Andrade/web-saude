import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from "@angular/core";

export interface HttpErrorRequest {
    isError: boolean
    errorMessage: string
    status: number
}

export class HttpErrorHandler {
    
    constructor(private error: HttpErrorRequest){}

    // handleError(error: HttpErrorRequest): void {
    //     // throw new Error('Method not implemented.');
    //     console.log(this.error)
    //     console.log(error.isError)
    //     console.log(error.status)
    //     console.log(error.errorMessage)
    // }

}