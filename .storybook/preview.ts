import type { Preview } from "@storybook/react";
import "../app/globals.css";
import withAppRouterContext from "../app/provider/withAppRouterContext";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    ecorators: [withAppRouterContext],
  },
};

export default preview;
