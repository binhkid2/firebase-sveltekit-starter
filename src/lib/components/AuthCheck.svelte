<script lang="ts">
    import { currentUser } from "$lib/store/auth.stote"
</script>
  
{#if $currentUser?.emailVerified}
  <slot />
{:else}
    <p class="text-error">
        You must have a verified account to access
        <a class="btn btn-primary" href="/login">Sign in</a>
    </p>
{/if}