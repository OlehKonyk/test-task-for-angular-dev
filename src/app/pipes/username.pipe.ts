import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
})
export class UsernamePipe implements PipeTransform {
  transform(value: string): string {
    const username = localStorage.getItem('username') || 'Guest';
    return `${value} ${username}`;
  }
}
