import cx from 'classnames'
import React, { ReactNode } from 'react'

import { NewItemBadge } from '../badge/NewItemBadge'
import { OverflowWrapper } from '../OverflowWrapper'

export interface MobileTabsProps {
  pages: {
    shortTitle: ReactNode
    link: string
    selected: boolean
    new?: boolean
    disabled: boolean
  }[]
}

export function MobileTabs({ pages }: MobileTabsProps) {
  return (
    <div className="-mx-4 border-b border-b-gray-200 bg-gray-100 dark:border-b-gray-850 dark:bg-gray-950 md:hidden">
      <OverflowWrapper className="mx-4" within="nav-tabs">
        <ul className="mx-auto flex w-min items-center gap-2 py-2 patch-items-stretch">
          {pages.map((page, i) => (
            <li
              key={i}
              className="flex w-28 flex-shrink-0"
              data-selected={page.selected}
            >
              <a
                  {...(page.disabled ? {} : {href: page.link})}
                className={cx(
                  'flex w-full rounded py-1 text-center font-bold justify-center items-center',
                  page.selected &&
                    'bg-gradient-to-r from-purple-100 to-pink-100 text-white',
                  !page.selected && 'bg-white dark:bg-gray-850',
                )}
              >
                <span
                  className={cx(page.new && 'inline-flex items-center gap-1')}
                >
                  <div>
                    <div>{page.shortTitle} {page.new && <NewItemBadge />}</div>
                    { page.disabled && <div className="text-[10px]">Coming Soon</div> }
                  </div>

                </span>
              </a>
            </li>
          ))}
        </ul>
      </OverflowWrapper>
    </div>
  )
}
