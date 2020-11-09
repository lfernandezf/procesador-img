import { BehaviorSubject, Observable } from 'rxjs';

export class TestStore<T> {
  private state: BehaviorSubject<any> = new BehaviorSubject(undefined);
  setState(data: any): void {
    this.state.next(data);
  }
  select(selector?: any): Observable<any> {
    return this.state.asObservable();
  }
  dispatch(action: any): void {}
  unsubscribe(): void{}
}
