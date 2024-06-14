<template>
  <div class="locomotives">
    <p>Доступные локомотивы:</p>
  </div>
</template>

<script>
export default{
     name: 'LocomotiveAccessible'
}
</script>

<style>
.locomotives {
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 1px 10px 14px 0 #cccccc8c;
    padding: 20px;
    border-radius: var(--b-radius);
}
</style>
