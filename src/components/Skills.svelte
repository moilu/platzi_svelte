<script>
    let skills = [
        {
            id: 1,
            name: 'HTML'
        },
        {
            id: 2,
            name: 'CSS'
        },
        {
            id: 3,
            name: 'JavaScript'
        }
    ]
</script>

<div class="skills">
    <h3>Habilidades</h3>
    <ul>
        {#each skills as {name}}
            <li>{name}</li>
        {/each}
    </ul>
</div>