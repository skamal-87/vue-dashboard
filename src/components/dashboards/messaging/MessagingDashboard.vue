<template>
  <section>
    hi
  </section>
</template>

<script>

  export default {
    name: 'MessagingDashboard',
    components: {
    },
    created() {
      this.$store.dispatch('fetchMessageSummary');
    }
  }
</script>
