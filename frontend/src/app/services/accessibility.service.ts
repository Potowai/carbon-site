import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AccessibilityState = {
  theme: 'dark' | 'light';
  largeText: boolean;
  highContrast: boolean;
  daltonism: boolean;
};

const STORAGE_KEY = 'carbonsite:a11y';

const DEFAULT_STATE: AccessibilityState = {
  theme: 'dark',
  largeText: false,
  highContrast: false,
  daltonism: false
};

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private readonly stateSubject = new BehaviorSubject<AccessibilityState>(this.load());
  readonly state$ = this.stateSubject.asObservable();

  constructor() {
    this.applyToDom(this.stateSubject.value);
  }

  get snapshot(): AccessibilityState {
    return this.stateSubject.value;
  }

  setState(next: AccessibilityState) {
    this.stateSubject.next(next);
    this.save(next);
    this.applyToDom(next);
  }

  toggle<K extends keyof AccessibilityState>(key: K) {
    if (key === 'theme') {
      const nextTheme = this.snapshot.theme === 'dark' ? 'light' : 'dark';
      this.setState({ ...this.snapshot, theme: nextTheme });
      return;
    }
    const next = { ...this.snapshot, [key]: !this.snapshot[key] };
    this.setState(next);
  }

  reset() {
    this.setState({ ...DEFAULT_STATE });
  }

  private load(): AccessibilityState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      return {
        theme: parsed?.theme === 'light' ? 'light' : 'dark',
        largeText: Boolean(parsed?.largeText),
        highContrast: Boolean(parsed?.highContrast),
        daltonism: Boolean(parsed?.daltonism)
      };
    } catch {
      return { ...DEFAULT_STATE };
    }
  }

  private save(state: AccessibilityState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore (private mode, quota, etc.)
    }
  }

  private applyToDom(state: AccessibilityState) {
    const root = document.documentElement;
    root.classList.toggle('theme-light', state.theme === 'light');
    root.classList.toggle('theme-dark', state.theme !== 'light');
    root.classList.toggle('a11y-large-text', state.largeText);
    root.classList.toggle('a11y-high-contrast', state.highContrast);
    root.classList.toggle('a11y-daltonism', state.daltonism);
  }
}

