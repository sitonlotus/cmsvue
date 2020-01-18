<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学院管理</el-breadcrumb-item>
            <el-breadcrumb-item>老师管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-table
                :data="teacherData"
                border
                style="width: 100%">
                <el-table-column
                    prop="id_coach"
                    label="ID号"
                    width="60px">
                </el-table-column>
                <el-table-column
                    prop="name_coach"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="照片"
                    width="200px">
                    <template slot-scope="scope">
                    <img :src="'http://www.qhdlink-student.top/'+scope.row.path_coach" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="dage_coach"
                    label="入行时间">
                </el-table-column>
                <el-table-column
                    prop="tage_coach"
                    label="加入朗科时间">
                </el-table-column>
                <el-table-column
                    prop="honor_coach"
                    label="目前职位">
                </el-table-column>
                <el-table-column
                    prop="type_coach"
                    label="以前职位">
                </el-table-column>
                <el-table-column
                    label="评价星级">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.evaluate_coach==1">一级</el-tag>
                        <el-tag type="success" v-else-if="scope.row.evaluate_coach==2">二级</el-tag>
                        <el-tag type="info" v-else-if="scope.row.evaluate_coach==3">三级</el-tag>
                        <el-tag type="warning" v-else-if="scope.row.evaluate_coach==4">四级</el-tag>
                        <el-tag type="danger" v-else>五级</el-tag>
                    </template>
                </el-table-column>

                <el-table-column
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small" @click="editTeacherInfo(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog
            title="修改信息"
            :visible.sync="editDialogVisible"
            width="50%">
            <el-form ref="editTeacherForm" :model="teacherRow" label-width="100px">
                <el-form-item label="姓名">
                    <el-input v-model="teacherRow.name_coach" disabled></el-input>
                </el-form-item>
                <el-form-item label="照片">
                    <el-upload
                    class="upload-demo"
                    action="#"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture">
                        <el-button size="mini" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="入行时间">
                    <el-date-picker
                    v-model="teacherRow.dage_coach"
                    type="date"
                    placeholder="选择入行日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="加入朗科时间">
                    <el-date-picker
                    v-model="teacherRow.tage_coach"
                    type="date"
                    placeholder="选择加入朗科时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="目前职位">
                    <el-input v-model="teacherRow.honor_coach"></el-input>
                </el-form-item>
                <el-form-item label="以前职位">
                    <el-input v-model="teacherRow.type_coach"></el-input>
                </el-form-item>
                <el-form-item label="评价星级">
                    <el-select v-model="teacherRow.evaluate_coach" placeholder="请选择老师评价星级">
                        <el-option label="一级" value="1"></el-option>
                        <el-option label="二级" value="2"></el-option>
                        <el-option label="三级" value="3"></el-option>
                        <el-option label="四级" value="4"></el-option>
                        <el-option label="五级" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editCancel">取 消</el-button>
                <el-button type="primary" @click="submitEditInfo">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:"teacher",
    mounted(){
        this.init();
    },
    methods:{
        init:function(){
            this.$store.dispatch("teacher",[this.$store.state.login.username,this.$store.state.login.userpwd])
        },
        editTeacherInfo:function(data){
            this.teacherRow=data;
            this.editDialogVisible=true;
            console.log(data.path_coach.splite("/")[-1]);
            // this.fileList={"name":}
        },
        editCancel:function(){
            this.$refs.editTeacherForm.resetFields();
            this.editDialogVisible = false;
        },
        submitEditInfo:function(){
            this.editDialogVisible = false;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    },
    data(){
        return {
            teacherData:this.$store.state.teacher,
            editDialogVisible:false,
            teacherRow:{},
            fileList:{}
        }
    }

}
</script>
<style lang="less" scoped>
img{
    width: 180px;
}
</style>