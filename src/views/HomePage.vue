<template>
  <div class="home-page-container">
    <HomeBanner></HomeBanner>
    <KnowLedge></KnowLedge>
    <SchoolRecommend></SchoolRecommend>
    <drive-process></drive-process>
    <honor-fi></honor-fi>
    <app-ad></app-ad>
    <APPLoad></APPLoad>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import KnowLedge from "@/components/KnowLedge.vue";
import SchoolRecommend from "@/components/SchoolRecommend.vue";
import DriveProcess from "@/components/DriveProcess.vue";
import HonorFi from "@/components/HonorFi.vue";
import AppAd from "@/components/AppAd.vue";
import APPLoad from "@/components/APPLoad.vue";
export default {
  components: {
    HomeBanner,
    KnowLedge,
    SchoolRecommend,
    DriveProcess,
    HonorFi,
    AppAd,
    APPLoad,
  },
};
</script>

<style>
</style>