import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      normal: string;
    };
    shadows: {
      elementShadow: string;
      pageShadow: string;
    };
    colors: {
      main: string;
      warning: string;
      secondary: string;
      warningBackground: string;
      success: string;
      light: string;
      dark: string;
      shadowLight: string;
      shadowDark: string;
      inputFocus: string;
      borderInput: string;
      borderSidebar: string;
      textSidebar: string;
      notifications: {
        isNotReadIcon: string;
      }
      breadCrumbs: {
        background: string;
        breadcrumbLast: string;
        breadcrumbNotLast: string;
        breadcrumbHover: string;
        breadcrumbsSeparator: string;
      };
    };
    borderRadius: string;
  }
}
