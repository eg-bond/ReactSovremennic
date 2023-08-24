import { memo } from 'react'
import type { SpecialStateT } from '../../REDUX/special/specialReducerT'
import { scrollToTop } from '../../helpers'

const SiteModeButtonComp = ({
  siteMode,
  switchSiteMode,
}: {
  siteMode: SpecialStateT['siteMode']
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void
}) => {
  const modeToDispatch = siteMode === 'default' ? 'special' : 'default'

  return (
    <button
      className='specialSettings__modeButton'
      onClick={() => {
        switchSiteMode(modeToDispatch)
        scrollToTop()
      }}>
      {siteMode === 'default'
        ? 'ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ'
        : 'ОБЫЧНАЯ ВЕРСИЯ САЙТА'}
    </button>
  )
}

export const SiteModeButton = memo(SiteModeButtonComp)
