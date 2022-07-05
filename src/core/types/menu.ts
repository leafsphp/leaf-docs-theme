export type MenuItem = MenuItemWithLink | MenuItemWithChildren

export interface MenuItemWithLink {
  collapsible?: boolean;
  collapsed?: boolean;
  text: string
  link: string
}

export interface MenuItemWithChildren {
  text: string
  items: MenuItemChild[]
}

export type MenuItemChild = MenuItemWithLink | MenuItemChildWithChildren

export interface MenuItemChildWithChildren {
  text?: string
  items: MenuItemWithLink[]
}
