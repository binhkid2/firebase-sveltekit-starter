<script lang="ts">
    import { auth } from "$lib/firebase/firebase";
	import { currentUser } from "$lib/store/auth.stote";

    import { GoogleAuthProvider, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user)
    }
    let email = '';
  let password = '';

  async function LogIn() {
    // Perform basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }


</script>
<h2>Login</h2>

{#if $currentUser && $currentUser.emailVerified}
  <h2 class="card-title">Welcome, {$currentUser.email}</h2>
  <p class="text-center text-success">You are logged in</p>
  <button class="btn btn-warning" on:click={() => signOut(auth)}>Sign out</button>
  {:else if $currentUser && !$currentUser.emailVerified}
	Email verify been send.Please check your email
  {:else}

    <label>
        Email
        <input  bind:value={email} type="email">
      </label>
      <label>
        Password
        <input bind:value={password} type="password">
      </label>
      <button on:click={()=>LogIn()}>Log in</button>

Or <div>
    <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
    <div>
     <a href="/signup">SignUp</a>
   </div>
</div>
 
{/if}