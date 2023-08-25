<script>
	import { auth } from "$lib/firebase/firebase";
	import { currentUser } from "$lib/store/auth.stote";
	import { signOut } from "firebase/auth";



</script>
<h1>Welcome to SvelteKit</h1>

{#if $currentUser && $currentUser.emailVerified}
  <h2 class="card-title">Welcome, {$currentUser.email}</h2>
  <p class="text-center text-success">You are logged in</p>
  <button class="btn btn-warning" on:click={() => signOut(auth)}>Sign out</button>
  {:else if $currentUser && !$currentUser.emailVerified}
	Email verify been send.Please check your email
  {:else}

  PLEASE
  <a href="/login">Login</a>
  or
  <a href="/signup">Register</a>
  {/if}
