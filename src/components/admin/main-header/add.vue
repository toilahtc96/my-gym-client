<template>
  <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item ref="firstTitle" label="Tiêu đề chính" name="firstTitle">
      <a-input :v-model="formState.firstTitle" />
    </a-form-item>
    <a-form-item label="Tiêu đề lớn" name="bigTitle">
      <a-input :v-model="formState.bigTitle" />
    </a-form-item>
    <a-form-item label="Thông tin bổ sung" name="moreInformation">
      <a-input :v-model="formState.moreInformation" />
    </a-form-item>
    <a-form-item label="Link ảnh nền" name="image">
      <a-input :v-model="formState.image" />
    </a-form-item>
    <a-form-item label="Trạng thái" name="statusBoolean">
      <a-switch v-model:checked="formState.statusBoolean" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { defineComponent, reactive, ref, watch } from 'vue';
import axios from "@/core/httpClient";

interface FormState {
  firstTitle: string | undefined;
  bigTitle: string | undefined;
  moreInformation: string | undefined;
  image: string | undefined;
  statusBoolean: boolean;
  status: string | undefined;
}

const formState = reactive({
  firstTitle: '',
  bigTitle: '',
  moreInformation: '',
  image: '',
  statusBoolean: true,
  status: 'ACTIVE'
} as FormState);
const rules = {
  firstTitle: [
    { required: true, message: 'Please input First Title', trigger: 'blur' },
    { min: 3, max: 250, message: 'Length should be < 250', trigger: 'blur' },
  ],
  bigTitle: [{ required: true, message: 'Please input Big Title', trigger: 'change' }],
  moreInformation: [{ required: true, message: 'Please input More Information', trigger: 'change', type: 'object' }],
};

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const onSubmit = () => {
  axios.post(`/api/v1/header/add`, formState)
    .then(data => {
      message.info("Success");
    })
    .then(() => {
      //   this.$router.push({ name: "header-list" });
    })
    .catch(err => {
      console.error(err);
      message.error(`Error: ${err}`);
    });
};

const resetForm = () => {
  debugger;
  this.formState.firstTitle = '';
  formState.bigTitle = '';
  formState.moreInformation = '';
  formState.image = '';
  formState.statusBoolean = true;
  formState.status = 'ACTIVE';
};

watch(() => formState.statusBoolean, (newStatus) => {
  formState.status = newStatus ? 'ACTIVE' : 'BLOCK';
});

const changeStatus = () => {
  debugger;
  formState.statusBoolean = !formState.statusBoolean;
  console.log(formState);
}
</script>
