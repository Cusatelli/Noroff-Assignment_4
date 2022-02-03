import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const STORAGE_KEY = 'trainer';

@Injectable({ providedIn: 'root' })
export class TrainerService {
    // Observables
    private trainer$: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() {}

    // Methods
    hasTrainer(): boolean {
        return Boolean(this.trainer$.value);
    }

    getTrainer(): Observable<string> {
        return this.trainer$.asObservable();
    }

    registerTrainer(name: string): void {
        this.trainer$.next(name);
        localStorage.setItem(STORAGE_KEY, name);
    }

    loginTrainer(name: string): void {
        this.trainer$.next(name);
        localStorage.setItem(STORAGE_KEY, name);
    }

    logoutTrainer(): void {
        localStorage.removeItem(STORAGE_KEY);
        this.trainer$.next('');
    }
}
