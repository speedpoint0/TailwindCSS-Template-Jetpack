<template>
  <div>
    <!-- Contact Standard -->
    <section class="py-20 px-6">
      <!-- CONTACT DIV -->
      <div
        class="flex flex-col items-center justify-center max-w-[1186px] bg-[#F2F2F2] rounded-md py-20 px-10 mx-auto"
      >
        <!-- TEXT DIV -->
        <div
          class="max-w-[550px] lg:max-w-[800px] flex flex-col items-center justify-center px-6 lg:px-10 mx-auto text-center"
        >
          <h1
            class="text-black text-center font-bold text-[32px] leading-[45px] lg:text-[40px] lg:leading-[52px] mx-auto"
          >
            Contact Sales
          </h1>

          <p
            class="font-inter text-base font-light text-center px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
        </div>

        <form action="" class="w-full max-w-[578px] mt-10">
          <!-- FIRST & LAST INPUTS  -->
          <div class="flex flex-col lg:flex-row">
            <div class="mr-3">
              <label for="first" class="text-sm text-gray-500 font-inter"
                >First Name</label
              >
              <input
                name="first"
                type="text"
                class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid"
              />
            </div>

            <div class="ml-3">
              <label for="last" class="text-sm text-gray-500 font-inter"
                >Last Name</label
              >
              <input
                name="last"
                type="text"
                class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid"
              />
            </div>
          </div>

          <label for="website" class="text-sm text-gray-500 font-inter"
            >Company Website</label
          >
          <input
            name="website"
            type="text"
            class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid"
          />

          <label for="email" class="text-sm text-gray-500 font-inter"
            >Email</label
          >
          <input
            name="email"
            type="email"
            class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid"
          />

          <label for="message" class="text-sm text-gray-500 font-inter"
            >Message</label
          >
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid"
          ></textarea>

          <div class="flex flex-row items-center relative left-2">
            <input type="checkbox" class="w-4 h-4 rounded-md" />
            <span class="text-gray-400 font-inter text-sm ml-2"
              >I agree with the
              <a href="" class="text-black"> Terms & Conditions</a></span
            >
          </div>

          <button
            type="submit"
            class="mt-12 mb-6 w-full px-6 py-4 font-inter text-base text-white bg-black rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>

    <!-- Contact 2 Col with Testimonial -->
    <section class="py-20 px-6">
      <div
        class="flex flex-col lg:flex-row lg:w-screen max-w-[1246px] mx-auto lg:px-5"
      >
        <!-- LEFT CONTAINER -->
        <div
          class="w-full lg:basis-[45%] flex flex-col items-center lg:items-start mb-20 lg:mb-0 lg:mr-12"
        >
          <h1
            class="text-4xl text-center md:text-[46px] font-black leading-[55px] md:leading-[60px] text-black max-w-[500px] lg:text-left"
          >
            It's time to build
            <span class="relative">something exciting! </span>
          </h1>

          <div
            class="max-w-[650px] flex flex-col items-center justify-center lg:items-start"
          >
            <!-- STARS -->
            <div class="flex flex-row mb-0 mt-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.633 2.59927L11.8767 5.15579C12.0471 5.50669 12.5025 5.85542 12.8887 5.91957L15.1861 6.33147C16.6573 6.59199 16.984 7.66285 15.9186 8.71074L14.1041 10.4855C13.8011 10.7829 13.6211 11.3713 13.7148 11.7865L14.2013 14.0134C14.5836 15.7714 13.6462 16.4427 12.1096 15.5084L9.96304 14.2032C9.57214 13.9646 8.93147 13.9628 8.54073 14.1871L6.36664 15.438C4.81037 16.332 3.88608 15.6413 4.30886 13.8939L4.84887 11.6827C4.94972 11.2694 4.79092 10.6769 4.49345 10.3739L2.70864 8.55611C1.66743 7.48731 2.01826 6.42472 3.49237 6.19551L5.794 5.83926C6.18261 5.77594 6.64634 5.44706 6.82146 5.09689L8.12379 2.56465C8.83459 1.2008 9.96171 1.21573 10.633 2.59927Z"
                  fill="#F6AD1B"
                />
              </svg>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.633 2.59927L11.8767 5.15579C12.0471 5.50669 12.5025 5.85542 12.8887 5.91957L15.1861 6.33147C16.6573 6.59199 16.984 7.66285 15.9186 8.71074L14.1041 10.4855C13.8011 10.7829 13.6211 11.3713 13.7148 11.7865L14.2013 14.0134C14.5836 15.7714 13.6462 16.4427 12.1096 15.5084L9.96304 14.2032C9.57214 13.9646 8.93147 13.9628 8.54073 14.1871L6.36664 15.438C4.81037 16.332 3.88608 15.6413 4.30886 13.8939L4.84887 11.6827C4.94972 11.2694 4.79092 10.6769 4.49345 10.3739L2.70864 8.55611C1.66743 7.48731 2.01826 6.42472 3.49237 6.19551L5.794 5.83926C6.18261 5.77594 6.64634 5.44706 6.82146 5.09689L8.12379 2.56465C8.83459 1.2008 9.96171 1.21573 10.633 2.59927Z"
                  fill="#F6AD1B"
                />
              </svg>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.633 2.59927L11.8767 5.15579C12.0471 5.50669 12.5025 5.85542 12.8887 5.91957L15.1861 6.33147C16.6573 6.59199 16.984 7.66285 15.9186 8.71074L14.1041 10.4855C13.8011 10.7829 13.6211 11.3713 13.7148 11.7865L14.2013 14.0134C14.5836 15.7714 13.6462 16.4427 12.1096 15.5084L9.96304 14.2032C9.57214 13.9646 8.93147 13.9628 8.54073 14.1871L6.36664 15.438C4.81037 16.332 3.88608 15.6413 4.30886 13.8939L4.84887 11.6827C4.94972 11.2694 4.79092 10.6769 4.49345 10.3739L2.70864 8.55611C1.66743 7.48731 2.01826 6.42472 3.49237 6.19551L5.794 5.83926C6.18261 5.77594 6.64634 5.44706 6.82146 5.09689L8.12379 2.56465C8.83459 1.2008 9.96171 1.21573 10.633 2.59927Z"
                  fill="#F6AD1B"
                />
              </svg>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.633 2.59927L11.8767 5.15579C12.0471 5.50669 12.5025 5.85542 12.8887 5.91957L15.1861 6.33147C16.6573 6.59199 16.984 7.66285 15.9186 8.71074L14.1041 10.4855C13.8011 10.7829 13.6211 11.3713 13.7148 11.7865L14.2013 14.0134C14.5836 15.7714 13.6462 16.4427 12.1096 15.5084L9.96304 14.2032C9.57214 13.9646 8.93147 13.9628 8.54073 14.1871L6.36664 15.438C4.81037 16.332 3.88608 15.6413 4.30886 13.8939L4.84887 11.6827C4.94972 11.2694 4.79092 10.6769 4.49345 10.3739L2.70864 8.55611C1.66743 7.48731 2.01826 6.42472 3.49237 6.19551L5.794 5.83926C6.18261 5.77594 6.64634 5.44706 6.82146 5.09689L8.12379 2.56465C8.83459 1.2008 9.96171 1.21573 10.633 2.59927Z"
                  fill="#F6AD1B"
                />
              </svg>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.633 2.59927L11.8767 5.15579C12.0471 5.50669 12.5025 5.85542 12.8887 5.91957L15.1861 6.33147C16.6573 6.59199 16.984 7.66285 15.9186 8.71074L14.1041 10.4855C13.8011 10.7829 13.6211 11.3713 13.7148 11.7865L14.2013 14.0134C14.5836 15.7714 13.6462 16.4427 12.1096 15.5084L9.96304 14.2032C9.57214 13.9646 8.93147 13.9628 8.54073 14.1871L6.36664 15.438C4.81037 16.332 3.88608 15.6413 4.30886 13.8939L4.84887 11.6827C4.94972 11.2694 4.79092 10.6769 4.49345 10.3739L2.70864 8.55611C1.66743 7.48731 2.01826 6.42472 3.49237 6.19551L5.794 5.83926C6.18261 5.77594 6.64634 5.44706 6.82146 5.09689L8.12379 2.56465C8.83459 1.2008 9.96171 1.21573 10.633 2.59927Z"
                  fill="#F6AD1B"
                />
              </svg>
            </div>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[400px] lg:mx-0"
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

        <!-- RIGHT CONTAINER -->
        <div
          class="lg:basis-[55%] grow flex flex-col items-center justify-center bg-[#F2F2F2] rounded-md mx-auto w-full py-10 lg:px-12"
        >
          <h1
            class="text-4xl text-center md:text-[40px] font-bold leading-[55px] md:leading-[60px] text-black max-w-[500px] md:font-black"
          >
            Get a free quote
          </h1>

          <p
            class="text-gray-500 text-base mt-4 mb-12 font-light font-inter max-w-[450px] text-center leading-[28px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>

          <form action="" class="w-full max-w-[578px]">
            <label for="full" class="text-sm text-gray-500 font-inter"
              >Full Name</label
            >
            <input
              name="full"
              type="text"
              placeholder="Enter your full name"
              class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid font-light"
            />

            <label for="email" class="text-sm text-gray-500 font-inter"
              >Email</label
            >
            <input
              name="email"
              placeholder="Enter your email address"
              type="email"
              class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid font-light"
            />

            <label for="message" class="text-sm text-gray-500 font-inter"
              >Message</label
            >
            <textarea
              placeholder="Tell us more about your project"
              name="message"
              id="message"
              cols="30"
              rows="5"
              class="w-full py-4 px-6 mb-6 mt-4 rounded-md font-inter border border-[#E4E4E7] border-solid font-light"
            ></textarea>

            <button
              type="submit"
              class="mt-8 mb-6 w-full px-6 py-4 font-inter text-base text-white bg-black rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
