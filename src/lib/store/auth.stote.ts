import { auth } from '$lib/firebase/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { writable } from 'svelte/store';
export const currentUser = writable<User | null>(null);

onAuthStateChanged(auth, (user) => {
  currentUser.set(user);
});