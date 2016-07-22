import { EventEmitter } from "@angular/core";
import { Notification } from './notification';
import { NotificationEvent } from './notificationEvent';
export declare class NotificationsService {
    private emitter;
    set(notification: Notification, to: boolean): Notification;
    getChangeEmitter(): EventEmitter<NotificationEvent>;
    success(title: string, content: string, override?: any): Notification;
    error(title: string, content: string, override?: any): Notification;
    alert(title: string, content: string, override?: any): Notification;
    info(title: string, content: string, override?: any): Notification;
    bare(title: string, content: string, override?: any): Notification;
    create(title: string, content: string, type: string, override?: any): Notification;
    html(html: any, type: string, override?: any): Notification;
    remove(id?: string): void;
}
