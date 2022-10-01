<template>
  <div>
    <!-- Sign In - 2 Col -->
    <section>
      <!-- REPLACE lg:h-[900px] with lg:h-full in production -->
      <div
        class="flex flex-col lg:flex-row lg:w-screen lg:h-[900px] items-center justify-center"
      >
        <!-- LOGIN DIV -->
        <div
          class="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-14 lg:py-32"
        >
          <h1
            class="text-4xl text-center md:text-[52px] font-bold leading-[55px] md:leading-[72px] text-black max-w-[500px] md:font-black"
          >
            Start your
            <span class="relative">14 day free trial </span>
            now
          </h1>

          <form action="" class="w-full max-w-[380px]">
            <div class="relative mb-5 mt-12">
              <input
                type="email"
                placeholder="Email"
                class="w-full py-4 px-16 rounded-md font-inter border border-[#E4E4E7] border-solid"
              />
              <svg
                class="absolute top-[17px] left-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="relative mb-5">
              <input
                type="password"
                placeholder="Password (min 8 characters)"
                class="w-full py-4 px-16 rounded-md font-inter border border-[#E4E4E7] border-solid"
              />
              <svg
                class="absolute top-[17px] left-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="flex flex-row items-center relative left-2">
              <input type="checkbox" class="w-4 h-4 rounded-md" />
              <span class="text-gray-400 font-inter text-sm ml-2"
                >I agree with
                <a href="" class="text-black"> Terms & Conditions</a></span
              >
            </div>

            <button
              type="submit"
              class="mt-12 mb-6 w-full px-6 py-4 font-inter text-base text-white bg-black rounded-md"
            >
              Join Devjoy
            </button>

            <p class="text-gray-400 font-inter text-center">
              Already have an account?
              <a href="" class="text-black"> Login now</a>
            </p>
          </form>
        </div>

        <!-- QUOTE DIV -->
        <div
          class="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#F2F2F2] px-6 py-14 lg:py-32 lg:h-full -z-20"
        >
          <div class="max-w-[650px] relative">
            <svg
              class="absolute -z-10 top-2 -left-5"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1863 64.9538C13.3238 60.8513 11.25 56.25 11.25 48.7913C11.25 35.6663 20.4637 23.9026 33.8625 18.0863L37.2113 23.2538C24.705 30.0188 22.26 38.7976 21.285 44.3325C23.2987 43.29 25.935 42.9263 28.5187 43.1663C35.2837 43.7925 40.6162 49.3463 40.6162 56.25C40.6162 59.731 39.2334 63.0694 36.772 65.5308C34.3106 67.9922 30.9722 69.375 27.4912 69.375C23.4675 69.375 19.62 67.5375 17.1863 64.9538ZM54.6862 64.9538C50.8237 60.8513 48.75 56.25 48.75 48.7913C48.75 35.6663 57.9637 23.9026 71.3625 18.0863L74.7112 23.2538C62.205 30.0188 59.76 38.7976 58.785 44.3325C60.7987 43.29 63.435 42.9263 66.0187 43.1663C72.7837 43.7925 78.1162 49.3463 78.1162 56.25C78.1162 59.731 76.7334 63.0694 74.272 65.5308C71.8106 67.9922 68.4722 69.375 64.9912 69.375C60.9675 69.375 57.12 67.5375 54.6862 64.9538Z"
                fill="white"
              />
            </svg>

            <p
              class="font-sm font-inter text-center mb-2 lg:text-left lg:text-base lg:font-medium lg:mb-3"
            >
              TESTIMONIAL
            </p>

            <p
              class="z-20 font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px] mx-auto lg:mx-0"
            >
              "Devjoy has helped reduced my development and design time
              massively. All I have to do is find the component I want and then
              copy and paste the code"
            </p>

            <div
              class="flex flex-col flex-wrap items-center lg:items-start mt-10"
            >
              <div class="flex flex-row items-center">
                <img
                  class="w-[60px] h-[60px]"
                  src="https://firebasestorage.googleapis.com/v0/b/tailwindfolio.appspot.com/o/templates%2Fassets%2FEllipse%205%20(2).svg?alt=media&token=e3cbbdd8-1b27-403b-bc5e-541298849b74"
                  alt=""
                />
                <div class="flex flex-col ml-4">
                  <h2 class="font-bold text-xl mb-1">Laila Bahar</h2>
                  <p class="font-light text-base font-inter text-gray-500">
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sign In - Vertical -->
    <section class="py-20 px-6">
      <!-- LOGIN DIV -->
      <div
        class="flex flex-col items-center justify-center max-w-[1186px] bg-[#F2F2F2] rounded-md py-20 px-10 mx-auto"
      >
        <h1
          class="text-4xl text-center md:text-[52px] font-bold leading-[55px] md:leading-[72px] text-black max-w-[500px] md:font-black"
        >
          Start your
          <span class="relative">14 day free trial </span>
          now
        </h1>

        <p
          class="text-gray-500 text-base mt-4 font-light font-inter max-w-[350px] text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut al
        </p>

        <a
          href=""
          class="flex flex-row items-center justify-center w-full py-4 px-16 rounded-md font-inter font-medium border border-black text-black border-solid max-w-[380px] mt-12"
        >
          <svg
            class="mr-3"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9273 9.14743C17.8815 8.67993 17.4873 8.33158 17.0198 8.33158H10.099C9.59479 8.33158 9.18229 8.74408 9.18229 9.24825V10.8158C9.18229 11.3199 9.59479 11.7324 10.099 11.7324H14.2331C14.1323 12.5758 13.5823 13.8499 12.3631 14.7024C11.584 15.2433 10.5481 15.6191 9.18229 15.6191C9.11812 15.6191 9.06313 15.6191 8.99896 15.6099C6.66146 15.5366 4.68146 13.9691 3.96646 11.8149C3.77396 11.2374 3.66396 10.6324 3.66396 9.99992C3.66396 9.36742 3.77396 8.75324 3.95729 8.18491C4.01229 8.01991 4.07646 7.85493 4.14979 7.68993C4.99313 5.79243 6.83563 4.45409 8.99896 4.38992C9.05396 4.38076 9.11812 4.38075 9.18229 4.38075C10.4931 4.38075 11.474 4.81157 12.1615 5.28824C12.519 5.53574 12.9956 5.48074 13.3073 5.17824L14.5815 3.93159C14.9848 3.53742 14.9481 2.86824 14.4898 2.53824C13.0323 1.46574 11.254 0.833252 9.18229 0.833252C9.11812 0.833252 9.06313 0.833261 8.99896 0.842428C5.48813 0.906594 2.47229 2.94159 0.996458 5.88409C0.373125 7.13076 0.015625 8.52409 0.015625 9.99992C0.015625 11.4758 0.373125 12.8691 0.996458 14.1157H1.00563C2.48146 17.0582 5.49729 19.0932 8.99896 19.1574C9.06313 19.1666 9.11812 19.1666 9.18229 19.1666C11.6573 19.1666 13.7381 18.3507 15.2506 16.9482C16.9831 15.3441 17.9823 12.9974 17.9823 10.2016C17.9823 9.80742 17.964 9.46826 17.9273 9.14743Z"
              fill="black"
            />
          </svg>

          Sign up with Google</a
        >

        <div
          class="w-full max-w-[100px] border border-black my-10 opacity-10"
        ></div>

        <form action="" class="w-full max-w-[380px]">
          <div class="relative mb-5">
            <input
              type="email"
              placeholder="Email"
              class="w-full py-4 px-16 rounded-md font-inter border border-[#E4E4E7] border-solid"
            />
            <svg
              class="absolute top-[17px] left-7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#A1A1AA"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="#A1A1AA"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="relative mb-5">
            <input
              type="password"
              placeholder="Password (min 8 characters)"
              class="w-full py-4 px-16 rounded-md font-inter border border-[#E4E4E7] border-solid"
            />
            <svg
              class="absolute top-[17px] left-7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                stroke="#A1A1AA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                stroke="#A1A1AA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                stroke="#A1A1AA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="flex flex-row items-center relative left-2">
            <input type="checkbox" class="w-4 h-4 rounded-md" />
            <span class="text-gray-400 font-inter text-sm ml-2"
              >I agree with
              <a href="" class="text-black"> Terms & Conditions</a></span
            >
          </div>

          <button
            type="submit"
            class="mt-12 mb-6 w-full px-6 py-4 font-inter text-base text-white bg-black rounded-md"
          >
            Join Devjoy
          </button>

          <p class="text-gray-400 font-inter text-center">
            Already have an account?
            <a href="" class="text-black"> Login now</a>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
