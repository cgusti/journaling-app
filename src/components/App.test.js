import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app component with the word Blog on it", async () => {
  render(<App />);
  await screen.findByText(/Blog/);
});
