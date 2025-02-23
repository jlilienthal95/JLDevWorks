import { writable } from 'svelte/store';

export const scrollY = writable(0);
export const scrollThreshold = writable(650); 
export const wiggle = writable(false);
export const toggleHeader = writable(true);