<template>
  <a-table :columns="columns" :dataSource="data" :rowKey="record => record.id">
    <template v-slot:bodyCell="{ column, record }">
      {{ record }} ({{ column }})
    </template>
  </a-table>
</template>

<script>
import axios from "@/core/httpClient";
import { message } from 'ant-design-vue';

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          title: 'First Title',
          dataIndex: 'firstTitle',
          key: 'firstTitle',
        },
        {
          title: 'Big Title',
          dataIndex: 'bigTitle',
          key: 'bigTitle',
        },
        {
          title: 'More Information',
          dataIndex: 'moreInformation',
          key: 'moreInformation',
          ellipsis: true,
        },
        {
          title: 'Image Link',
          dataIndex: 'image',
          key: 'image',
          ellipsis: true,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          ellipsis: true,
        },
        {
          title: 'action',
          dataIndex: 'action',
          key: 'action',
        }
      ],
      pageConfig: {
        page: 0,
        size: 10,
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`/api/v1/header/get-page`, {
          params: {
            page: this.pageConfig.page,
            size: this.pageConfig.size,
          },
        });
        this.data = response.data.content;
      } catch (error) {
        message.error("Error when getting header data");
      }
    },
    async handleDelete(id) {
      try {
        await axios.delete(`/api/v1/header/delete/${id}`);
        message.success("Item deleted successfully");
        this.fetchData(); // Refresh the data after deletion
      } catch (error) {
        message.error("Error when deleting item", error);
      }
    },
  },
  watch: {
        'this.data'() {
            this.data.forEach(item=>{item.action="asda"})
        }
    }
};
</script>

<style lang="scss" scoped></style>
