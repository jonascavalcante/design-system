import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import { Signin } from "./Signin";

export default {
  title: "Pages/Sign in",
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/auth", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "jonas@mail.com"
    );

    userEvent.type(canvas.getByPlaceholderText("********"), "jonas123");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};
