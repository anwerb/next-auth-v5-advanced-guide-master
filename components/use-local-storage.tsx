'use client'
import { useEffect, useState } from 'react';

type ConsentCookie = {
    advertising: boolean;
    essential: boolean;
    functional: boolean;
    performance: boolean;
  };
 
interface CookieConsent {
    checkForCookieConsent: () => void;
    getConsentCookie: () => ConsentCookie;
 }

declare global {
    interface Window {
      AwsUiConsent: CookieConsent;
    }
  }
 

const hasConsent = () => {
    if (typeof window.AwsUiConsent === 'undefined') {
      return false;
    }
  
    const cookieConsent = window.AwsUiConsent.getConsentCookie();
    return cookieConsent?.functional ?? false;
  };


const save = (key: string, value: any) => {
    if (hasConsent()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
const remove = (key: string) => localStorage.removeItem(key);

const load = (key: string) => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const value = localStorage.getItem(key);
  
    
    try {
      return value && JSON.parse(value);
    } catch (e) {
      console.warn(
        `⚠️ The ${key} value that is stored in localStorage is incorrect. Try to remove the value ${key} from localStorage and reload the page`
      );
      return undefined;
    }
  }
  };
  
  
export function useLocalStorage<T>(key: string, defaultValue?: T) {
  const [value, setValue] = useState<T>(() => load(key) ?? defaultValue);

  function handleValueChange(newValue: T) {
    setValue(newValue);
    save(key, newValue);
  }

  return [value, handleValueChange] as const;
}