<template>
	<div class="overflow-hidden">
		<!-- Navbar Dropdown 2 rows -->
		<section>
			<div
				class="h-auto w-screen bg-[#020d24] py-2 text-white [border-bottom:1px_solid_rgb(91,_103,_130)]"
			>
				<!-- NAVBAR -->
				<nav
					class="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0"
					x-data="{isOpen: false, menuOne:false}"
				>
					<!-- CONTAINER -->
					<div
						class="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20"
					>
						<!-- LOGO - YOU CAN REPLACE THIS -->
						<a
							href="https://tailwind-css-template-quantum-jovs77w0a-flowsparks-projects.vercel.app"
						>
							<img
								src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f03f3e434e2326e8af190_%5BA%5D--Navbar%20Brand%20(1).png"
								alt=""
								class="inline-block max-h-6 max-w-full"
							/>
						</a>
						<!-- MENU CONTENT 2 -->
						<div
							class="mt-10 flex flex-col items-start space-y-8 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0"
							x-bind:class="isOpen ? 'show' : 'hidden'"
						>
							<a
								href="https://tailwind-css-template-quantum-jovs77w0a-flowsparks-projects.vercel.app/"
								class="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
								>Home</a
							>
							<a
								href="https://tailwind-css-template-quantum-jovs77w0a-flowsparks-projects.vercel.app/Landing%20Pricing"
								class="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
								>Pricing</a
							>
							<a
								href="https://tailwind-css-template-quantum-jovs77w0a-flowsparks-projects.vercel.app/Landing%20Blog"
								class="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
								>Blog</a
							>
							<a
								href="https://tailspark.co/templates"
								target="_blank"
								class="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
								>Templates</a
							>
							<a
								href="https://flowspark.co/design"
								class="2 ml-5 rounded-full bg-[#081631] px-6 py-4 text-center font-semibold text-white transition hover:bg-[#2d6ae0] md:ml-10 lg:ml-4"
								>Get Custom Designs</a
							>
						</div>
						<!-- BURGER MENU -->
						<a
							href="#"
							class="absolute right-5 lg:hidden"
							x-on:click.prevent="isOpen = !isOpen"
						>
							<svg
								width="1.25rem"
								height="1rem"
								viewBox="0 0 20 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
									fill="currentColor"
								></path>
								<path
									d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
									fill="currentColor"
								></path>
								<path
									d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
									fill="currentColor"
								></path>
							</svg>
						</a>
					</div>
				</nav>
			</div>
		</section>

		<section
			class="bg-[#020d24] bg-cover bg-center bg-no-repeat text-white"
			style="
				background-image: url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg');
			"
		>
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<!-- Component -->
				<div class="flex flex-col items-center justify-start">
					<!-- Heading -->
					<div
						class="mx-auto mb-8 flex max-w-3xl flex-col items-center md:mb-12 lg:mb-16"
					>
						<h2 class="text-3xl font-bold md:text-5xl">
							Simple &amp; Fixed Pricing testt
						</h2>
					</div>
					<!-- Pricing Cards -->
					<div
						class="grid w-full grid-cols-1 gap-16 md:grid-cols-3 md:gap-4 lg:gap-8"
					>
						<div class="mx-auto flex w-full max-w-[416px] flex-col">
							<div
								class="flex w-full flex-col items-start rounded-xl bg-[#07132d] p-10"
							>
								<div class="mb-4 rounded-lg bg-[#0a1836] px-4 py-1.5">
									<p class="text-sm font-bold text-white">Free Plan</p>
								</div>
								<h2 class="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
									$99<span class="text-sm font-light">/year</span>
								</h2>
								<p class="mb-5 text-[#7c8aaa] md:mb-6 lg:mb-8">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam, purus sit
								</p>
								<a
									href="#"
									class="w-full rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-semibold text-white"
									>Get started</a
								>
							</div>
							<div class="mt-10 flex flex-col items-start gap-5">
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white">Premium Component </span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white"
											>Exclusive Freebies
										</span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white"
											>Monthly Free Exclusive
										</span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white">Customer Support </span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
							</div>
						</div>
						<div class="mx-auto flex w-full max-w-[416px] flex-col">
							<div
								class="flex flex-col items-start rounded-xl bg-[#2d6ae0] bg-cover bg-center bg-no-repeat p-10 text-white"
								style="
									background-image: url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a8b_Mask%20group.svg');
								"
							>
								<div class="mb-4 flex flex-row flex-wrap gap-4">
									<div class="rounded-lg bg-[#4782f3] px-4 py-1.5">
										<p class="text-sm font-bold text-white">Growth</p>
									</div>
									<div
										class="flex items-center gap-1.5 rounded-lg bg-[#aca18a] px-4 py-1.5 text-white"
									>
										<div class="flex">
											<svg
												width="17"
												height="16"
												viewBox="0 0 17 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M15.2528 4.59353C15.1098 4.47414 14.9361 4.39736 14.7515 4.37194C14.567 4.34652 14.379 4.37349 14.2091 4.44977L11.0466 5.85602L9.20905 2.54353C9.12123 2.38887 8.99398 2.26026 8.84028 2.17079C8.68657 2.08132 8.5119 2.03418 8.33405 2.03418C8.1562 2.03418 7.98153 2.08132 7.82783 2.17079C7.67412 2.26026 7.54688 2.38887 7.45905 2.54353L5.62155 5.85602L2.45905 4.44977C2.28874 4.37361 2.10052 4.3466 1.91567 4.37181C1.73081 4.39701 1.5567 4.47343 1.413 4.59242C1.2693 4.71141 1.16176 4.86822 1.10252 5.04513C1.04329 5.22205 1.03473 5.412 1.0778 5.59353L2.6653 12.3623C2.69566 12.4933 2.7523 12.6168 2.8318 12.7253C2.9113 12.8338 3.012 12.9251 3.1278 12.9935C3.28458 13.0874 3.46383 13.137 3.64655 13.1373C3.73537 13.1371 3.82373 13.1245 3.90905 13.0998C6.80269 12.2998 9.85916 12.2998 12.7528 13.0998C13.017 13.1692 13.298 13.131 13.5341 12.9935C13.6506 12.926 13.7518 12.835 13.8314 12.7263C13.911 12.6177 13.9672 12.4937 13.9966 12.3623L15.5903 5.59353C15.6329 5.41195 15.6239 5.22208 15.5642 5.04537C15.5046 4.86866 15.3967 4.71215 15.2528 4.59353V4.59353Z"
													fill="currentColor"
												></path>
											</svg>
										</div>
										<p class="text-sm font-bold text-white">Popular</p>
									</div>
								</div>
								<h2 class="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
									$149<span class="text-sm font-light">/year</span>
								</h2>
								<p class="mb-5 text-[#c0d6ff] md:mb-6 lg:mb-8">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam, purus sit
								</p>
								<a
									href="#"
									class="w-full rounded-full bg-white px-6 py-4 text-center font-semibold text-[#2d6ae0]"
									>Get started</a
								>
							</div>
							<div class="mt-10 flex flex-col items-start gap-5">
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white">Premium Component </span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white"
											>Exclusive Freebies
										</span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white"
											>Monthly Free Exclusive
										</span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white">Customer Support </span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
							</div>
						</div>
						<div class="mx-auto flex w-full max-w-[416px] flex-col">
							<div
								class="flex w-full flex-col items-start rounded-xl bg-[#07132d] p-10"
							>
								<div class="mb-4 rounded-lg bg-[#0a1836] px-4 py-1.5">
									<p class="text-sm font-bold text-white">Accelerate</p>
								</div>
								<h2 class="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
									$249<span class="text-sm font-light">/year</span>
								</h2>
								<p class="mb-5 text-[#7c8aaa] md:mb-6 lg:mb-8">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam, purus sit
								</p>
								<a
									href="#"
									class="w-full rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-semibold text-white"
									>Get started</a
								>
							</div>
							<div class="mt-10 flex flex-col items-start gap-5">
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white">Premium Component </span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white"
											>Exclusive Freebies
										</span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white"
											>Monthly Free Exclusive
										</span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
								<div class="flex flex-row items-start text-white">
									<div class="mr-2 flex text-[#2d6ae0]">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<p class="text-[#7c8aaa]">
										<span class="font-bold text-white">Customer Support </span>
										Lorem ipsum dolor sit amet consecteur adipiscing.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-[#020d24] text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<!-- Component -->
				<div class="flex flex-col items-center">
					<!-- Heading -->
					<div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
						<h2 class="text-3xl font-bold md:text-5xl">
							What our clients are saying
						</h2>
						<div class="mx-auto mt-4 max-w-[528px]">
							<p class="text-[#7c8aaa]">
								Lorem ipsum dolor sit amet elit ut aliquam
							</p>
						</div>
					</div>
					<!-- Content -->
					<div
						class="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 lg:mb-20"
					>
						<!-- Review Item -->
						<div
							class="flex w-full flex-col gap-4 rounded-xl bg-[#07132d] px-4 py-8 text-white md:p-8"
						>
							<!-- Author -->
							<div class="flex w-full flex-row items-center justify-between">
								<div class="flex items-center">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f17495b177315d9ee6112_Ellipse%2015.png"
										alt="Testimonial Image of Author"
										class="mr-4 inline-block h-8 w-8 rounded-full"
									/>
									<h6 class="text-sm font-bold md:text-base">Jessica Smith</h6>
								</div>
								<a href="#">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1787dce10ff1f7fea78d_Group%2065.png"
										alt=""
										class="w-6"
									/>
								</a>
							</div>
							<!-- Image -->
							<div class="h-full w-full">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f176cda12f6eb616f489a_Rectangle%20135.png"
									alt="Testimonial Image"
									class="h-60 w-full rounded-md object-cover"
								/>
							</div>
							<!-- Review -->
							<div class="flex w-full flex-col items-start gap-5">
								<p>
									I've been using the Schedule Master app for the past few
									months, and it has truly revolutionized the way I manage my
									time.
								</p>
								<div class="h-px w-full bg-[#c4c4c4]"></div>
								<div class="flex text-[#2d6ae0]">
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
						<!-- Review Item -->
						<div
							class="flex w-full flex-col gap-4 rounded-xl bg-[#07132d] px-4 py-8 text-white md:p-8"
						>
							<div class="flex w-full flex-row items-center justify-between">
								<div class="flex items-center">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1749edb551b8ee5554fb_Ellipse%2015.png"
										alt="Testimonial Image of Author"
										class="mr-4 h-8 w-8 rounded-full"
									/>
									<h6 class="text-sm font-bold md:text-base">Jessica Smith</h6>
								</div>
								<a href="#">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1787dce10ff1f7fea78d_Group%2065.png"
										alt=""
										class="w-6"
									/>
								</a>
							</div>
							<div class="h-full w-full">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f176cbe7c5bd7245a990a_Rectangle%20135-1.png"
									alt="Testimonial Image"
									class="h-60 w-full rounded-md object-cover"
								/>
							</div>
							<div class="flex w-full flex-col items-start gap-5">
								<p>
									I've been using the Schedule Master app for the past few
									months, and it has truly revolutionized the way I manage my
									time.
								</p>
								<div class="h-px w-full bg-[#c4c4c4]"></div>
								<div class="flex text-[#2d6ae0]">
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
						<!-- Review Item -->
						<div
							class="flex w-full flex-col gap-4 rounded-xl bg-[#07132d] px-4 py-8 text-white md:p-8"
						>
							<div class="flex w-full flex-row items-center justify-between">
								<div class="flex items-center">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f17495b177315d9ee610e_Ellipse%2015.png"
										alt="Testimonial Image of Author"
										class="mr-4 h-8 w-8 rounded-full"
									/>
									<h6 class="text-sm font-bold md:text-base">Jessica Smith</h6>
								</div>
								<a href="#">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1787dce10ff1f7fea78d_Group%2065.png"
										alt=""
										class="inline-block w-6"
									/>
								</a>
							</div>
							<div class="relative h-full w-full">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f176cef937bd8c8a25f87_Rectangle%20135-2.png"
									alt="Testimonial Image"
									class="inline-block h-60 w-full rounded-md object-cover"
								/>
							</div>
							<div class="flex w-full flex-col items-start gap-5 p-0">
								<p>
									I've been using the Schedule Master app for the past few
									months, and it has truly revolutionized the way I manage my
									time.
								</p>
								<div class="h-px w-full bg-[#c4c4c4]"></div>
								<div class="flex text-[#2d6ae0]">
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="mr-1 w-3.5 flex-none">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<a
						href="#"
						class="rounded-full bg-[#081631] px-6 py-4 text-center font-bold text-[#7786a7] transition hover:bg-[#2d6ae0] hover:text-white"
						>Check All&nbsp;Reviews</a
					>
				</div>
			</div>
		</section>

		<section class="bg-[#eef0f4]">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<!-- Component -->
				<div
					class="flex flex-col justify-center gap-12 px-8 lg:grid lg:grid-cols-2 lg:gap-20"
				>
					<!-- Left Component -->
					<div class="w-full">
						<!-- Header Text -->
						<div class="mb-8 max-w-3xl md:mb-12 lg:mb-16">
							<h2 class="text-3xl font-bold md:text-5xl">General FAQs</h2>
							<div class="ml-0 mr-0 mt-4 max-w-[528px]">
								<p class="text-[#636262]">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam,purus sit amet luctus magna fringilla urna
								</p>
							</div>
						</div>
						<!-- Questions Block -->
						<div class="w-full max-w-3xl rounded-xl bg-white p-8">
							<div class="flex flex-row gap-4">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1823da12f6eb616fe18c_Ellipse%2015.png"
									alt="Support image of Author"
									class="inline-block h-12 w-12 rounded-full object-cover"
								/>
								<div class="flex flex-col gap-1.5">
									<h5 class="text-base font-bold md:text-xl">
										Still have questions?
									</h5>
									<div class="max-w-[380px]">
										<p class="text-[#636262]">
											Can’t find the answer you’re looking for? Please chat to
											lorem
										</p>
									</div>
								</div>
							</div>
							<div class="mb-6 mt-8 h-[0.5px] w-full bg-[#a6a6a6]"></div>
							<a
								href="#"
								class="inline-block rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
								>Get In Touch</a
							>
						</div>
					</div>
					<!-- FAQ Items -->
					<div class="">
						<div
							class="mb-6 w-full rounded-xl border border-[#c4c4c4] bg-white p-8"
						>
							<div class="mb-5 flex cursor-pointer items-start justify-between">
								<div class="text-xl font-bold">
									What is your policy on distributon
								</div>
								<div
									class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
								>
									<div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
									<div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
								</div>
							</div>
							<div class="mb-4 w-full max-w-[640px] lg:max-w-[960px]">
								<p>
									Pellentesque in nisi aliquet, pellentesque purus eget,
									imperdiet turpis. Fusce at enim quis neque viverra convallis.
									Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim
									ac turpis posuere consectetur. Sed enim nibh, consequat vitae
									lacus eu, ullamcorper ullamcorper massa. Pellentesque purus
									eget, imperdiet turpis.
								</p>
							</div>
						</div>
						<div
							class="mb-6 w-full rounded-xl border border-[#c4c4c4] bg-white p-8"
						>
							<div class="mb-5 flex cursor-pointer items-start justify-between">
								<div class="text-xl font-bold">
									How can I contribute to Flowspark?
								</div>
								<div
									class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
								>
									<div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
									<div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
								</div>
							</div>
							<div class="mb-4 w-full max-w-[640px] lg:max-w-[960px]">
								<p>
									Pellentesque in nisi aliquet, pellentesque purus eget,
									imperdiet turpis. Fusce at enim quis neque viverra convallis.
									Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim
									ac turpis posuere consectetur. Sed enim nibh, consequat vitae
									lacus eu, ullamcorper ullamcorper massa. Pellentesque purus
									eget, imperdiet turpis.
								</p>
							</div>
						</div>
						<div
							class="mb-6 w-full rounded-xl border border-[#c4c4c4] bg-white p-8"
						>
							<div class="mb-5 flex cursor-pointer items-start justify-between">
								<div class="text-xl font-bold">
									What other themes do you have?
								</div>
								<div
									class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
								>
									<div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
									<div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
								</div>
							</div>
							<div class="mb-4 w-full max-w-[640px] lg:max-w-[960px]">
								<p>
									Pellentesque in nisi aliquet, pellentesque purus eget,
									imperdiet turpis. Fusce at enim quis neque viverra convallis.
									Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim
									ac turpis posuere consectetur. Sed enim nibh, consequat vitae
									lacus eu, ullamcorper ullamcorper massa. Pellentesque purus
									eget, imperdiet turpis.
								</p>
							</div>
						</div>
						<div
							class="mb-6 w-full rounded-xl border border-[#c4c4c4] bg-white p-8"
						>
							<div class="mb-5 flex cursor-pointer items-start justify-between">
								<div class="text-xl font-bold">
									What is your policy on distributon
								</div>
								<div
									class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
								>
									<div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
									<div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
								</div>
							</div>
							<div class="mb-4 w-full max-w-[640px] lg:max-w-[960px]">
								<p>
									Pellentesque in nisi aliquet, pellentesque purus eget,
									imperdiet turpis. Fusce at enim quis neque viverra convallis.
									Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim
									ac turpis posuere consectetur. Sed enim nibh, consequat vitae
									lacus eu, ullamcorper ullamcorper massa. Pellentesque purus
									eget, imperdiet turpis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-[#2d6ae0] text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<!-- Component -->
				<div
					class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2"
				>
					<div class="max-w-[720px] md:max-w-lg">
						<h2 class="mb-4 text-3xl font-bold md:text-5xl">
							Organise and Simplify Meetings
						</h2>
						<div class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
							<p class="text-[#c0d6ff]">
								Say goodbye to payment headaches with SecurePay! Our easy-to-use
								payment platform makes it simple for businesses and individuals
								to send and receive payments quickly and securely.
							</p>
						</div>
						<a
							href="https://build.flowspark.co/template"
							target="_blank"
							class="inline-block rounded-[60px] bg-white px-6 py-4 text-center font-bold text-[#2d6ae0] transition hover:bg-[#081631]"
							>More Free Templates</a
						>
					</div>
					<div class="">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0fa7c69acb78897b1e20_Standard%20Image.png"
							alt="Call to action image"
							class="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>

		<footer class="bg-[#1b51b9] text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<!-- Main Footer Content -->
				<div
					class="grid grid-cols-2 justify-between gap-8 sm:grid-cols-3 lg:grid-cols-5"
				>
					<div
						class="flex flex-col space-y-4 py-2 text-sm font-semibold text-[#c0d6ff] transition"
					>
						<div class="my-2 text-base text-white">Solution</div>
						<a href="#" class="hover:font-bold hover:text-white">Marketing</a>
						<a href="#" class="hover:font-bold hover:text-white">Analytics</a>
						<a href="#" class="hover:font-bold hover:text-white">Commerce</a>
						<a href="#" class="hover:font-bold hover:text-white">Insights</a>
					</div>
					<div
						class="flex flex-col space-y-4 py-2 text-sm font-semibold text-[#c0d6ff]"
					>
						<div class="my-2 text-base text-white">Support</div>
						<a href="#" class="hover:font-bold hover:text-white">Pricing</a>
						<a href="#" class="hover:font-bold hover:text-white"
							>Documentation</a
						>
						<a href="#" class="hover:font-bold hover:text-white">Guides</a>
						<a href="#" class="hover:font-bold hover:text-white"
							>API&nbsp;Status</a
						>
					</div>
					<div
						class="flex flex-col space-y-4 py-2 text-sm font-semibold text-[#c0d6ff]"
					>
						<div class="my-2 text-base text-white">Company</div>
						<a href="#" class="hover:font-bold hover:text-white">About</a>
						<a href="#" class="hover:font-bold hover:text-white">Blog</a>
						<a href="#" class="hover:font-bold hover:text-white">Jobs</a>
						<a href="#" class="hover:font-bold hover:text-white">Press</a>
						<a href="#" class="hover:font-bold hover:text-white">Partners</a>
					</div>
					<div
						class="flex flex-col space-y-4 py-2 text-sm font-semibold text-[#c0d6ff]"
					>
						<div class="my-2 text-base text-white">Blog</div>
						<a href="#" class="hover:font-bold hover:text-white">About</a>
						<a href="#" class="hover:font-bold hover:text-white">Blog</a>
						<a href="#" class="hover:font-bold hover:text-white">Jobs</a>
						<a href="#" class="hover:font-bold hover:text-white">Press</a>
						<a href="#" class="hover:font-bold hover:text-white">Partners</a>
					</div>
					<div
						class="flex flex-col space-y-4 py-2 text-sm font-semibold text-[#c0d6ff]"
					>
						<div class="my-2 text-base text-white">Products</div>
						<a href="#" class="hover:font-bold hover:text-white">About</a>
						<a href="#" class="hover:font-bold hover:text-white">Blog</a>
						<a href="#" class="hover:font-bold hover:text-white">Jobs</a>
						<a href="#" class="hover:font-bold hover:text-white">Press</a>
						<a href="#" class="hover:font-bold hover:text-white">Partners</a>
					</div>
				</div>
				<!-- Footer Divider -->
				<div class="mb-14 mt-16 w-full border-b-[1.5px] border-[#3472ed]"></div>
				<!-- Footer Footnotes -->
				<div
					class="flex flex-row items-start justify-between max-[767px]:flex-col max-[479px]:flex-col-reverse md:items-center"
				>
					<div class="max-[991px]:flex-none">
						<p class="text-[#c0d6ff]">© Copyright 2021. All rights reserved.</p>
					</div>
					<div class="space-x-3 py-2 text-center font-semibold">
						<a
							href="#"
							class="inline-block text-[#c0d6ff] transition hover:text-white"
							>Terms of Service</a
						>
						<a
							href="#"
							class="inline-block text-[#c0d6ff] transition hover:text-white"
							>License</a
						>
						<a
							href="#"
							class="inline-block text-[#c0d6ff] transition hover:text-white"
							>Privacy Policy</a
						>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
