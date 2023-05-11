<script>
export default {
  name : "footer-bar",
  data: () => {
    return {
      currentYear: new Date().getFullYear(),
      socials: [
        { icon: 'facebook-f', title: 'Facebook', url: 'https://www.facebook.com/shawonkhan.cupid' },
        { icon: 'twitter', title: 'Twitter', url: 'https://www.twitter.com/shawonk9999' },
        { icon: 'linkedin-in', title: 'LinkedIn', url: 'https://www.linkedin.com/in/shawonkhan007' },
        { icon: 'instagram', title: 'Instagram', url: 'https://www.instagram.com/shawonk9999' },
        { icon: 'github', title: 'Github', url: 'https://www.github.com/Iamcupid' },
        { icon: 'behance', title: 'Behance', url: 'https://www.behance.com/shawonk9999' }
      ]
    };
  },
  props : {
    margin : String
  }
}
</script>

<template>
  <footer class="flex items-center justify-between gap-4 text-sm text-gray-500 bg-gray-900 px-4 py-2" :class="margin">
    <div class="block">
      <p>
        <span>{{ currentYear }} &copy;</span>
        <span class="border-l-2 border-gray-500 pl-1.5 ml-1.5">Created By : </span>
        <a href="http://www.shawon-khan.com" class="px-1.5 hover:underline" target="_blank" >Shawon Khan</a>
      </p>
    </div>
    <p>
      <span>Version : </span>
      <span>{{ $appVersion }}</span>
    </p>
    <ul class="flex items-center gap-2 xs:gap-2">
      <a v-for="link of socials" v-bind:href="link.url" :title="link.title" target="_blank" >
        <fa-icon :icon="[ 'fab' , link.icon ]" class="p-1 hover:text-white hover:bg-gray-500 border-2 border-gray-500 rounded-full w-4 xs:w-3 h-4 xs:h-3" />
      </a>
    </ul>
  </footer>
</template>