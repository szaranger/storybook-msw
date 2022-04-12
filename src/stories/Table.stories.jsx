import { Table } from "../Table";
import { fetchData } from "../utils";

export default {
  title: "Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (args) => <Table {...args} />;
Default.args = {
  people: fetchData(),
};
