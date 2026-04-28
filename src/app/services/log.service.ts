import { Injectable } from '@angular/core';
console.log('service is part of the bundle');
@Injectable({
  providedIn: 'root'
})
export class LogService {
private static instanceCount = 0;
 constructor() {
LogService.instanceCount++;
console.log(`Log service instance count: ${LogService.instanceCount}`);
}
counter = 0;
setCount() {
this.counter = this.counter + 1;
}
getCount() {
return this.counter;
}
}
