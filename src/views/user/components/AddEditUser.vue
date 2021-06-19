<template>
  <a-modal
    title="Title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item ref="name" label="Activity name" prop="name">
        <a-input
          v-model="form.name"
          @blur="
            () => {
              $refs.name.onFieldBlur();
            }
          "
        />
      </a-form-model-item>
      <a-form-model-item label="Activity zone" prop="region">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai"> Zone one </a-select-option>
          <a-select-option value="beijing"> Zone two </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Activity form" prop="desc">
        <a-input v-model="form.desc" type="textarea" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  name: "AddEditUser",
  props: {
    visible: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      confirmLoading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    visible() {
      this.$nextTick(() => {
        this.initialEvent(this.visible);
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initialEvent(this.visible);
    });
  },
  methods: {
    initialEvent() {
      if (this.visible) {
        console.log("322");
      }
    },
    handleOk() {
      this.confirmLoading = true;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.confirmLoading = false;
          this.$emit("close");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleCancel() {
      this.$emit("close");
    },
  },
};
</script>