import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {switchSiteMode, switchSiteTheme, switchImagesVisibility, switchFontSize} from "../REDUX/specialReduser";
import Switch from "@material-ui/core/Switch";
import { withStyles } from '@material-ui/core/styles';
import { black } from '@material-ui/core/colors';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AdjustIcon from '@material-ui/icons/Adjust';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Brightness1Icon from '@material-ui/icons/Brightness1';


function SpecialSettings({switchSiteTheme, switchImagesVisibility, switchFontSize, imgHidden, siteMode, switchSiteMode, themeCl}) {

    let modeToDispatch = siteMode === 'default' ? 'special' : 'default'

    const handleImgSwitch = () => imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)
    const handleImgSwitch_Enter = (key) => key === 'Enter' && handleImgSwitch()

    // const PurpleSwitch = withStyles({
    //     switchBase: {
    //       color: '#000',
    //       '&$checked': {
    //         color: '#000',
    //       },
    //       '&$checked + $track': {
    //         backgroundColor: '#000',
    //       },
    //     },
    //     checked: {},
    //     track: {},
    //   })(Switch);

    return (
        <div className="specialSettings__container">
            <div className={`specialSettings__flex`}>
                <div className='specialSettings__flex__item'>
                    <div>Цветовая схема</div>
                    
                    <IconButton onClick={() => switchSiteTheme('blackWhite')} className="themeBW" >
                        <Brightness1Icon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('whiteBlack')} className={'themeWB'} >
                        <Brightness1Icon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('blackRed')} className={'themeBR'} >
                        <Brightness1Icon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('yellowBrown')} className={'themeYB'}>
                        <Brightness1Icon />
                    </IconButton>
                    <IconButton onClick={() => switchSiteTheme('blueGreen')} size={"medium"} className={'themeBG'} >
                        <Brightness1Icon />
                    </IconButton>
                    
                    
                </div>

                <div className={`specialSettings__flex__item`}>
                    <div>Размер шрифта</div>
                    <ButtonGroup className={`specialSettings__flex__fontButtons`} size="large" variant="contained" aria-label="contained primary button group">
                        <Button onClick={() => switchFontSize('100')}>100%</Button>
                        <Button onClick={() => switchFontSize('150')}>150%</Button>
                        <Button onClick={() => switchFontSize('200')}>200%</Button>
                    </ButtonGroup>
                </div>

                <div className='specialSettings__flex__item'>
                    <div>Изображения</div>
                    <span>Выкл.</span>
                    <Switch
                        onClick={handleImgSwitch}
                        checked={!imgHidden}
                        onKeyPress={(e) => handleImgSwitch_Enter(e.key)}
                        color="das"
                        name="imgSwitcher"
                        inputProps={{ 'aria-label': 'primary checkbox'  }}
                    />
                    <span>Вкл.</span>
                </div>

                <div className='specialSettings__flex__item specialSettings__flex__modeButton'>
                    <Button
                        onClick={() => switchSiteMode(modeToDispatch)}
                        variant="contained"
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