import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  private static isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  static saveToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  static saveUser(user: any): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getToken(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(TOKEN);
    }
    return null;
  }

  static getUser(): any | null {
    if (this.isLocalStorageAvailable()) {
      const user = localStorage.getItem(USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  static getUserId(): string {
    const user = this.getUser();
    return user ? user.id : '';
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role === 'ADMIN';
  }

  static isCustomerLoggedIn(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role === 'CUSTOMER';
  }

  static signOut(): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
}
