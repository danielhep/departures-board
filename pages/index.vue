<template>
  <div class="inset-0 absolute bg-black text-white">
    <div class="grid grid-cols-2 m-8 items-center">
      <h1>To Northgate Station</h1>
      <h1>To Airport & Angle Lake Station</h1>
    </div>
    <div class="grid grid-cols-2 nowrap text-xl">
      <div class="flex ml-4">
        <div class="flex-shrink text-right">
          <div>Now</div>
          <div>11 min</div>
          <div>11 min</div>
        </div>
      </div>
      <div class="flex ml-4">
        <div class="flex-shrink text-right">
          <div>Now</div>
          <div>11 min</div>
          <div>11 min</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'

}
</script>

<style scoped>
h1 {
  @apply text-7xl
}
</style>
