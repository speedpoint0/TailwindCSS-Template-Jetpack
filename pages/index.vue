<template>
	<div>
		<header
			class="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
		>
			<!-- Hero Content -->
			<div class="mx-auto w-full max-w-7xl px-5 md:px-10">
				<!-- Hero Heading -->
				<div
					class="mx-auto mb-8 flex max-w-3xl flex-col items-center py-12 text-center md:mb-12 md:py-16 lg:mb-16 lg:pb-20 lg:pt-32"
				>
					<!-- Heading Text -->
					<h1 class="mb-4 text-4xl font-bold md:text-6xl">
						Tailspark Layout Components
					</h1>
					<div class="mb-5 max-w-[528px] lg:mb-8">
						<p class="text-[#7c8aaa]">
							Welcome! Below you'll find links that will navigate to all the
							different components
						</p>
					</div>
					<!-- Button Wrap -->
					<div class="flex items-stretch justify-center">
						<a
							href="https://tailspark.co/"
							target="_blank"
							class="mr-4 rounded-full bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition hover:bg-[#081631]"
							>View Hundreds of Components</a
						>
					</div>
				</div>
				<!-- Hero Image -->
				<div
					class="w-full mx-auto mb-10 flex flex-row flex-wrap justify-center"
				>
					<button
						class="mr-6 mb-6 rounded-lg bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition hover:bg-[#081631]"
						v-for="route in routes"
						:key="route.name"
						@click="goToPage(route.path)"
					>
						{{ route.name }}
					</button>
				</div>
				<div class="">
					<img
						class="max-h-[416px] rounded-tl-[50px] rounded-tr-[50px] border-[12px] border-[#ffffff1f] object-fill"
						src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0755ed7ed2b1be74354e_image_processing20220429-712-h76k3c%202.png"
						alt="Hero image showing dashboard"
					/>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				routes: this.$router.options.routes.filter(
					(route) => !route.path.includes(":")
				),
			};
		},
		methods: {
			goToPage(path) {
				this.$router.push(path);
			},
		},
	};
</script>
