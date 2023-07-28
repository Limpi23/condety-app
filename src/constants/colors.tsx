export interface ThemeColors {
  light: {
    background: string;
    backgroundBody: string;
    text: string;
    cardBackground: string;
    cardHeaderBackground: string;
    cardText: string;
    cardHeaderText: string;
    textCondety: string;
  };
  dark: {
    background: string;
    backgroundBody: string;
    text: string;
    cardBackground: string;
    cardHeaderBackground: string;
    cardText: string;
    cardHeaderText: string;
    textCondety: "#00FF9D"
  };
}

export const colors: ThemeColors = {
  light: {
    background: 'white',
    backgroundBody: '#fefefe',
    text: 'black',
    cardBackground: '#f2f2f2',
    cardHeaderBackground: '#FFF',
    cardText: 'black',
    cardHeaderText: 'black',
    textCondety: '#00FF9D'
  },
  dark: {
    background: 'black',
    backgroundBody: '#383838',
    text: 'white',
    cardBackground: '#4E4E4E',
    cardHeaderBackground: '#000',
    cardText: 'white',
    cardHeaderText: 'white',
    textCondety: '#00FF9D',
  },
};
