import React from 'react'

import { ActivityIcon, RiskIcon, SummaryIcon, TvlIcon } from '../icons'
import { LivenessIcon } from '../icons/pages/LivenessIcon'
import { NavigationPage, NavigationTabs } from './NavigationTabs'

interface ScalingNavigationTabsProps {
  selected: 'summary' | 'detailed' | 'risk' | 'activity' | 'liveness'
  showActivity: boolean
  showLiveness: boolean
}

export function ScalingNavigationTabs(props: ScalingNavigationTabsProps) {
  const pages: NavigationPage[] = [
    {
      fullTitle: 'Summary',
      shortTitle: 'Summary',
      icon: <SummaryIcon />,
      link: '/scaling/summary',
      selected: props.selected === 'summary',
      disabled: false
    },
  ]
  pages.push({
    fullTitle: 'Value Locked',
    shortTitle: 'Value',
    icon: <TvlIcon />,
    link: '/scaling/tvl',
    selected: props.selected === 'detailed',
    disabled: true
  })

  pages.push({
    fullTitle: 'Risk Analysis',
    shortTitle: 'Risks',
    icon: <RiskIcon />,
    link: '/scaling/risk',
    selected: props.selected === 'risk',
    disabled: true
  })
  if (props.showLiveness) {
    pages.push({
      fullTitle: 'Liveness',
      shortTitle: 'Liveness',
      icon: <LivenessIcon />,
      link: '/scaling/liveness',
      selected: props.selected === 'liveness',
      disabled: true
    })
  }
  if (props.showActivity) {
    pages.push({
      fullTitle: 'Activity',
      shortTitle: 'Activity',
      icon: <ActivityIcon />,
      link: '/scaling/activity',
      selected: props.selected === 'activity',
      disabled: true
    })
  }
  return <NavigationTabs pages={pages} />
}
