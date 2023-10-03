<template lang="pug">
.container
	.tile.is-ancestor.is-vertical 
		.tile.is-12
			.tile.is-parent.is-vertical.is-2
			.tile.is-parent.is-vertical.is-4
				.tile.is-child.content404
					.box.has-text-centered
						h1 404 Error
				.tile.is-child.content404
					.box.has-text-centered
						a(href="/") Click here to return to the main page
			.tile.is-parent.is-vertical.is-2
</template>

<style lang="scss">
.content404 {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>