<template>
  <div>
    <!-- Navbar Dropdown 2 rows -->
    <section>
      <div class="w-screen h-[500px]">
        <!-- NAVBAR -->
        <nav
          class="w-full font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col lg:flex-row px-6 lg:px-10 py-8 xl:px-20 relative lg:items-center lg:justify-between"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <svg
              class="top-5 left-5 absolute lg:relative lg:inset-0"
              width="76"
              height="32"
              viewBox="0 0 76 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.256 25C13.344 25 16.848 21.424 16.848 16.264C16.848 11.032 13.272 7.456 8.088 7.456H1.944V25H8.256ZM7.8 10.288C11.424 10.288 13.608 12.544 13.608 16.264C13.608 19.912 11.472 22.168 7.968 22.168H5.016V10.288H7.8ZM24.5816 25.312C27.6776 25.312 29.8376 23.752 30.3416 21.16H27.6296C27.2936 22.288 26.2376 22.912 24.6296 22.912C22.6856 22.912 21.5816 21.856 21.3656 19.768L30.2936 19.744V18.856C30.2936 15.16 28.0376 12.784 24.4856 12.784C21.0056 12.784 18.5816 15.352 18.5816 19.072C18.5816 22.744 21.0536 25.312 24.5816 25.312ZM24.5096 15.184C26.2616 15.184 27.3896 16.264 27.3896 17.896H21.4376C21.7256 16.12 22.7816 15.184 24.5096 15.184ZM35.4814 25H38.3614L43.3054 13.144H40.2814L38.1214 18.592C37.6174 19.888 37.1854 21.136 37.0174 21.88C36.8734 21.232 36.4654 20.008 35.9614 18.592L33.8974 13.144H30.7774L35.4814 25ZM46.4526 10.768C47.4126 10.768 48.2286 9.976 48.2286 8.992C48.2286 8.008 47.4126 7.24 46.4526 7.24C45.4686 7.24 44.6766 8.008 44.6766 8.992C44.6766 9.976 45.4686 10.768 46.4526 10.768ZM42.1566 30.568C42.9246 30.784 43.3566 30.832 43.9086 30.832C46.4766 30.832 47.9166 29.2 47.9166 26.68V13.144H44.9886V26.344C44.9886 27.544 44.6526 28.12 43.6446 28.12C43.2846 28.12 43.0446 28.096 42.6366 27.976L42.1566 30.568ZM50.2457 19.048C50.2457 22.744 52.9097 25.288 56.5817 25.288C60.2537 25.288 62.9177 22.744 62.9177 19.048C62.9177 15.352 60.2537 12.808 56.5817 12.808C52.9097 12.808 50.2457 15.352 50.2457 19.048ZM53.1737 19.048C53.1737 16.888 54.5657 15.424 56.5817 15.424C58.5977 15.424 59.9897 16.888 59.9897 19.048C59.9897 21.208 58.5977 22.672 56.5817 22.672C54.5657 22.672 53.1737 21.208 53.1737 19.048ZM63.7613 30.496C64.4093 30.664 65.1293 30.76 65.9453 30.76C67.8893 30.76 69.1373 29.848 70.0253 27.64L75.8333 13.144H72.8093L69.5933 21.784L66.5453 13.144H63.4493L68.2253 25.504L67.8893 26.392C67.3853 27.784 66.6653 28.048 65.5133 28.048H63.7613V30.496Z"
                fill="#160042"
              />
              <circle
                cx="46"
                cy="8"
                r="3"
                fill="url(#paint0_linear_807_8267)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_807_8267"
                  x1="44.5"
                  y1="6"
                  x2="48.6491"
                  y2="6.18668"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#936EFF" />
                  <stop offset="1" stop-color="#0BC4FF" />
                </linearGradient>
              </defs>
            </svg>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href=""
                  class="lg:hover:bg-[#F7F8FD] rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF] flex flex-row"
                  x-bind:class="menuOne ? 'text-[#642EFF] lg:border lg:border-[#642EFF] lg:bg-[#F7F8FD]' : 'text-black lg:border lg:border-white' "
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
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-2xl py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
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
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
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
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
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

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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
                          d="M24.721 5.56006L17.3877 2.81339C16.6277 2.53339 15.3877 2.53339 14.6277 2.81339L7.29437 5.56006C5.88104 6.09339 4.73438 7.74673 4.73438 9.2534V20.0534C4.73438 21.1334 5.44104 22.5601 6.30771 23.2001L13.641 28.6801C14.9344 29.6534 17.0544 29.6534 18.3477 28.6801L25.681 23.2001C26.5477 22.5467 27.2544 21.1334 27.2544 20.0534V9.2534C27.2677 7.74673 26.121 6.09339 24.721 5.56006ZM17.001 17.1601V20.6667C17.001 21.2134 16.5477 21.6667 16.001 21.6667C15.4544 21.6667 15.001 21.2134 15.001 20.6667V17.1601C13.6544 16.7334 12.6677 15.4801 12.6677 14.0001C12.6677 12.1601 14.161 10.6667 16.001 10.6667C17.841 10.6667 19.3344 12.1601 19.3344 14.0001C19.3344 15.4934 18.3477 16.7334 17.001 17.1601Z"
                          fill="url(#paint0_linear_535_4448)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4448"
                            x1="6.02459"
                            y1="4.9769"
                            x2="30.7728"
                            y2="25.0785"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Security
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Your customers data will be safe and secure
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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
                          d="M28.6654 14.5333V5.46663C28.6654 3.46663 27.812 2.66663 25.692 2.66663H20.3054C18.1854 2.66663 17.332 3.46663 17.332 5.46663V14.5333C17.332 16.5333 18.1854 17.3333 20.3054 17.3333H25.692C27.812 17.3333 28.6654 16.5333 28.6654 14.5333Z"
                          fill="url(#paint0_linear_535_4473)"
                        />
                        <path
                          d="M14.6654 17.4666V26.5333C14.6654 28.5333 13.812 29.3333 11.692 29.3333H6.30536C4.18536 29.3333 3.33203 28.5333 3.33203 26.5333V17.4666C3.33203 15.4666 4.18536 14.6666 6.30536 14.6666H11.692C13.812 14.6666 14.6654 15.4666 14.6654 17.4666Z"
                          fill="url(#paint1_linear_535_4473)"
                        />
                        <path
                          d="M28.6654 26.5333V22.8C28.6654 20.8 27.812 20 25.692 20H20.3054C18.1854 20 17.332 20.8 17.332 22.8V26.5333C17.332 28.5333 18.1854 29.3333 20.3054 29.3333H25.692C27.812 29.3333 28.6654 28.5333 28.6654 26.5333Z"
                          fill="url(#paint2_linear_535_4473)"
                        />
                        <path
                          d="M14.6654 9.19996V5.46663C14.6654 3.46663 13.812 2.66663 11.692 2.66663H6.30536C4.18536 2.66663 3.33203 3.46663 3.33203 5.46663V9.19996C3.33203 11.2 4.18536 12 6.30536 12H11.692C13.812 12 14.6654 11.2 14.6654 9.19996Z"
                          fill="url(#paint3_linear_535_4473)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4473"
                            x1="17.9813"
                            y1="3.96524"
                            x2="31.2478"
                            y2="13.8768"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4473"
                            x1="3.98134"
                            y1="15.9652"
                            x2="17.2478"
                            y2="25.8768"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_535_4473"
                            x1="17.9813"
                            y1="20.8264"
                            x2="26.6728"
                            y2="31.0305"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_535_4473"
                            x1="3.98134"
                            y1="3.49301"
                            x2="12.6728"
                            y2="13.6971"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Integrations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Connect with third-party tools that you’re already using
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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
                          d="M21.0676 2.9467C20.5209 2.40003 19.5742 2.77336 19.5742 3.53336V8.1867C19.5742 10.1334 21.2276 11.7467 23.2409 11.7467C24.5076 11.76 26.2676 11.76 27.7742 11.76C28.5342 11.76 28.9342 10.8667 28.4009 10.3334C26.4809 8.40003 23.0409 4.92003 21.0676 2.9467Z"
                          fill="url(#paint0_linear_535_4482)"
                        />
                        <path
                          d="M27.332 13.5866H23.4787C20.3187 13.5866 17.7454 11.0133 17.7454 7.85329V3.99996C17.7454 3.26663 17.1454 2.66663 16.412 2.66663H10.7587C6.65203 2.66663 3.33203 5.33329 3.33203 10.0933V21.9066C3.33203 26.6666 6.65203 29.3333 10.7587 29.3333H21.2387C25.3454 29.3333 28.6654 26.6666 28.6654 21.9066V14.92C28.6654 14.1866 28.0654 13.5866 27.332 13.5866ZM15.332 23.6666H9.9987C9.45203 23.6666 8.9987 23.2133 8.9987 22.6666C8.9987 22.12 9.45203 21.6666 9.9987 21.6666H15.332C15.8787 21.6666 16.332 22.12 16.332 22.6666C16.332 23.2133 15.8787 23.6666 15.332 23.6666ZM17.9987 18.3333H9.9987C9.45203 18.3333 8.9987 17.88 8.9987 17.3333C8.9987 16.7866 9.45203 16.3333 9.9987 16.3333H17.9987C18.5454 16.3333 18.9987 16.7866 18.9987 17.3333C18.9987 17.88 18.5454 18.3333 17.9987 18.3333Z"
                          fill="url(#paint1_linear_535_4482)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_535_4482"
                            x1="20.0939"
                            y1="3.49024"
                            x2="28.6471"
                            y2="11.7578"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_535_4482"
                            x1="4.78342"
                            y1="5.02773"
                            x2="29.846"
                            y2="28.0479"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#936EFF" />
                            <stop offset="1" stop-color="#0BC4FF" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Reports
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get detailed report that will help you make more informed
                      decisions
                    </p>
                  </a>
                </div>
              </div>

              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF]"
                >Templates</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF]"
                >Pricing</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF] pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF]"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-[#160042] text-white rounded-full hover:bg-gradient-to-r hover:from-[#936EFF] hover:to-[#0BC4FF]"
                href=""
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href=""
              class="absolute top-5 right-5 lg:hidden"
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
      </div>
    </section>

    <!-- Navbar Dropdown 1 row -->
    <section>
      <div class="w-screen h-[500px]">
        <!-- NAVBAR -->
        <nav
          class="w-full font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col lg:flex-row px-6 lg:px-10 py-8 xl:px-20 relative lg:items-center lg:justify-between"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <svg
              class="top-5 left-5 absolute lg:relative lg:inset-0"
              width="76"
              height="32"
              viewBox="0 0 76 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.256 25C13.344 25 16.848 21.424 16.848 16.264C16.848 11.032 13.272 7.456 8.088 7.456H1.944V25H8.256ZM7.8 10.288C11.424 10.288 13.608 12.544 13.608 16.264C13.608 19.912 11.472 22.168 7.968 22.168H5.016V10.288H7.8ZM24.5816 25.312C27.6776 25.312 29.8376 23.752 30.3416 21.16H27.6296C27.2936 22.288 26.2376 22.912 24.6296 22.912C22.6856 22.912 21.5816 21.856 21.3656 19.768L30.2936 19.744V18.856C30.2936 15.16 28.0376 12.784 24.4856 12.784C21.0056 12.784 18.5816 15.352 18.5816 19.072C18.5816 22.744 21.0536 25.312 24.5816 25.312ZM24.5096 15.184C26.2616 15.184 27.3896 16.264 27.3896 17.896H21.4376C21.7256 16.12 22.7816 15.184 24.5096 15.184ZM35.4814 25H38.3614L43.3054 13.144H40.2814L38.1214 18.592C37.6174 19.888 37.1854 21.136 37.0174 21.88C36.8734 21.232 36.4654 20.008 35.9614 18.592L33.8974 13.144H30.7774L35.4814 25ZM46.4526 10.768C47.4126 10.768 48.2286 9.976 48.2286 8.992C48.2286 8.008 47.4126 7.24 46.4526 7.24C45.4686 7.24 44.6766 8.008 44.6766 8.992C44.6766 9.976 45.4686 10.768 46.4526 10.768ZM42.1566 30.568C42.9246 30.784 43.3566 30.832 43.9086 30.832C46.4766 30.832 47.9166 29.2 47.9166 26.68V13.144H44.9886V26.344C44.9886 27.544 44.6526 28.12 43.6446 28.12C43.2846 28.12 43.0446 28.096 42.6366 27.976L42.1566 30.568ZM50.2457 19.048C50.2457 22.744 52.9097 25.288 56.5817 25.288C60.2537 25.288 62.9177 22.744 62.9177 19.048C62.9177 15.352 60.2537 12.808 56.5817 12.808C52.9097 12.808 50.2457 15.352 50.2457 19.048ZM53.1737 19.048C53.1737 16.888 54.5657 15.424 56.5817 15.424C58.5977 15.424 59.9897 16.888 59.9897 19.048C59.9897 21.208 58.5977 22.672 56.5817 22.672C54.5657 22.672 53.1737 21.208 53.1737 19.048ZM63.7613 30.496C64.4093 30.664 65.1293 30.76 65.9453 30.76C67.8893 30.76 69.1373 29.848 70.0253 27.64L75.8333 13.144H72.8093L69.5933 21.784L66.5453 13.144H63.4493L68.2253 25.504L67.8893 26.392C67.3853 27.784 66.6653 28.048 65.5133 28.048H63.7613V30.496Z"
                fill="#160042"
              />
              <circle
                cx="46"
                cy="8"
                r="3"
                fill="url(#paint0_linear_807_8267)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_807_8267"
                  x1="44.5"
                  y1="6"
                  x2="48.6491"
                  y2="6.18668"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#936EFF" />
                  <stop offset="1" stop-color="#0BC4FF" />
                </linearGradient>
              </defs>
            </svg>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href=""
                  class="lg:hover:bg-[#F7F8FD] rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF] flex flex-row"
                  x-bind:class="menuOne ? 'text-[#642EFF] lg:border lg:border-[#642EFF] lg:bg-[#F7F8FD]' : 'text-black lg:border lg:border-white' "
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
                  class="w-full flex flex-col bg-white z-50 lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-2xl py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
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
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
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
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
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

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-[#160042] text-lg font-inter font-medium mb-1 mt-5"
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
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF]"
                >Templates</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF]"
                >Pricing</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF] pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-[#642EFF]"
                >Sign Up</a
              >
              <a
                class="px-8 py-4 font-inter text-center bg-[#160042] text-white rounded-full hover:bg-gradient-to-r hover:from-[#936EFF] hover:to-[#0BC4FF]"
                href=""
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href=""
              class="absolute top-5 right-5 lg:hidden"
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
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
