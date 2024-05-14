<template>
    <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item ref="firstTitle" label="Tiêu đề chính" name="firstTitle">
            <a-input v-model:value="formState.firstTitle" />
        </a-form-item>
        <a-form-item label="Tiêu đề lớn" name="bigTitle">
            <a-input v-model:value="formState.bigTitle" />
        </a-form-item>
        <a-form-item label="Thông tin bổ sung" name="moreInformation">
            <a-input v-model:value="formState.moreInformation" />
        </a-form-item>
        <a-form-item label="Link ảnh nền" name="image">
            <a-input v-model:value="formState.image" />
        </a-form-item>
        <a-form-item label="Trạng thái" name="statusBoolean">
            <a-switch v-model:value="formState.statusBoolean" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="this.onSubmit">Create</a-button>
            <a-button style="margin-left: 10px" @click="this.resetForm">Reset</a-button>
        </a-form-item>
    </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';
import axios from "@/core/httpClient";
import { message } from 'ant-design-vue';

interface FormState {
    firstTitle: string | undefined;
    bigTitle: string | undefined;
    moreInformation: string | undefined;
    image: string | undefined;
    statusBoolean: boolean;
    status: string | undefined;
}

export default defineComponent({
    name: 'MyFormComponent',
    data() {
        return {
            formState: {
                firstTitle: '',
                bigTitle: '',
                moreInformation: '',
                image: '',
                statusBoolean: true,
                status: 'ACTIVE'
            } as FormState,
            rules: {
                firstTitle: [
                    { required: true, message: 'Please input First Title', trigger: 'blur' },
                    { min: 3, max: 250, message: 'Length should be < 250', trigger: 'blur' },
                ],
                bigTitle: [{ required: true, message: 'Please input Big Title', trigger: 'change' }],
                moreInformation: [{ required: true, message: 'Please input More Information', trigger: 'change', type: 'object' }],
            },
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        };
    },
    methods: {
        onSubmit() {
            axios.post(`/api/v1/header/add`, this.formState)
                .then(data => {
                    message.info("Success");
                })
                .then(() => {
                    this.$router.push({ name: "header-list" });
                })
                .catch(err => {
                    console.error(err);
                    message.error(`Error: ${err}`);
                });
        },
        resetForm() {
            this.formState.firstTitle = '';
            this.formState.bigTitle = '';
            this.formState.moreInformation = '';
            this.formState.image = '';
            this.formState.statusBoolean = true;
            this.formState.status = 'ACTIVE';
        }
    },
    watch: {
        'formState.statusBoolean'(newStatus: boolean) {
            this.formState.status = newStatus ? 'ACTIVE' : 'BLOCK';
        }
    }
});
</script>
