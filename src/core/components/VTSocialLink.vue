<script lang="ts" setup>
import { SocialLinkSize, SocialLinkIcon } from '../types/socialLink'
import VTIconDiscord from './icons/VTIconDiscord.vue'
import VTIconFacebook from './icons/VTIconFacebook.vue'
import VTIconGitHub from './icons/VTIconGitHub.vue'
import VTIconLinkedIn from './icons/VTIconLinkedIn.vue'
import VTIconSlack from './icons/VTIconSlack.vue'
import VTIconTwitter from './icons/VTIconTwitter.vue'
import VTIconLanguages from './icons/VTIconLanguages.vue'
import VTIconYouTube from './icons/VTIconYouTube.vue'

const props = defineProps<{
  size?: SocialLinkSize
  icon: SocialLinkIcon
  link: string,
  classes?: string
}>()

const target = /^[a-z]+:/i.test(props.link) ? `_blank` : undefined

const icons = {
  discord: VTIconDiscord,
  facebook: VTIconFacebook,
  github: VTIconGitHub,
  linkedin: VTIconLinkedIn,
  slack: VTIconSlack,
  twitter: VTIconTwitter,
  languages: VTIconLanguages,
  youtube: VTIconYouTube,
}
</script>

<template>
  <a
    class=""
    :class="{
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'vt-social-link': true,
      [classes ?? '']: true,
    }"
    :href="link"
    :title="icon"
    :target="target"
    rel="noopener noreferrer"
  >
    <component :is="icons[icon]" class="vt-social-link-icon" />
    <span class="visually-hidden">{{ icon }}</span>
  </a>
</template>
