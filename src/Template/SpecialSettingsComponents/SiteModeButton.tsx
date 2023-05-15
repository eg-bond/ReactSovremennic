import { memo } from 'react'
import { SpecialStateT } from '../../REDUX/special/spacialReducerT'
import { Button } from '@material-ui/core'
import { scrollToTop } from '../../helpers'
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined'

const SiteModeButtonComp = ({
  siteMode,
  switchSiteMode,
}: {
  siteMode: SpecialStateT['siteMode']
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void
}) => {
  const modeToDispatch = siteMode === 'default' ? 'special' : 'default'

  return (
    <Button
      className='specialSettings__modeButton'
      onClick={() => {
        switchSiteMode(modeToDispatch)
        scrollToTop()
      }}
      variant='contained'
      startIcon={<RemoveRedEyeOutlinedIcon />}>
      {siteMode === 'default'
        ? 'Версия для слабовидящих'
        : 'Обычная версия сайта'}
    </Button>
  )
}

export const SiteModeButton = memo(SiteModeButtonComp)
