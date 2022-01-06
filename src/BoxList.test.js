import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList'

function addBox(boxList, height = '10', width = '20', color = 'green') {

  const colorInput = boxList.getByLabelText('Color')
  const heightInput = boxList.getByLabelText('Height')
  const widthInput = boxList.getByLabelText('Width')
  const btn = boxList.queryByText('Add Box')
  console.log('boxList', boxList)

  fireEvent.change(colorInput, { target: { value: color } })
  fireEvent.change(heightInput, { target: { value: height } })
  fireEvent.change(widthInput, { target: { value: width } })
  fireEvent.click(btn)
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('should add a box', function () {
  const boxList = render(<BoxList />)

  // haven't added yet
  expect(boxList.queryByText('Delete Box')).not.toBeInTheDocument();

  addBox(boxList);

  const removeButton = boxList.getByText('Delete Box')
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 20px;
    height: 10px;
    background-color: green;
  `);

  // all 3 forms should be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it('should remove a box', function () {
  const boxList = render(<BoxList />)

  expect(boxList.queryByText('Delete Box')).not.toBeInTheDocument();
  addBox(boxList);

  const removeButton = boxList.getByText('Delete Box')
  expect(removeButton).toBeInTheDocument();
  fireEvent.click(removeButton)
  expect(removeButton).not.toBeInTheDocument();
})