<template>
  <div>
    <div class="relative bg-blue-500">
      <navbar />
    </div>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
    <ti-footer />
  </div>
</template>

<style lang="postcss">
.dark-mode .nuxt-content {
  & h3,
  & h4,
  & blockquote {
    @apply border-gray-800;
  }
  & > code,
  & li > code,
  & p > code,
  & h3 > code {
    @apply bg-gray-800;
  }
}
.nuxt-content h3 {
  @apply text-2xl leading-8 font-extrabold tracking-tight text-gray-900;
  & > a {
    @apply ml-6;
    &::before {
      content: '#';
      @apply text-blue-500 font-normal -ml-5 pr-1 absolute opacity-100;
    }
  }
  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
.nuxt-content h4 {
  @apply mt-4 max-w-3xl text-xl leading-7 text-gray-500 pb-2;
  & > a {
    @apply ml-6;
    &::before {
      content: '#';
      @apply text-blue-500 font-normal -ml-5 pr-1 absolute opacity-100;
    }
  }
  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
@screen lg {
  .nuxt-content h3 a,
  .nuxt-content h4 a {
    @apply ml-0;
    &::before {
      @apply opacity-0;
    }
  }
}
.nuxt-content ul,
.nuxt-content ol {
  @apply list-disc mb-4;
  & > li {
    @apply leading-7;
    & > ul {
      @apply pl-4;
    }
  }
}
.nuxt-content ol {
  @apply list-decimal;
}
.nuxt-content {
  & a {
    @apply underline;
  }
  & p {
    @apply mb-4 leading-7;
  }
  & > blockquote {
    @apply py-2 pl-4 mb-4 border-l-4;
    & p:last-child {
      @apply mb-0;
    }
  }
  & > code,
  & li > code,
  & p > code {
    @apply bg-gray-100 p-1 text-sm shadow-xs rounded;
  }
  & h3 > code {
    @apply bg-gray-100 p-1 text-lg shadow-xs rounded;
  }
  & pre[class*='language-'] {
    @apply rounded mt-0 mb-4 bg-gray-800 text-sm relative;
    > code {
      @apply bg-gray-800 relative;
      text-shadow: none;
    }
  }
  & video {
    @apply w-full border rounded shadow-md;
  }
}
.nuxt-content-highlight {
  @apply relative;
  & > .filename {
    @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
  }
}
</style>
