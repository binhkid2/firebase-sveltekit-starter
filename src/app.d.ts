// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			token:string | undefined,
		 GetSessionUserFunction(_token?: any) :any|null
		 }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
