<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="editHandler(record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="deleHandle(record)">删除</a>

        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
    <AddEditUser
      :visible="modelVisible"
      @close="() => (modelVisible = false)"
    />
  </div>
</template>
<script>
import AddEditUser from "./components/AddEditUser.vue";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default {
  data() {
    return {
      data,
      columns,
      modelVisible: false,
    };
  },
  methods: {
    editHandler() {
      this.modelVisible = true;
    },
    deleHandle() {
      //   let self = this;
      this.$confirm({
        title: "确认提示",
        content: `是否确认删除？`,
        onOk() {
          //已选择的行，取id
          // self.selectedRows = self.selectedRows.map((item) => item.id);
          // self.deleteUser(self.selectedRows);
        },
      });
    },
  },
  components: {
    AddEditUser,
  },
};
</script>
