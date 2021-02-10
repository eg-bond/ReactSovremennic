import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {switchSiteTheme, switchImagesVisibility, switchFontSize} from "../REDUX/specialReduser";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AdjustIcon from '@material-ui/icons/Adjust';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';


function SpecialSettings({switchSiteTheme, switchImagesVisibility, switchFontSize, imgHidden}) {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (e, key) => {
        const keys  = ['Enter', ' ']
        keys.includes(key) && state.checkedB
            ? setState({...state, [e.target.name]: false})
            : setState({...state, [e.target.name]: true})
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    return (


        <div className={"focus"}>
            <button onClick={() => switchSiteTheme('blackWhite')}>BlackWhite</button>
            <button onClick={() => switchSiteTheme('whiteBlack')}>WhiteBlack</button>
            <button onClick={() => switchSiteTheme('blackRed')}>BlackRed</button>
            <button onClick={() => switchSiteTheme('yellowBrown')}>YellowBrown</button>
            <button onClick={() => switchSiteTheme('blueGreen')}>BrownGreen</button>
            {imgHidden
                ? <button onClick={() => switchImagesVisibility(false)}>ShowImg</button>
                : <button onClick={() => switchImagesVisibility(true)}>HideImg</button>
            }
            <button onClick={() => switchFontSize('100')}>Font_100%</button>
            <button onClick={() => switchFontSize('150')}>Font_150%</button>
            <button onClick={() => switchFontSize('200')}>Font_200%</button>

            <div>
                <Switch
                    checked={state.checkedB}
                    onKeyPress={(e) => handleChange(e, e.key)}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>

            <div className={classes.root}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>100%</Button>
                    <Button>150%</Button>
                    <Button>200%</Button>
                </ButtonGroup>
                <ButtonGroup size="large" variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>100%</Button>
                    <Button>150%</Button>
                    <Button>200%</Button>
                </ButtonGroup>
                {/*<ButtonGroup size="large" variant="contained" color="primary" aria-label="contained primary button group">*/}
                <div>
                    <IconButton className="themeBW" >
                        <AdjustIcon />
                    </IconButton>
                    <IconButton className={'themeWB'} >
                        <AdjustIcon />
                    </IconButton>
                    <IconButton className={'themeBR'} >
                        <AdjustIcon />
                    </IconButton>
                    <IconButton className={'themeYB'}>
                        <AdjustIcon />
                    </IconButton>
                    <IconButton size={"medium"} className={'themeBG'} >
                        <AdjustIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<RemoveRedEyeOutlinedIcon />}
                    >
                        Версия для слабовидящих
                    </Button>
                </div>

                {/*</ButtonGroup>*/}
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
    connect(mapStateToProps, {switchSiteTheme, switchImagesVisibility, switchFontSize})
)(SpecialSettings);