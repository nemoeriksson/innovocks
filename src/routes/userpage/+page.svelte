<script>
import { onMount } from "svelte";

let userdata;

onMount(()=>{
    userdata = JSON.parse(sessionStorage.getItem('currentUser'));
    if(userdata == null){
        window.location = '/';
    }
});

</script>

<head>
    {#if userdata != null}
        <title>Welcome {userdata['user']}!</title>
    {/if}
    <link rel="stylesheet" href="/styles/theme.css">
    <link rel="stylesheet" href="/styles/userpage.css">
</head>

{#if userdata != null}
<body>
    <nav>
        <a href="/" class="logo select-light"><span class="icon"></span> Placeholder Title</a>
        <div class="links">
            <a href="/" class="select-hidden">Home <span class="underline"></span></a>
        </div>
    </nav>

    <main>
        
    </main>
</body>
{/if}