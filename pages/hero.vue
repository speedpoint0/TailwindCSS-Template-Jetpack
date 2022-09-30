<template>
  <div class="overflow-x-hidden">
    <!-- Hero Standard -->
    <section>
      <div class="w-screen pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full h-auto max-w-[1600px] mx-auto font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col py-6 lg:py-4 px-6 lg:flex-row lg:px-10 lg:items-center lg:justify-between xl:px-20"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <a href="#">
              <svg
                class="left-5 relative lg:inset-0"
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z"
                  fill="black"
                /></svg
            ></a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href="#"
                  class="lg:hover:bg-gray-50 rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 flex flex-row"
                  x-bind:class="menuOne ? 'text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-lg py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="url(#paint0_linear_845_7654)"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="url(#paint1_linear_845_7654)"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="url(#paint2_linear_845_7654)"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="url(#paint3_linear_845_7654)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_845_7654"
                            x1="4.48959"
                            y1="28.5106"
                            x2="4.78788"
                            y2="32.2598"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_845_7654"
                            x1="4.275"
                            y1="12.4271"
                            x2="12.1808"
                            y2="15.0182"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_845_7654"
                            x1="13.8766"
                            y1="8.55027"
                            x2="22.1086"
                            y2="10.6251"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_845_7654"
                            x1="23.4742"
                            y1="4.67345"
                            x2="31.8769"
                            y2="6.39386"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="url(#paint0_linear_535_4464)"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="url(#paint1_linear_535_4464)"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="url(#paint2_linear_535_4464)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4464"
                            x1="3.92229"
                            y1="3.55479"
                            x2="19.2036"
                            y2="26.5078"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4464"
                            x1="10.6845"
                            y1="14.2929"
                            x2="20.6922"
                            y2="25.2101"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_535_4464"
                            x1="12.7843"
                            y1="25.1892"
                            x2="16.6783"
                            y2="31.2749"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="url(#paint0_linear_535_4459)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4459"
                            x1="4.19499"
                            y1="5.02773"
                            x2="29.3335"
                            y2="29.3208"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              </div>

              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Templates</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Pricing</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-3"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-black text-white rounded-lg hover:bg-gray-800"
                href="#"
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href="#"
              class="absolute right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <header
          class="w-full max-w-[1600px] flex flex-col justify-center items-center mx-auto px-6 mt-10 lg:px-10 lg:items-start lg:flex-row lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:mr-12">
            <h1
              class="text-black text-[55px] text-center font-bold leading-[72px] xl:text-[60px] xl:leading-[85px] lg:text-left"
            >
              The Website You Want Without The Dev Time.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>

            <div
              class="flex flex-row flex-wrap justify-center lg:justify-start items-center mt-10"
            >
              <button
                class="px-6 py-4 font-inter text-base text-white bg-black w-full rounded-[6px] max-w-[400px] md:w-auto"
              >
                Try it out
              </button>

              <button
                class="bg-white border border-gray-800 text-black rounded-[6px] px-6 py-4 font-inter text-base flex flex-row w-full max-w-[400px] items-center justify-center mt-6 md:w-auto md:mt-0 md:ml-6"
              >
                <p>Explore Components</p>

                <svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15L15 5"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.875 5H15V13.125"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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

    <!-- Hero Standard with Testimonial -->
    <section>
      <div class="w-screen pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full h-auto max-w-[1600px] mx-auto font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col py-6 lg:py-4 px-6 lg:flex-row lg:px-10 lg:items-center lg:justify-between xl:px-20"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <a href="#">
              <svg
                class="left-5 relative lg:inset-0"
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z"
                  fill="black"
                /></svg
            ></a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href="#"
                  class="lg:hover:bg-gray-50 rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 flex flex-row"
                  x-bind:class="menuOne ? 'text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-lg py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="url(#paint0_linear_845_7654)"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="url(#paint1_linear_845_7654)"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="url(#paint2_linear_845_7654)"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="url(#paint3_linear_845_7654)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_845_7654"
                            x1="4.48959"
                            y1="28.5106"
                            x2="4.78788"
                            y2="32.2598"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_845_7654"
                            x1="4.275"
                            y1="12.4271"
                            x2="12.1808"
                            y2="15.0182"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_845_7654"
                            x1="13.8766"
                            y1="8.55027"
                            x2="22.1086"
                            y2="10.6251"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_845_7654"
                            x1="23.4742"
                            y1="4.67345"
                            x2="31.8769"
                            y2="6.39386"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="url(#paint0_linear_535_4464)"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="url(#paint1_linear_535_4464)"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="url(#paint2_linear_535_4464)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4464"
                            x1="3.92229"
                            y1="3.55479"
                            x2="19.2036"
                            y2="26.5078"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4464"
                            x1="10.6845"
                            y1="14.2929"
                            x2="20.6922"
                            y2="25.2101"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_535_4464"
                            x1="12.7843"
                            y1="25.1892"
                            x2="16.6783"
                            y2="31.2749"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="url(#paint0_linear_535_4459)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4459"
                            x1="4.19499"
                            y1="5.02773"
                            x2="29.3335"
                            y2="29.3208"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              </div>

              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Templates</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Pricing</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-3"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-black text-white rounded-lg hover:bg-gray-800"
                href="#"
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href="#"
              class="absolute right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <header
          class="w-full max-w-[1600px] flex flex-col justify-center items-center mx-auto px-6 mt-10 lg:px-10 lg:flex-row lg:lg:items-start lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:mr-12">
            <h1
              class="text-black text-[55px] text-center font-bold leading-[72px] xl:text-[60px] xl:leading-[85px] lg:text-left"
            >
              The Website You Want Without The Dev Time.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>

            <div
              class="flex flex-row flex-wrap justify-center lg:justify-start items-center mt-10"
            >
              <button
                class="px-6 py-4 font-inter text-base text-white bg-black w-full rounded-[6px] max-w-[400px] md:w-auto"
              >
                Try it out
              </button>

              <button
                class="bg-white border border-gray-800 text-black rounded-[6px] px-6 py-4 font-inter text-base flex flex-row w-full max-w-[400px] items-center justify-center mt-6 md:w-auto md:mt-0 md:ml-6"
              >
                <p>Explore Components</p>

                <svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15L15 5"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.875 5H15V13.125"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <!-- REVIEW DIV -->
            <div
              class="flex flex-col justify-center items-center lg:items-start mt-14 font-inter"
            >
              <!-- STARS -->
              <div class="flex flex-row">
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
              </div>

              <h2 class="text-gray-900 text-base font-medium mt-4 lg:mt-6 mb-3">
                Would highly recommend!
              </h2>

              <p
                class="font-light text-base text-gray-500 text-center lg:text-left max-w-[400px] lg:max-w-[350px]"
              >
                I would highly recommend Devjoy to save time with designing and
                developing
              </p>

              <div class="flex flex-row items-center justify-center">
                <img
                  class="mt-3 mr-4 w-10 h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/tailwindfolio.appspot.com/o/templates%2Fassets%2Fprofile-image.png?alt=media&token=27f4b360-852e-486a-849e-77c8b56feaeb"
                  alt="Profile Image"
                />

                <h2 class="text-gray-900 text-base font-medium mt-6 mb-3">
                  Aleeyah
                </h2>
              </div>
            </div>
          </div>

          <!-- PLACEHOLDER IMAGE -->
          <div
            class="w-full h-full mt-16 lg:mt-0 max-w-[650px] lg:max-w-[600px] 2xl:max-w-[650px]"
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

    <!-- Hero Standard with Email -->
    <section>
      <div class="w-screen pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full h-auto max-w-[1600px] mx-auto font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col py-6 lg:py-4 px-6 lg:flex-row lg:px-10 lg:items-center lg:justify-between xl:px-20"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <a href="#">
              <svg
                class="left-5 relative lg:inset-0"
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z"
                  fill="black"
                /></svg
            ></a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href="#"
                  class="lg:hover:bg-gray-50 rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 flex flex-row"
                  x-bind:class="menuOne ? 'text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-lg py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="url(#paint0_linear_845_7654)"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="url(#paint1_linear_845_7654)"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="url(#paint2_linear_845_7654)"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="url(#paint3_linear_845_7654)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_845_7654"
                            x1="4.48959"
                            y1="28.5106"
                            x2="4.78788"
                            y2="32.2598"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_845_7654"
                            x1="4.275"
                            y1="12.4271"
                            x2="12.1808"
                            y2="15.0182"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_845_7654"
                            x1="13.8766"
                            y1="8.55027"
                            x2="22.1086"
                            y2="10.6251"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_845_7654"
                            x1="23.4742"
                            y1="4.67345"
                            x2="31.8769"
                            y2="6.39386"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="url(#paint0_linear_535_4464)"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="url(#paint1_linear_535_4464)"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="url(#paint2_linear_535_4464)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4464"
                            x1="3.92229"
                            y1="3.55479"
                            x2="19.2036"
                            y2="26.5078"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4464"
                            x1="10.6845"
                            y1="14.2929"
                            x2="20.6922"
                            y2="25.2101"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_535_4464"
                            x1="12.7843"
                            y1="25.1892"
                            x2="16.6783"
                            y2="31.2749"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="url(#paint0_linear_535_4459)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4459"
                            x1="4.19499"
                            y1="5.02773"
                            x2="29.3335"
                            y2="29.3208"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              </div>

              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Templates</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Pricing</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-3"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-black text-white rounded-lg hover:bg-gray-800"
                href="#"
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href="#"
              class="absolute right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <header
          class="w-full max-w-[1600px] flex flex-col justify-center items-center mx-auto px-6 mt-10 lg:px-10 lg:flex-row lg:lg:items-start lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:mr-12">
            <h1
              class="text-black text-[55px] text-center font-bold leading-[72px] xl:text-[60px] xl:leading-[85px] lg:text-left"
            >
              The Website You Want Without The Dev Time.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>

            <!-- EMAIL DIV -->
            <form
              action=""
              id="hero-form"
              class="flex flex-row flex-wrap justify-center items-center mt-12 inter text-base rounded-lg relative max-w-[400px] md:max-w-[450px] mx-auto lg:mx-0"
            >
              <input
                class="px-6 py-4 border font-inter text-base text-center md:text-left border-gray-800 w-full rounded-lg"
                type="email"
                placeholder="Enter your email"
                id="email"
              />

              <button
                type="submit"
                class="px-6 py-4 mt-6 font-inter text-base right-0 top-0 text-white border border-gray-800 bg-black w-full rounded-lg max-w-[400px] md:mt-0 md:ml-6 md:w-auto md:absolute md:py-3 md:right-1 md:top-1 hover:bg-gray-800 hover:border-gray-400"
              >
                Subscribe
              </button>
            </form>

            <!-- STATS DIV -->
            <div
              class="flex flex-row items-center justify-center lg:justify-start mt-16 w-full"
            >
              <div class="flex flex-col">
                <h2 class="text-black text-3xl font-bold">1.2K+</h2>
                <p class="mt-3 text-base text-gray-600 font-light">Reviews</p>
              </div>

              <div class="border border-gray-100 h-[80px] mx-12"></div>

              <div class="flex flex-col">
                <h2 class="text-black text-3xl font-bold">200+</h2>
                <p class="mt-3 text-base text-gray-600 font-light">Templates</p>
              </div>

              <div class="border border-gray-100 h-[80px] mx-12"></div>

              <div class="flex flex-col">
                <h2 class="text-black text-3xl font-bold">89+</h2>
                <p class="mt-3 text-base text-gray-600 font-light">Partners</p>
              </div>
            </div>
          </div>

          <!-- PLACEHOLDER IMAGE -->
          <div
            class="w-full h-full mt-16 lg:mt-0 max-w-[650px] lg:max-w-[600px] 2xl:max-w-[650px]"
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

    <!-- Hero - Large Image -->
    <section>
      <div class="w-screen relative lg:pt-40 pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full h-auto max-w-[1600px] mx-auto font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col py-6 lg:py-4 px-6 lg:flex-row lg:px-10 lg:items-center lg:justify-between xl:px-20"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <a href="#">
              <svg
                class="left-5 relative lg:inset-0"
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z"
                  fill="black"
                /></svg
            ></a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href="#"
                  class="lg:hover:bg-gray-50 rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 flex flex-row"
                  x-bind:class="menuOne ? 'text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-lg py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="url(#paint0_linear_845_7654)"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="url(#paint1_linear_845_7654)"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="url(#paint2_linear_845_7654)"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="url(#paint3_linear_845_7654)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_845_7654"
                            x1="4.48959"
                            y1="28.5106"
                            x2="4.78788"
                            y2="32.2598"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_845_7654"
                            x1="4.275"
                            y1="12.4271"
                            x2="12.1808"
                            y2="15.0182"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_845_7654"
                            x1="13.8766"
                            y1="8.55027"
                            x2="22.1086"
                            y2="10.6251"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_845_7654"
                            x1="23.4742"
                            y1="4.67345"
                            x2="31.8769"
                            y2="6.39386"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="url(#paint0_linear_535_4464)"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="url(#paint1_linear_535_4464)"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="url(#paint2_linear_535_4464)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4464"
                            x1="3.92229"
                            y1="3.55479"
                            x2="19.2036"
                            y2="26.5078"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4464"
                            x1="10.6845"
                            y1="14.2929"
                            x2="20.6922"
                            y2="25.2101"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_535_4464"
                            x1="12.7843"
                            y1="25.1892"
                            x2="16.6783"
                            y2="31.2749"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="url(#paint0_linear_535_4459)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4459"
                            x1="4.19499"
                            y1="5.02773"
                            x2="29.3335"
                            y2="29.3208"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              </div>

              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Templates</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Pricing</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-3"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-black text-white rounded-lg hover:bg-gray-800"
                href="#"
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href="#"
              class="absolute right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <!-- TEXT DIV -->
        <div
          class="max-w-[550px] lg:max-w-[800px] flex flex-col items-center justify-center px-6 lg:px-10 lg:mt-10 mx-auto text-center"
        >
          <h1
            class="text-black text-[55px] text-center font-bold leading-[72px] xl:text-[60px] xl:leading-[85px] mx-auto"
          >
            The Website You Want Without The Dev Time.
          </h1>

          <p
            class="font-inter text-base font-light text-center px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
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

            <button
              class="bg-white border border-gray-800 text-black rounded-[6px] px-6 py-4 font-inter text-base flex flex-row w-full max-w-[400px] items-center justify-center mt-6 md:w-auto md:mt-0 md:ml-6"
            >
              <p>Explore Components</p>

              <svg
                class="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L15 5"
                  stroke="#160042"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.875 5H15V13.125"
                  stroke="#160042"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- PLACEHOLDER IMAGE -->
        <div
          class="w-full h-full mx-auto mt-16 max-w-[700px] lg:max-w-[850px] 2xl:max-w-[1095px]"
        >
          <svg
            class="w-full h-full"
            viewBox="0 0 1095 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1095" height="500" fill="#C4C4C4" />
            <path
              d="M543.5 247C544.328 247 545 246.328 545 245.5C545 244.672 544.328 244 543.5 244C542.672 244 542 244.672 542 245.5C542 246.328 542.672 247 543.5 247Z"
              fill="black"
            />
            <path
              d="M557 238H537C536.47 238.001 535.961 238.212 535.587 238.586C535.212 238.961 535.001 239.47 535 240V255.997L535 256.001L535 260C535.001 260.53 535.212 261.039 535.587 261.414C535.961 261.788 536.47 261.999 537 262H557C557.53 261.999 558.039 261.788 558.414 261.414C558.789 261.039 558.999 260.53 559 260V240C558.999 239.47 558.789 238.961 558.414 238.586C558.039 238.212 557.53 238.001 557 238ZM553.414 248C553.039 247.625 552.53 247.415 552 247.415C551.47 247.415 550.961 247.625 550.586 248L545 253.586L542.414 251C542.039 250.626 541.53 250.415 541 250.415C540.47 250.415 539.961 250.626 539.586 251L537 253.586V240H557L557.001 251.587L553.414 248Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <!-- NAVBAR -->
    </section>

    <!-- Hero Standard Email - Reverse -->
    <section>
      <div class="w-screen pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full h-auto max-w-[1600px] mx-auto font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col py-6 lg:py-4 px-6 lg:flex-row lg:px-10 lg:items-center lg:justify-between xl:px-20"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <a href="#">
              <svg
                class="left-5 relative lg:inset-0"
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z"
                  fill="black"
                /></svg
            ></a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href="#"
                  class="lg:hover:bg-gray-50 rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 flex flex-row"
                  x-bind:class="menuOne ? 'text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-lg py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="url(#paint0_linear_845_7654)"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="url(#paint1_linear_845_7654)"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="url(#paint2_linear_845_7654)"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="url(#paint3_linear_845_7654)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_845_7654"
                            x1="4.48959"
                            y1="28.5106"
                            x2="4.78788"
                            y2="32.2598"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_845_7654"
                            x1="4.275"
                            y1="12.4271"
                            x2="12.1808"
                            y2="15.0182"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_845_7654"
                            x1="13.8766"
                            y1="8.55027"
                            x2="22.1086"
                            y2="10.6251"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_845_7654"
                            x1="23.4742"
                            y1="4.67345"
                            x2="31.8769"
                            y2="6.39386"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="url(#paint0_linear_535_4464)"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="url(#paint1_linear_535_4464)"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="url(#paint2_linear_535_4464)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4464"
                            x1="3.92229"
                            y1="3.55479"
                            x2="19.2036"
                            y2="26.5078"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4464"
                            x1="10.6845"
                            y1="14.2929"
                            x2="20.6922"
                            y2="25.2101"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_535_4464"
                            x1="12.7843"
                            y1="25.1892"
                            x2="16.6783"
                            y2="31.2749"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-lg lg:basis-[248px] grow"
                    href="#"
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="url(#paint0_linear_535_4459)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4459"
                            x1="4.19499"
                            y1="5.02773"
                            x2="29.3335"
                            y2="29.3208"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              </div>

              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Templates</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Pricing</a
              >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-3"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href="#"
                class="lg:hover:bg-gray-50 font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-black text-white rounded-lg hover:bg-gray-800"
                href="#"
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href="#"
              class="absolute right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <header
          class="w-full max-w-[1600px] flex flex-col justify-center items-center mx-auto px-6 mt-10 lg:px-10 lg:flex-row-reverse lg:lg:items-start lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:ml-12">
            <h1
              class="text-black text-[55px] text-center font-bold leading-[72px] xl:text-[60px] xl:leading-[85px] lg:text-left"
            >
              The Website You Want Without The Dev Time.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>

            <!-- EMAIL DIV -->
            <form
              action=""
              id="hero-form"
              class="flex flex-row flex-wrap justify-center items-center mt-12 inter text-base rounded-lg relative max-w-[400px] md:max-w-[450px] mx-auto lg:mx-0"
            >
              <input
                class="px-6 py-4 border font-inter text-base text-center md:text-left border-gray-800 w-full rounded-lg"
                type="email"
                placeholder="Enter your email"
                id="email"
              />

              <button
                type="submit"
                class="px-6 py-4 mt-6 font-inter text-base right-0 top-0 text-white border border-gray-800 bg-black w-full rounded-lg max-w-[400px] md:mt-0 md:ml-6 md:w-auto md:absolute md:py-3 md:right-1 md:top-1 hover:bg-gray-800 hover:border-gray-400"
              >
                Subscribe
              </button>
            </form>
          </div>

          <!-- PLACEHOLDER IMAGE -->
          <div
            class="w-full h-full mt-16 lg:mt-0 max-w-[650px] lg:max-w-[600px] 2xl:max-w-[650px]"
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
