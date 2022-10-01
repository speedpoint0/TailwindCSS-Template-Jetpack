<template>
  <div>
    <!-- CTA Standard -->
    <section class="py-12">
      <div
        class="w-[90%] max-w-[1186px] bg-[#E7E7E7] rounded-md mx-auto flex flex-col justify-center items-center py-20 px-10"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="max-w-[650px]">
            <h1
              class="text-4xl text-center md:text-5xl font-bold leading-[55px] md:leading-[72px] text-black"
            >
              Build Better and Faster With Devjoy
            </h1>
          </div>

          <div class="flex flex-col lg:flex-row my-14">
            <!-- ITEM 1  -->
            <div class="flex flex-row my-2 lg:mr-10 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="black"
                />
              </svg>

              <p class="text-gray-800 text-xl ml-3">500+ Components</p>
            </div>

            <div class="flex flex-row my-2 lg:mr-10 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="black"
                />
              </svg>
              <p class="text-gray-800 text-xl ml-3">Live In Seconds</p>
            </div>

            <div class="flex flex-row my-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="black"
                />
              </svg>
              <p class="text-gray-800 text-xl ml-3">Fully Responsive</p>
            </div>
          </div>

          <button
            class="px-6 py-4 font-inter text-base text-white bg-black rounded-[6px]"
          >
            Get Started
          </button>

          <p class="mt-6 text-[#71717A] font-inter font-light">
            No credit card required
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Email -->
    <section class="py-12">
      <div
        class="w-[90%] max-w-[1186px] bg-[#E7E7E7] rounded-md mx-auto py-20 px-10"
      >
        <div
          class="max-w-[650px] flex flex-col justify-center items-center mx-auto"
        >
          <h1
            class="text-4xl text-center md:text-5xl font-bold leading-[55px] md:leading-[72px] text-black"
          >
            Join the Devjoy Community
          </h1>

          <p
            class="font-inter font-light text-center px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>

          <!-- EMAIL DIV -->
          <form
            action=""
            id="hero-form"
            class="w-full flex flex-row flex-wrap justify-center items-center mt-12 inter text-base rounded-md relative max-w-[400px] md:max-w-[450px] mx-auto lg:mx-0"
          >
            <input
              class="px-6 py-4 border font-inter text-base text-center md:text-left border-gray-800 w-full rounded-md"
              type="email"
              placeholder="Enter your email"
              id="email"
            />

            <button
              type="submit"
              class="px-6 py-4 mt-6 font-inter text-base right-0 top-0 text-white border border-gray-800 bg-black w-full rounded-md max-w-[400px] md:mt-0 md:ml-6 md:w-auto md:absolute md:py-3 md:right-1 md:top-1 hover:bg-gray-800 hover:border-gray-400"
            >
              Subscribe
            </button>
          </form>
          <p
            class="font-inter font-light text-[14px] text-center px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
          >
            No spam, just quality pixels.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Hero -->
    <section class="py-12">
      <div class="w-screen">
        <header
          class="w-full max-w-[1600px] flex flex-col justify-center items-center mx-auto px-6 mt-14 lg:px-10 lg:flex-row lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:mr-12">
            <h1
              class="text-4xl md:text-5xl font-bold leading-[55px] md:leading-[72px] text-black text-center lg:text-left"
            >
              Ready to dive in? Start your free trial today.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px] mx-auto lg:mx-0"
            >
              Use premium tailwindcss components to ship your product faster to
              your customers. Build better and faster with Devjoy
            </p>

            <div
              class="flex flex-row flex-wrap justify-center lg:justify-start items-center mt-12"
            >
              <button
                class="px-6 py-4 font-inter text-base text-white bg-black w-full rounded-[6px] max-w-[400px] md:w-auto"
              >
                Try it out
              </button>
            </div>
          </div>

          <!-- PLACEHOLDER IMAGE -->
          <div
            class="w-full h-full mt-16 max-w-[650px] lg:max-w-[600px] 2xl:max-w-[650px] lg:mt-0"
          >
            <svg
              class="w-full h-full"
              viewBox="0 0 568 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="568" height="500" fill="#C4C4C4" />
              <path
                d="M280.5 247C281.328 247 282 246.328 282 245.5C282 244.672 281.328 244 280.5 244C279.672 244 279 244.672 279 245.5C279 246.328 279.672 247 280.5 247Z"
                fill="black"
              />
              <path
                d="M294 238H274C273.47 238.001 272.961 238.211 272.587 238.586C272.212 238.961 272.001 239.47 272 240V255.997L272 256.001L272 260C272.001 260.53 272.212 261.039 272.587 261.413C272.961 261.788 273.47 261.999 274 262H294C294.53 261.999 295.039 261.788 295.414 261.413C295.789 261.039 295.999 260.53 296 260V240C295.999 239.47 295.789 238.961 295.414 238.586C295.039 238.211 294.53 238.001 294 238ZM290.414 248C290.039 247.625 289.53 247.415 289 247.415C288.47 247.415 287.961 247.625 287.586 248L282 253.586L279.414 251C279.039 250.626 278.53 250.415 278 250.415C277.47 250.415 276.961 250.626 276.586 251L274 253.586V240H294L294.001 251.586L290.414 248Z"
                fill="black"
              />
            </svg>
          </div>
        </header>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
