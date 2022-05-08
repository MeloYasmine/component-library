export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'General Background',
    values: [
      {
        name: 'White Background',
        value: '#ffffff',
      },
      {
        name: 'Ligh Background',
        value: '#FDFCDC',
      },
    ],
  },
}

