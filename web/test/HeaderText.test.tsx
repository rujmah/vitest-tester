import HeaderText from "../src/components/HeaderText";
import { render, screen } from "./utils";

describe("first", () => {
  test("should render MainText with header text", () => {
    render(<HeaderText>Test Text</HeaderText>);

    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });
});
