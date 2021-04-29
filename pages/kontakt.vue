<template>
  <div>
    <div v-if="success" class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-yellow-500 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-yellow-600">
              <!-- Heroicon name: outline/speakerphone -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                Tack för ditt meddelande!
              </span>
              <span class="hidden md:inline">
                Tack för ditt meddelande! Vi återkommer snarast.
              </span>
            </p>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-white"
              @click="close()"
            >
              <span class="sr-only">Dismiss</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-w-7xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8 rounded-3xl"
    >
      <div class="relative bg-white shadow-xl">
        <h2 class="sr-only">{{ page.title }}</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div
            class="relative overflow-hidden py-10 px-6 bg-blue-500 sm:px-10 xl:p-12"
          >
            <div
              class="absolute inset-0 pointer-events-none sm:hidden"
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="343"
                height="388"
                viewBox="0 0 343 388"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                  fill="url(#linear1)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear1"
                    x1="254.553"
                    y1="107.554"
                    x2="961.66"
                    y2="814.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="359"
                height="339"
                viewBox="0 0 359 339"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                  fill="url(#linear2)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear2"
                    x1="192.553"
                    y1="28.553"
                    x2="899.66"
                    y2="735.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="160"
                height="678"
                viewBox="0 0 160 678"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                  fill="url(#linear3)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear3"
                    x1="192.553"
                    y1="325.553"
                    x2="899.66"
                    y2="1032.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-white">
              {{ page.extra.sidebar.title }}
            </h3>
            <p class="mt-6 text-base text-white max-w-3xl">
              {{ page.extra.sidebar.text }}
            </p>
            <dl class="mt-8 space-y-6 text-white">
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex">
                <!-- Heroicon name: outline/mail -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-white-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3">{{ page.extra.sidebar.email }}</span>
              </dd>
            </dl>
            <ul class="mt-8 flex space-x-12" role="list">
              <li>
                <a
                  class="text-blue-200 hover:text-blue-100"
                  :href="page.extra.sidebar.facebook"
                  target="_blank"
                >
                  <span class="sr-only">Facebook</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  class="text-blue-200 hover:text-blue-100"
                  :href="page.extra.sidebar.github"
                  target="_blank"
                >
                  <span class="sr-only">GitHub</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">
              Skicka ett meddelande
            </h3>
            <form
              data-netlify="true"
              name="contact"
              action="/kontakt#tack"
              method="POST"
              class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-900"
                  >Förnamn</label
                >
                <div class="mt-1">
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    autocomplete="given-name"
                    class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-sm font-medium text-gray-900"
                  >Efternamn</label
                >
                <div class="mt-1">
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    autocomplete="family-name"
                    class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-900"
                  >E-postadress</label
                >
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-900"
                    >Telefonnummer</label
                  >
                  <span id="phone-optional" class="text-sm text-gray-500"
                    >Valfritt</span
                  >
                </div>
                <div class="mt-1">
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    autocomplete="tel"
                    class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-900"
                  >Ämne</label
                >
                <div class="mt-1">
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-900"
                    >Meddelande</label
                  >
                  <span id="message-max" class="text-sm text-gray-500"
                    >Max 500 tecken</span
                  >
                </div>
                <div class="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    aria-describedby="message-max"
                  ></textarea>
                </div>
              </div>
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:w-auto"
                >
                  Skicka
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $contentful }) {
    const page = await $contentful.getPage('kontakt')
    return {
      page
    }
  },
  data() {
    return {
      success: false
    }
  },
  mounted() {
    if (window.location.hash === '#tack') {
      this.success = true
    }
  },
  methods: {
    close() {
      this.success = false
      history.replaceState(null, null, ' ')
    }
  }
}
</script>
