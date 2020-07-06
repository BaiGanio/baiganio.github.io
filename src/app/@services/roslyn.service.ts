import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class RoslynService {
    constructor(private backendService: BackendService) { }

    sendCodeForCompile(data: any): Observable<any> {
        return this.backendService.backendRequest('post', 'Roslyn/PlainTextCodeCompiler', data);
    }

}
