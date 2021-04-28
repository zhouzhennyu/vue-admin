<template>
    <div class="login-container">
        <h2 class="login-title">登录</h2>
        <el-form 
            :model="formInfo" 
            status-icon 
            :rules="rules" 
            ref="form" 
            label-width="100px" 
            class="login-formInfo">
            <el-form-item label="账号" prop="user">
                <el-input type="text" v-model="formInfo.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="formInfo.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button 
                    class="login-btn" 
                    type="primary"
                    :loading="loading"
                    @click="submitForm()">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        const validateUser = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入账号'));
            } else {
                callback();
            }
        }
        const validatePass = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入密码'));
            } else if (value.length < 6) {
                callback(new Error('密码长度不能小于6'));
            } else {
                callback();
            }
        }
        return {
            formInfo: {
                user: 'admin',
                pass: '123456'
            },
            loading: false,
            rules: {
                user: [{ validator: validateUser, trigger: true }],
                pass: [{ validator: validatePass, trigger: true }]
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    console.log('校验成功', this.formInfo);
                    setTimeout(() => {
                        this.loading = false;
                    }, 300)
                } else {
                    console.log('校验失败');
                    return false;
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .login-container {
        width: 100%;
        min-height: 100%;
        background: #2d3a4b;
        .login-title {
            color: #fff;
            padding-top: 280px;
            padding-bottom: 30px;
            text-align: center;
        }
        .login-formInfo {
            width: 520px;
            margin: 0 auto;
            padding: 0 35px 0;
        }
        .login-btn {
            width: 100%;
        }
    }
</style>