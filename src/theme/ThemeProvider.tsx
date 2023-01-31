import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontSize: {
    normal: '16px',
  },
  shadows: {
    elementShadow: '#00000028 0px 1px 4px',
    pageShadow: 'rgba(149, 157, 165, 0.2) 0 8px 24px ',
  },
  colors: {
    main: '#07c',
    warning: '#f86B63',
    secondary: '#006ee430',
    warningBackground: '#f7e2e1',
    success: '#00BFB3',
    light: '#fff',
    dark: '#000000',
    shadowLight: '#a3a3a3',
    shadowDark: '#7a7a7a',
    inputFocus: '#fbfcfd',
    borderInput: '#ccc',
    borderSidebar: '#f5f7fa',
    textSidebar: '#6e7177',
    notifications: {
      isNotReadIcon: '#f74444c7'
    },
    breadCrumbs: {
      background: '#f1f1f1c1',
      breadcrumbLast: '#8e8f91',
      breadcrumbNotLast: '#414347',
      breadcrumbHover: '#414347',
      breadcrumbsSeparator: ' #69707dD',
    },
  },
  borderRadius: '6px',
};

export { theme };
