<template>
<div style="user-select: none">
  <subpage-main-title main-title="色卡规则"/>
  <card-rule-body/>
</div>
</template>

<script>
import SubpageMainTitle from "@/components/SubpageMainTitle";
import CardRuleBody from "@/pages/CardRule/CardRuleBody";
export default {
  name: "CardRule",
  components: {CardRuleBody, SubpageMainTitle}
}
</script>

<style scoped>

</style>