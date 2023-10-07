<script setup lang="ts">
import localforage from "localforage";
import { getLocalForageSafe } from "./ts/util";
import GameForm from "./components/GameForm.vue";
</script>

<template>
	<!-- Renders the contents returned by the vue router -->
	<!-- router-view -->
	<GameForm />
</template>

<style lang="scss">
// @use "/assets/sass/style.scss" as *;
</style>
