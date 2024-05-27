<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from "@/core/httpClient";
import { message } from 'ant-design-vue';

const data = ref([]);
const columns = ref([
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
]);
const pageConfig = ref({
  current: 0, // renamed from 'page'
  pageSize: 3, // renamed from 'size'
  total: 10
});

const fetchData = async () => {
  try {
    const response = await axios.get(`/api/v1/header/get-page`, {
      params: {
        page: pageConfig.value.current,
        size: pageConfig.value.pageSize,
      },
    });
    data.value = response.data.content;
  } catch (error) {
    message.error("Error when getting header data");
  }
};

const getPage = async (current, pageSize) => {
  try {
    debugger;
    const response = await axios.get(`/api/v1/header/get-page`, {
      params: {
        page: current.value,
        size: pageSize.value,
      },
    });
    data.value = response.data.content;
    // pageConfig.value.total = 10; //response.data.totalElements; // Add this line
  } catch (error) {
    message.error("Error when getting header data");
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`/api/v1/header/delete/${id}`);
    message.success("Item deleted successfully");
    fetchData(); // Refresh the data after deletion
  } catch (error) {
    message.error("Error when deleting item", error);
  }
};

onMounted(() => {
  fetchData();
});

const handlePageChange = async (pageConfigParam) => {
  debugger;
  pageConfig.value.current = pageConfigParam.current;
  pageConfig.value.pageSize = pageConfigParam.pageSize;
  await getPage(pageConfig.value.current, pageConfig.value.pageSize);
};
</script>

<style lang="scss" scoped>
a {
  color: black;
}
</style>

<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300, y: 1000 }" :rowKey="record => record.id"
    :pagination="pageConfig" @change="handlePageChange">
    <template #bodyCell="{ column, record }">
      <div v-if="column.dataIndex === 'action'">
        <router-link v-if="record.id" :to="{ name: 'header-edit', params: { id: record.id } }">
          <a> Edit </a></router-link>
      </div>
      <div v-if="column.dataIndex === 'image'">
        <img :src="record.image" alt="image"
          style="width: 100px; height: 100px; object-fit: cover; object-position: center; border-radius: 50%;" />
      </div>
    </template>
  </a-table>

</template>