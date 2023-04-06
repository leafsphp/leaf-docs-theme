export interface SocialLink {
  icon: SocialLinkIcon
  link: string,
  classes?: string
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'languages'
  | 'youtube'

export type SocialLinkSize = 'small' | 'medium'
