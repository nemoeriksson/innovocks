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
        <a href="/" class="logo select-hidden logo-font"><span class="icon"></span> Innovocks</a>
        <div class="links">
            <a href="/trade" class="select-hidden">Trade <span class="underline"></span></a>
            <a href="/" class="select-hidden">Log out <span class="underline"></span></a>
        </div>
    </nav>

    <main>

    </main>
</body>
{/if}