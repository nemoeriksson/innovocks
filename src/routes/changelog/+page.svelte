<script>
import { onMount } from "svelte";

let data = [];

onMount(()=>{
    fetch('/files/changelog.json').then((response)=>response.json()).then((json)=>{
        data = Object.entries(json);
    });
});
</script>

<head>
    <title>Changelog</title>
    <link rel="stylesheet" href="/styles/theme.css">
    <link rel="stylesheet" href="/styles/changelog.css">
</head>

<body>
    <nav>
        <a href="/" class="logo select-hidden logo-font"><span class="icon"></span> Innovocks</a>
        <div class="links">
            <a href="/" class="select-hidden">Home <span class="underline"></span></a>
            <a href="https://github.com/nemoeriksson/nemoeriksson.github.io" target="_blank" class="select-hidden">GitHub<span class="underline"></span></a>
        </div>
    </nav>

    <div class="container">
        <section class="title-section">
            <p class="title select-light">Changelog</p>
            <a class="full-link select-hidden" target="_blank" href="https://github.com/nemoeriksson/nemoeriksson.github.io/commits/main">Link to full changelog</a>
            <hr class="title-break"/>
        </section>

        <main>
            <div class="progress-line"></div>
            {#each data as [version, value]}
                <section class="entry">
                    <p class="version-number select-hidden">{version}</p>
                    
                    {#each value as point}
                        {#if point["type"] == "date"}
                            <p class="date select-light">{point["content"]}</p>
                        {/if}
                        {#if point["type"] != "date" && point["type"] != "description"}
                            <p class="content select-light">
                                <span class={"type select-hidden " + point["type"]}>{point["type"]}</span>
                                {point["content"]}
                            </p>
                        {/if}
                        {#if point["type"] == "description"}
                            <p class="description select-light">{point["content"]}</p>
                        {/if}
                    {/each}
                </section>
            {/each}
        </main>
    </div>
</body>
