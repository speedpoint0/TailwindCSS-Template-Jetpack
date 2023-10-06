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
						<a href="#">
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
								href="https://flowspark-quantumcal.webflow.io/"
								class="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
								>Home</a
							>
							<a
								href="https://flowspark-quantumcal.webflow.io/pricing"
								class="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
								>Pricing</a
							>
							<a
								href="https://flowspark-quantumcal.webflow.io/blog"
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
								href="https://flowspark.co/designs"
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
				background-image: url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a98_Blog%20Background.svg');
			"
		>
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<!-- Component -->
				<div class="flex flex-col items-center">
					<!-- Component Heading -->
					<div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
						<h2 class="text-3xl font-bold md:text-5xl">
							The latest and greatest news
						</h2>
						<div class="mx-auto mt-4 max-w-[528px]">
							<p class="text-[#7c8aaa]">
								Lorem ipsum dolor sit amet elit ut aliquam
							</p>
						</div>
					</div>
					<!-- Component Content -->
					<div
						class="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 lg:mb-20"
					>
						<!-- Blog Items -->
						<a
							href="#"
							class="flex flex-col gap-4 rounded-md bg-[#07132d] px-4 py-8 text-white md:p-4"
						>
							<!-- Blog Image -->
							<div class="relative h-full w-full">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f192ba0d7c5ba825bfb1d_Rectangle%20135.png"
									alt="Blog Post Image"
									class="inline-block h-60 w-full rounded-md object-cover"
								/>
								<div
									class="absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#2d6ae0]"
								>
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
										alt="Blog Icon Image"
									/>
								</div>
							</div>
							<!-- Blog Content -->
							<div class="flex w-full flex-col items-start gap-5">
								<div
									class="rounded-lg bg-[#2d6ae01a] px-2 py-1.5 text-[#2d6ae0]"
								>
									<p class="font-semibold">Management</p>
								</div>
								<p class="font-bold">
									Master Your Day: How Flowspark Can Revolutionize Your
									Productivity
								</p>
								<div class="h-px w-full bg-black"></div>
								<div class="flex flex-row items-center">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f199aace38f441338d062_Ellipse%2015.png"
										alt="Blog Author Image"
										class="mr-4 inline-block h-8 w-8 rounded-full"
									/>
									<div class="flex flex-row items-center">
										<h6 class="mr-3 text-sm font-bold md:m-0 md:text-base">
											Jessica Smith
										</h6>
										<div class="flex items-start lg:items-center">
											<p
												class="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden"
											>
												-
											</p>
											<p class="text-sm font-medium text-[#7c8aaa]">
												6 mins read
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
						<!-- Blog Items -->
						<a
							href="#"
							class="flex flex-col gap-4 rounded-md bg-[#07132d] px-4 py-8 text-white md:p-4"
						>
							<!-- Blog Image -->
							<div class="relative h-full w-full">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f192b39fa55203298622b_Rectangle%20135-1.png"
									alt="Blog Post Image"
									class="inline-block h-60 w-full rounded-md object-cover"
								/>
								<div
									class="absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#ffce50]"
								>
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
										alt="Blog Icon Image"
									/>
								</div>
							</div>
							<!-- Blog Content -->
							<div class="flex w-full flex-col items-start gap-5">
								<div
									class="rounded-lg bg-[#b984121a] px-2 py-1.5 text-[#e7ac2f]"
								>
									<p class="font-semibold">Management</p>
								</div>
								<div class="font-bold">
									Master Your Day: How Flowspark Can Revolutionize Your
									Productivity
								</div>
								<div class="h-px w-full bg-black"></div>
								<div class="flex flex-row items-center">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f199ab66979935fa34903_Ellipse%2015-1.png"
										alt="Blog Author Image"
										class="mr-4 inline-block h-8 w-8 rounded-full"
									/>
									<div class="flex flex-row items-center">
										<h6 class="mr-3 text-sm font-bold md:m-0 md:text-base">
											Jessica Smith
										</h6>
										<div class="flex items-start lg:items-center">
											<p
												class="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden"
											>
												-
											</p>
											<p class="text-sm font-medium text-[#7c8aaa]">
												6 mins read
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
						<!-- Blog Items -->
						<a
							href="#"
							class="flex flex-col gap-4 rounded-md bg-[#07132d] px-4 py-8 text-white md:p-4"
						>
							<!-- Blog Image -->
							<div class="relative h-full w-full">
								<img
									src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f192b7fd9f9fcf98f014a_Rectangle%20135-2.png"
									alt="Blog Post Image"
									class="inline-block h-60 w-full rounded-md object-cover"
								/>
								<div
									class="just absolute bottom-[-10%] right-[8%] flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#38c5d0]"
								>
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647e2bc55406ff0f6d8d2f1c_Vector.svg"
										alt="Blog Icon Image"
									/>
								</div>
							</div>
							<!-- Blog Content -->
							<div class="flex w-full flex-col items-start gap-5">
								<div
									class="rounded-lg bg-[#31b3d21f] px-2 py-1.5 text-[#31b3d2]"
								>
									<p class="font-semibold">Management</p>
								</div>
								<div class="font-bold">
									Master Your Day: How Flowspark Can Revolutionize Your
									Productivity
								</div>
								<div class="h-px w-full bg-black"></div>
								<div class="flex flex-row items-center">
									<img
										src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1999f67c0926f8b9ecfc_Ellipse%2015-2.png"
										alt="Blog Author Image"
										class="mr-4 inline-block h-8 w-8 rounded-full"
									/>
									<div class="flex flex-row items-center">
										<h6 class="mr-3 text-sm font-bold md:m-0 md:text-base">
											Jessica Smith
										</h6>
										<div class="flex items-start lg:items-center">
											<p
												class="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden"
											>
												-
											</p>
											<p class="text-sm font-medium text-[#7c8aaa]">
												6 mins read
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<a
						href="#"
						class="rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
						>Check All&nbsp;Reviews</a
					>
				</div>
			</div>
		</section>

		<section
			class="block bg-[#020d24] bg-cover bg-center text-white"
			style="
				background-image: url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a9f_Join%20CTA%20Background.svg');
			"
		>
			<div class="px-5 py-16 md:px-10 md:py-24 lg:py-32">
				<div
					class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center"
				>
					<div class="mb-6 max-w-[720px] md:mb-10 lg:mb-12 lg:max-w-[800px]">
						<h1 class="mb-4 text-4xl font-bold md:text-6xl">
							Join the Flowspark community
						</h1>
						<div class="mx-auto max-w-[630px]">
							<p class="text-[#7c8aaa]">
								Lorem ipsum dolor sit amet consectetur adipiscing
							</p>
						</div>
					</div>
					<div class="flex flex-wrap items-center justify-center gap-4">
						<a
							href="#"
							class="flex max-w-full flex-row items-center justify-start gap-4 rounded-full bg-[#07132d] px-8 py-5 font-bold text-[#7c8aaa] transition hover:text-white"
						>
							<img
								src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1d17434dca744efe218e_Vector.png"
								alt="Twitter Icon"
								class="inline-block w-6"
							/>
							<p class="">Twitter</p>
						</a>
						<a
							href="#"
							class="flex max-w-full flex-row items-center justify-start gap-4 rounded-full bg-[#07132d] px-8 py-5 font-bold text-[#7c8aaa] transition hover:text-white"
						>
							<img
								src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1d1739fa5520329c82de_Vector-1.png"
								alt="Discord Icon"
								class="inline-block w-6"
							/>
							<p class="">Discord</p>
						</a>
						<a
							href="#"
							class="flex max-w-full flex-row items-center justify-start gap-4 rounded-full bg-[#07132d] px-8 py-5 font-bold text-[#7c8aaa] transition hover:text-white"
						>
							<img
								src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1d0dc3a358f7fc440fb0_Vector-2.png"
								alt="Snapchat Icon"
								class="inline-block w-6"
							/>
							<p class="">Snapchat</p>
						</a>
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
