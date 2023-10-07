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

		<header
			class="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
			style="
				background-image: url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg');
			"
		>
			<!-- Hero Content -->
			<div class="mx-auto w-full max-w-7xl px-5 md:px-10">
				<!-- Hero Heading -->
				<div
					class="mx-auto mb-8 flex max-w-3xl flex-col items-center py-12 text-center md:mb-12 md:py-16 lg:mb-16 lg:py-20"
				>
					<!-- Heading Text -->
					<h1 class="mb-4 text-4xl font-bold md:text-6xl">
						Simplify Meeting Scheduling
					</h1>
					<div class="mb-5 max-w-[528px] lg:mb-8">
						<p class="text-[#7c8aaa]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
							aliquam, purus sit amet luctus venenatis, lectus
						</p>
					</div>
					<!-- Button Wrap -->
					<div class="flex items-stretch justify-center">
						<a
							href="#"
							class="mr-4 rounded-full bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition hover:bg-[#081631]"
							>Get Started</a
						>
						<a
							href="#"
							class="flex max-w-full flex-row items-center rounded-full bg-[#081631] px-6 py-4 font-bold text-white"
						>
							<div class="mr-2 flex w-5 flex-col items-center">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9972 6.6139 17.0481 4.32631 15.3609 2.63908C13.6737 0.951855 11.3861 0.00275781 9 0ZM12.1532 9.57602L7.9994 12.3452C7.89516 12.4149 7.77397 12.4549 7.64877 12.461C7.52357 12.4671 7.39906 12.4391 7.28854 12.3799C7.17802 12.3208 7.08565 12.2327 7.02128 12.1252C6.95691 12.0176 6.92297 11.8946 6.92308 11.7692V6.23077C6.92297 6.10542 6.95691 5.98239 7.02128 5.87483C7.08565 5.76727 7.17802 5.67921 7.28854 5.62006C7.39906 5.56092 7.52357 5.5329 7.64877 5.53901C7.77397 5.54512 7.89516 5.58512 7.9994 5.65475L12.1532 8.42398C12.2481 8.48719 12.3258 8.57285 12.3796 8.67333C12.4334 8.77382 12.4615 8.88603 12.4615 9C12.4615 9.11397 12.4334 9.22618 12.3796 9.32667C12.3258 9.42715 12.2481 9.5128 12.1532 9.57602Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
							<p class="">Watch Demo</p>
						</a>
					</div>
				</div>
				<!-- Hero Image -->
				<div class="">
					<img
						class="max-h-[416px] rounded-tl-[50px] rounded-tr-[50px] border-[12px] border-[#ffffff1f] object-fill"
						src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0755ed7ed2b1be74354e_image_processing20220429-712-h76k3c%202.png"
						alt="Hero image showing dashboard"
					/>
				</div>
			</div>
		</header>

		<section>
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-5xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<!-- Component -->
				<div
					class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4"
				>
					<div class="mx-auto">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805c69acb78897493e9_Google%20Logo.svg"
							alt=""
							class="inline-block"
						/>
					</div>
					<div class="mx-auto">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f080572fa62a3b4c5d070_PayPal%20Logo.svg"
							alt="Logo image"
							class="inline-block"
						/>
					</div>
					<div class="mx-auto">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805d97ffc4bb7dfea4f_Walmart%20Logo.svg"
							alt="Logo image"
							class="inline-block"
						/>
					</div>
					<div class="mx-auto">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805ef808d1534d401bb_Microsoft%20Logo.svg"
							alt="Logo image"
							class="inline-block"
						/>
					</div>
					<div class="mx-auto">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805caaebba6e23995d7_Chase%20Logo.svg"
							alt="Logo image"
							class="inline-block"
						/>
					</div>
				</div>
			</div>
		</section>

		<section>
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<!-- Component -->
				<div
					class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2"
				>
					<div class="max-w-[720px] lg:max-w-lg">
						<h2 class="mb-4 text-3xl font-bold md:text-5xl">
							Unlock Your Time's Full Potential.
						</h2>
						<div class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
							<p class="text-[#636262]">
								Say goodbye to payment headaches with SecurePay! Our easy-to-use
								payment platform makes it simple for businesses and individuals
								to send and receive payments quickly and securely.
							</p>
						</div>
						<a
							href="#"
							class="inline-block rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
							>Learn More</a
						>
					</div>
					<div class="">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f085a96056651e5e1de02_Column.png"
							alt="features image showing calls and notifications"
							class="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section
			class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
		>
			<!-- Features Container -->
			<div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
				<!-- Features Image -->
				<div class="">
					<img
						src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f09cbc69acb788975ec37_Column.png"
						alt="Feature image showing a group call"
						class="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
					/>
				</div>
				<!-- Features Content -->
				<div class="max-w-[720px] lg:max-w-lg">
					<h2 class="mb-4 text-3xl font-bold md:text-5xl">
						Harness Your Time. Take Charge.
					</h2>
					<div class="lg:mb-12d mb-6 md:mb-10">
						<p class="text-[#636262]">
							Say goodbye to payment headaches with SecurePay! Our easy-to-use
							payment platform makes it simple for businesses and individuals to
							send and receive payments quickly and securely.
						</p>
					</div>
					<a
						href="#"
						class="inline-block rounded-full bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
						>Learn More</a
					>
				</div>
			</div>
		</section>

		<section class="bg-[#020d24] bg-cover bg-center text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<!-- Heading -->
				<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
					<h2 class="text-3xl font-bold md:text-5xl">
						Seamlessly Organize and
						<span class="text-[#2d6ae0]">Prioritize Tasks</span>
					</h2>
					<div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
						<p class="text-[#7c8aaa]">
							Lorem ipsum dolor sit amet consectetur adipiscing
						</p>
					</div>
				</div>
				<!-- Main Content -->
				<div
					class="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch"
				>
					<div class="rounded-xl bg-[#07132d] p-8 md:p-10">
						<div class="flex flex-row items-center justify-between">
							<p
								class="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase"
							>
								Strategy
							</p>
							<div
								class="flex flex-col items-center justify-center text-[#2d6ae0]"
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</div>
						<div class="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
						<div class="flex max-w-lg flex-col items-start gap-3">
							<p class="text-xl font-semibold">Intuitive Calendar Interface</p>
							<p class="text-[#7c8aaa]">
								The XYZ Payment App is a user-friendly mobile application that
								revolutionizes the way you handle your payments and
								transactions. With its intuitive interface and robust
								functionality.
							</p>
						</div>
					</div>
					<div class="rounded-xl bg-[#07132d] p-8 md:p-10">
						<div class="flex flex-row items-center justify-between">
							<p
								class="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase"
							>
								Strategy
							</p>
							<div
								class="flex flex-col items-center justify-center text-[#2d6ae0]"
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</div>
						<div class="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
						<div class="flex max-w-lg flex-col items-start gap-3">
							<p class="text-xl font-semibold">Intuitive Calendar Interface</p>
							<p class="text-[#7c8aaa]">
								The XYZ Payment App is a user-friendly mobile application that
								revolutionizes the way you handle your payments and
								transactions. With its intuitive interface and robust
								functionality.
							</p>
						</div>
					</div>
					<div class="rounded-xl bg-[#07132d] p-8 md:p-10">
						<div class="flex flex-row items-center justify-between">
							<p
								class="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase"
							>
								Strategy
							</p>
							<div
								class="flex flex-col items-center justify-center text-[#2d6ae0]"
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</div>
						<div class="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
						<div class="flex max-w-lg flex-col items-start gap-3">
							<p class="text-xl font-semibold">Intuitive Calendar Interface</p>
							<p class="text-[#7c8aaa]">
								The XYZ Payment App is a user-friendly mobile application that
								revolutionizes the way you handle your payments and
								transactions. With its intuitive interface and robust
								functionality.
							</p>
						</div>
					</div>
					<div class="rounded-xl bg-[#07132d] p-8 md:p-10">
						<div class="flex flex-row items-center justify-between">
							<p
								class="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase"
							>
								Strategy
							</p>
							<div
								class="flex flex-col items-center justify-center text-[#2d6ae0]"
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</div>
						<div class="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]"></div>
						<div class="flex max-w-lg flex-col items-start gap-3">
							<p class="text-xl font-semibold">Intuitive Calendar Interface</p>
							<p class="text-[#7c8aaa]">
								The XYZ Payment App is a user-friendly mobile application that
								revolutionizes the way you handle your payments and
								transactions. With its intuitive interface and robust
								functionality.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<!-- Header -->
				<div
					class="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center md:mb-12 lg:mb-16"
				>
					<p class="text-sm font-semibold uppercase text-[#2d6ae0]">
						3 easy steps
					</p>
					<h2 class="text-3xl font-bold md:text-5xl">How it works</h2>
					<div class="mx-auto my-4 max-w-[528px] md:mb-6 lg:mb-8">
						<p class="text-[#636262]">
							Lorem ipsum dolor sit amet consectetur adipiscing
						</p>
					</div>
				</div>
				<!-- Content -->
				<div
					class="flex flex-col items-start gap-8 md:flex-row-reverse lg:gap-12"
				>
					<!-- Steps -->
					<div class="flex max-w-[496px] flex-1 flex-col items-start">
						<a class="relative mb-8 flex gap-4 p-6">
							<div
								class="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]"
							>
								<p class="font-bold text-[#7c8aaa]">1</p>
							</div>
							<div class="ml-4 flex flex-col gap-2">
								<h5 class="font-bold md:text-xl">Setup your Link</h5>
								<p class="text-[#636262]">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam, purus sit.
								</p>
							</div>
						</a>
						<a class="relative mb-8 flex gap-4 p-6">
							<div
								class="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]"
							>
								<p class="font-bold text-[#7c8aaa]">2</p>
							</div>
							<div class="ml-4 flex flex-col gap-2">
								<h5 class="font-bold md:text-xl">Send Invites</h5>
								<p class="text-[#636262]">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam, purus sit.
								</p>
							</div>
						</a>
						<a class="relative mb-8 flex flex-row gap-4 p-6">
							<div
								class="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]"
							>
								<p class="font-bold text-[#7c8aaa]">3</p>
							</div>
							<div class="ml-4 flex flex-col gap-2">
								<h5 class="font-bold md:text-xl">Get More Sales!</h5>
								<p class="text-[#636262]">
									Lorem ipsum dolor sit amet consectetur adipiscing elit ut
									aliquam, purus sit.
								</p>
							</div>
						</a>
					</div>
					<!-- Image -->
					<div class="flex-1">
						<img
							src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0b14162c5306c7cfdcc9_Rectangle%20106.jpg"
							alt="Image showing dashboard of the app"
							class="inline-block h-full w-full"
						/>
					</div>
				</div>
			</div>
		</section>

		<section
			class="overflow-hidden bg-cover bg-center text-white"
			style="
				background-image: url('https://assets.website-files.com/647e296b89c00bcfafccf696/647f0eb83d065963eeb4cff7_CTA%20Background.png');
				background-color: rgb(2, 13, 36);
			"
		>
			<div
				class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-5 pt-16 md:grid-cols-2 md:gap-4 md:px-10 md:pt-24 lg:grid-cols-[1.25fr_340px_1.25fr] lg:pt-32"
			>
				<!-- Features Section 1 -->
				<div
					class="flex flex-col gap-16 max-[767px]:[grid-area:1/1/2/3] md:gap-24"
				>
					<div class="flex flex-col gap-4">
						<div class="flex flex-row items-center gap-4">
							<div class="rounded-full bg-[#091632] p-2.5">
								<div class="flex">
									<svg
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
											fill="#2D6AE0"
										></path>
									</svg>
								</div>
							</div>
							<div class="max-w-xs md:max-w-[256px]">
								<p class="text-[#7c8aaa]">
									Say goodbye to payment headaches with SecurePay!
								</p>
							</div>
						</div>
						<h3 class="text-2xl font-bold md:text-3xl">
							Maximize Productivity. Organize Your Time.
						</h3>
					</div>
					<div class="flex flex-col gap-4">
						<div class="flex flex-row items-center gap-4">
							<div class="rounded-full bg-[#26bfb61f] p-2.5">
								<div class="flex">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22.5625 11.5938H17.9922C18.8544 10.4151 19.317 8.99158 19.3125 7.53125C19.3098 5.70042 18.5813 3.94535 17.2867 2.65076C15.9921 1.35617 14.2371 0.627686 12.4062 0.625C12.1908 0.625 11.9841 0.710602 11.8317 0.862976C11.6794 1.01535 11.5938 1.22201 11.5938 1.4375V6.00781C10.4151 5.14564 8.99158 4.683 7.53125 4.6875C5.70042 4.69019 3.94535 5.41867 2.65076 6.71326C1.35617 8.00785 0.627686 9.76292 0.625 11.5938C0.625 11.8092 0.710602 12.0159 0.862976 12.1683C1.01535 12.3206 1.22201 12.4062 1.4375 12.4062H6.00781C5.14564 13.5849 4.683 15.0084 4.6875 16.4688C4.69019 18.2996 5.41867 20.0546 6.71326 21.3492C8.00785 22.6438 9.76292 23.3723 11.5938 23.375C11.8092 23.375 12.0159 23.2894 12.1683 23.137C12.3206 22.9847 12.4062 22.778 12.4062 22.5625V17.9922C13.5849 18.8544 15.0084 19.317 16.4688 19.3125C18.2996 19.3098 20.0546 18.5813 21.3492 17.2867C22.6438 15.9921 23.3723 14.2371 23.375 12.4062C23.375 12.1908 23.2894 11.9841 23.137 11.8317C22.9847 11.6794 22.778 11.5938 22.5625 11.5938ZM7.53125 6.3125C8.30767 6.30929 9.07506 6.47897 9.77774 6.80923C10.4804 7.13949 11.1008 7.62204 11.5938 8.22188V10.7812H2.31094C2.50677 9.53694 3.14007 8.4033 4.09698 7.58416C5.05389 6.76502 6.27162 6.31411 7.53125 6.3125ZM16.4688 17.6875C15.6923 17.6907 14.9249 17.521 14.2223 17.1908C13.5196 16.8605 12.8992 16.378 12.4062 15.7781V13.2188H21.6891C21.4932 14.4631 20.8599 15.5967 19.903 16.4158C18.9461 17.235 17.7284 17.6859 16.4688 17.6875Z"
											fill="#26BFB6"
										></path>
									</svg>
								</div>
							</div>
							<div class="max-w-xs md:max-w-[256px]">
								<p class="text-[#7c8aaa]">
									Say goodbye to payment headaches with SecurePay!
								</p>
							</div>
						</div>
						<h3 class="text-2xl font-bold md:text-3xl">
							Maximize Productivity. Organize Your Time.
						</h3>
					</div>
				</div>
				<!-- Image Div -->
				<div
					class="mt-4 h-[560px] w-96 bg-cover bg-[50%_100%] bg-no-repeat object-contain max-[1024px]:bg-contain max-[1024px]:[grid-area:2/1/3/3] max-[767px]:[grid-area:3/1/4/3] sm:w-full md:mt-12"
					style="
						background-image: url('https://assets.website-files.com/647e296b89c00bcfafccf696/647f0d7d8d8a9aeef1309dd5_image%2010.png');
					"
				></div>
				<!-- Features Section 2 -->
				<div
					class="flex flex-col gap-16 max-[767px]:[grid-area:2/1/3/3] md:gap-24"
				>
					<!-- Feature 1 -->
					<div class="flex flex-col gap-4 text-left md:items-end md:text-right">
						<div
							class="flex flex-row items-center gap-4 pr-0 md:flex-row-reverse"
						>
							<div class="rounded-full bg-[#ff5c461f] p-2.5">
								<div class="flex">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22.5625 11.5938H17.9922C18.8544 10.4151 19.317 8.99158 19.3125 7.53125C19.3098 5.70042 18.5813 3.94535 17.2867 2.65076C15.9921 1.35617 14.2371 0.627686 12.4062 0.625C12.1908 0.625 11.9841 0.710602 11.8317 0.862976C11.6794 1.01535 11.5938 1.22201 11.5938 1.4375V6.00781C10.4151 5.14564 8.99158 4.683 7.53125 4.6875C5.70042 4.69019 3.94535 5.41867 2.65076 6.71326C1.35617 8.00785 0.627686 9.76292 0.625 11.5938C0.625 11.8092 0.710602 12.0159 0.862976 12.1683C1.01535 12.3206 1.22201 12.4062 1.4375 12.4062H6.00781C5.14564 13.5849 4.683 15.0084 4.6875 16.4688C4.69019 18.2996 5.41867 20.0546 6.71326 21.3492C8.00785 22.6438 9.76292 23.3723 11.5938 23.375C11.8092 23.375 12.0159 23.2894 12.1683 23.137C12.3206 22.9847 12.4062 22.778 12.4062 22.5625V17.9922C13.5849 18.8544 15.0084 19.317 16.4688 19.3125C18.2996 19.3098 20.0546 18.5813 21.3492 17.2867C22.6438 15.9921 23.3723 14.2371 23.375 12.4062C23.375 12.1908 23.2894 11.9841 23.137 11.8317C22.9847 11.6794 22.778 11.5938 22.5625 11.5938ZM7.53125 6.3125C8.30767 6.30929 9.07506 6.47897 9.77774 6.80923C10.4804 7.13949 11.1008 7.62204 11.5938 8.22188V10.7812H2.31094C2.50677 9.53694 3.14007 8.4033 4.09698 7.58416C5.05389 6.76502 6.27162 6.31411 7.53125 6.3125ZM16.4688 17.6875C15.6923 17.6907 14.9249 17.521 14.2223 17.1908C13.5196 16.8605 12.8992 16.378 12.4062 15.7781V13.2188H21.6891C21.4932 14.4631 20.8599 15.5967 19.903 16.4158C18.9461 17.235 17.7284 17.6859 16.4688 17.6875Z"
											fill="#FF5C46"
										></path>
									</svg>
								</div>
							</div>
							<div class="max-w-xs md:max-w-[256px]">
								<p class="text-[#7c8aaa]">
									Say goodbye to payment headaches with SecurePay!
								</p>
							</div>
						</div>
						<h3 class="text-2xl font-bold md:text-3xl">
							Maximize Productivity. Organize Your Time.
						</h3>
					</div>
					<!-- Feature 2 -->
					<div class="flex flex-col gap-4 text-left md:items-end md:text-right">
						<div
							class="flex flex-row items-center gap-4 pr-0 md:flex-row-reverse"
						>
							<div class="rounded-full bg-[#e8157a1f] p-2.5">
								<div class="flex">
									<svg
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
											fill="#E8157A"
										></path>
									</svg>
								</div>
							</div>
							<div class="max-w-xs md:max-w-[256px]">
								<p class="text-[#7c8aaa]">
									Say goodbye to payment headaches with SecurePay!
								</p>
							</div>
						</div>
						<h3 class="text-2xl font-bold md:text-3xl">
							Maximize Productivity. Organize Your Time.
						</h3>
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
