export const SWITCH_LANG = 'SWITCH_LANG';
export const switchLanguage = lang => dispatch => {
    dispatch({
        type: SWITCH_LANG,
        data: lang,
    });
};

export const SWITCH_THEME = 'SWITCH_THEME';
export const switchTheme = theme => dispatch => {
    dispatch({
        type: SWITCH_THEME,
        data: theme,
    });
};
