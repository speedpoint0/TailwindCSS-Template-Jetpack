<template>
  <div>
    <!-- Newsletter Standard -->
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
            class="w-full flex flex-row flex-wrap justify-center items-center mt-12 inter rounded-md relative max-w-[400px] md:max-w-[450px] mx-auto lg:mx-0"
          >
            <input
              class="px-6 py-4 border font-inter text-center md:text-left border-gray-800 w-full rounded-md"
              type="email"
              placeholder="Enter your email"
              id="email"
            />

            <button
              type="submit"
              class="px-6 py-4 mt-6 font-inter right-0 top-0 text-white border border-gray-800 bg-black w-full rounded-md max-w-[400px] md:mt-0 md:ml-6 md:w-auto md:absolute md:py-3 md:right-1 md:top-1 hover:bg-gray-800 hover:border-gray-400"
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

    <!-- Newsletter 2 Cols -->
    <section class="py-20 px-6">
      <div
        class="max-w-[1186px] relative rounded-md bg-[#E7E7E7] mx-auto flex flex-col lg:flex-row items-center justify-center py-12 px-10 lg:items-start lg:py-20 lg:px-20 lg:justify-between"
      >
        <!-- TEXT SECTION -->
        <div class="max-w-[650px] lg:mr-10">
          <h1
            class="text-4xl text-center lg:text-3xl font-bold leading-[55px] text-black lg:text-left"
          >
            Join the Devjoy Community
          </h1>

          <p
            class="text-gray-600 mt-4 font-inter text-center lg:text-left leading-[30px]"
          >
            Find out how to build better and faster with Devjoy
          </p>
        </div>

        <!-- FORM SECTION -->
        <div>
          <form action="" class="mt-14 lg:mt-0">
            <div class="relative">
              <input
                class="px-6 py-4 border font-inter text-center md:text-left border-gray-800 w-full lg:w-[490px] rounded-md"
                type="email"
                placeholder="Enter your email"
                id="email"
              />

              <button
                type="submit"
                class="px-6 py-4 mt-6 font-inter right-0 top-0 text-white border border-gray-800 bg-black w-full rounded-md max-w-[400px] md:mt-0 md:ml-6 md:w-auto md:absolute md:py-3 md:right-1 md:top-1 hover:bg-gray-800 hover:border-gray-400"
              >
                Subscribe
              </button>
            </div>
          </form>

          <p
            class="text-gray-800 mt-6 font-light font-inter text-center lg:text-right"
          >
            Join a community of over
            <span class="font-bold underline">5000+ developers</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
