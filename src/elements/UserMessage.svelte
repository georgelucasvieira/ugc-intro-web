<script lang="ts">
    export let message = "";
</script>

<div class="user-message-container">
    <div class="user-message-box">
        <p>{message}</p>
    </div>
</div>

<style>
    .user-message-container{
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .user-message-box{
        max-width: 300px;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: var(--element-color);
        overflow-wrap: break-word;
        text-align: start;
    }
</style>