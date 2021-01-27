import { Injectable, EventEmitter } from '@angular/core';
import { UserView } from '../@modules/users/models/user-view';
/**
 * @EventBusService used for connections between modules
 */
@Injectable()
export class EventBusService {
  public changeRoute: EventEmitter<any>;
  public retryRequest: EventEmitter<any>;
  public unknownError: EventEmitter<any>;
  public updateUserData: EventEmitter<UserView>;
  public fetchedDashboardData: EventEmitter<any>;

  constructor() {
    this.changeRoute = new EventEmitter();
    this.retryRequest = new EventEmitter();
    this.unknownError = new EventEmitter();
    this.updateUserData = new EventEmitter();
    this.fetchedDashboardData = new EventEmitter();
  }

  public emitChangeRoute(data) {
    this.changeRoute.emit(data);
  }

  public emitRetryRequest(data) {
    this.retryRequest.emit(data);
  }

  public emitUnknownError(data) {
    this.unknownError.emit(data);
  }

  public emitUpdateUserData(data) {
    this.updateUserData.emit(data);
  }

  public emitFetchedDashboardData(data) {
    this.fetchedDashboardData.emit(data);
  }

}
