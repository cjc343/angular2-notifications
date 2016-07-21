import { EventEmitter } from "@angular/core";
export declare class NotificationsService {
    emiter: EventEmitter<any>;
    set(notification: any, to: boolean): any;
    getChangeEmitter(): EventEmitter<any>;
    success(title: string, content: string, override?: any): any;
    error(title: string, content: string, override?: any): any;
    alert(title: string, content: string, override?: any): any;
    info(title: string, content: string, override?: any): any;
    bare(title: string, content: string, override?: any): any;
    create(title: string, content: string, type: string, override?: any): any;
    html(html: any, type: string, override?: any): any;
    remove(id?: string): void;
}
