import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {switchSiteMode, switchSiteTheme, switchImagesVisibility, switchFontSize} from "../REDUX/specialReduser";
import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AdjustIcon from '@material-ui/icons/Adjust';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';


function SpecialSettings({switchSiteTheme, switchImagesVisibility, switchFontSize, imgHidden, siteMode, switchSiteMode}) {

    let modeToDispatch = siteMode === 'default' ? 'special' : 'default'

    const handleImgSwitch = () => imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)
    const handleImgSwitch_Enter = (key) => key === 'Enter' && handleImgSwitch()

    return (
        <div className={"focus"}>
            <div className={`specialSettings__flex`}>
                <div className='specialSettings__item'>
                    <div>Цветовая схема</div>
                    <IconButton onClick={() => switchSiteTheme('blackWhite')} className="themeBW" >
                        <AdjustIcon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('whiteBlack')} className={'themeWB'} >
                        <AdjustIcon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('blackRed')} className={'themeBR'} >
                        <AdjustIcon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('yellowBrown')} className={'themeYB'}>
                        <AdjustIcon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('blueGreen')} size={"medium"} className={'themeBG'} >
                        <AdjustIcon />
                    </IconButton>
                </div>

                <div className='specialSettings__item'>
                    <div>Размер шрифта</div>
                    <ButtonGroup size="large" variant="contained" color="primary" aria-label="contained primary button group">
                        <Button onClick={() => switchFontSize('100')}>100%</Button>
                        <Button onClick={() => switchFontSize('150')}>150%</Button>
                        <Button onClick={() => switchFontSize('200')}>200%</Button>
                    </ButtonGroup>
                </div>

                <div className='specialSettings__item'>
                    <div>Изображения</div>
                    <span>Выкл.</span>
                    <Switch
                        onClick={handleImgSwitch}
                        checked={!imgHidden}
                        onKeyPress={(e) => handleImgSwitch_Enter(e.key)}
                        color="primary"
                        name="imgSwitcher"
                        inputProps={{ 'aria-label': 'primary checkbox'  }}
                    />
                    <span>Вкл.</span>
                </div>

                <div className='specialSettings__item'>
                    <Button
                        onClick={() => switchSiteMode(modeToDispatch)}
                        variant="contained"
                        color="secondary"
                        // className={classes.button}
                        startIcon={<RemoveRedEyeOutlinedIcon />}
                    >
                        {siteMode === "default" ? "Версия для слабовидящих" : "Обычная версия сайта"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    siteMode: state.special.siteMode,
    theme: state.special.theme,
    imgHidden: state.special.imgHidden,
    fontSize: state.special.fontSize
});

export default compose(
    connect(mapStateToProps, {switchSiteMode ,switchSiteTheme, switchImagesVisibility, switchFontSize})
)(SpecialSettings);